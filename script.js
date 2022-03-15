const getHtmlElement = (type, typeValue) => {
  return document.querySelector(`${type === "id" ? "#" : "."}${typeValue}`);
};

const birthDate = getHtmlElement("id", "birthDate");
const presentDate = getHtmlElement("id", "ageAtDate");
const ageInMonths = getHtmlElement("id", "months");
const ageInMonthsWeek = getHtmlElement("id", "week");
const ageInMonthsDays = getHtmlElement("id", "day");
const ageInWeeks = getHtmlElement("id", "ageInWeeks");
const ageInWeeksDays = getHtmlElement("id", "dayOfWeek");
const ageInDays = getHtmlElement("id", "ageInDays");
const calculateBtn = getHtmlElement("id", "btn");
const negativeDateHandler = (passdate) => {
  return passdate > 0 ? passdate : 0;
};

const birthDatehandler = () => {
  const userDateOfBirth = birthDate.value;
  const userPreesntDate = presentDate.value;
  var ageDiffr = new Date(userPreesntDate) - new Date(userDateOfBirth);
  const years = (ageDiffr * 10 ** -3) / (60 * 60 * 365 * 24);
  const finalYears = Math.floor((ageDiffr * 10 ** -3) / (60 * 60 * 365 * 24));
  const date1 = negativeDateHandler(finalYears);
  const months = (years - Math.floor(years)) * 12;
  const finalMonths = Math.floor(months);
  const date2 = negativeDateHandler(finalMonths);
  const days = months * 30 - Math.floor(months) * 30;
  const finalDays = Math.floor(days);
  const date3 = negativeDateHandler(finalDays);
  console.log(date1, date2, date3);
  console.log(years, months, days);
};

calculateBtn.addEventListener("click", birthDatehandler);
