addEventListener("load", () => {
  const now = new Date();

  for (let i = 2000; i < now.getFullYear() + 15; i++) {
    const newOption = document.createElement("option");
    const optionText = document.createTextNode(String(i));
    newOption.appendChild(optionText);
    document.getElementById("year")?.appendChild(newOption);
  }

  const monthElemnt = document.getElementById("month") as HTMLInputElement;
  const yearElement = document.getElementById("year") as HTMLInputElement;
  const grids = document.getElementById("date-grid") as HTMLElement;
  printDays(6, 31, grids);

  monthElemnt.addEventListener("input", () => {
    dateValue(monthElemnt, yearElement);
  });

  yearElement.addEventListener("input", () => {
    dateValue(monthElemnt, yearElement);
  });
});

function dateValue(
  monthElemnt: HTMLInputElement,
  yearElement: HTMLInputElement
) {
  const m = Number(monthElemnt.value);
  const y = Number(yearElement.value);

  const days = numOfDays(m, y);

  const date = new Date(y, m, 1);
  const startDay = date.getDay();

  const grids = document.getElementById("date-grid") as HTMLElement;

  printDays(startDay, days, grids);
}

function printDays(startDay: number, days: number, grids: HTMLElement) {
  let str = "";
  for (let i = 1; i < startDay + 1; i += 1) {
    str += `<div></div>`;
  }

  for (let i = 1; i <= days; i += 1) {
    str += `<div>${i}</div>`;
  }

  grids.innerHTML = str;
}

function numOfDays(m: number, y: number): number {
  if (m === 1) return isLeapYear(y) ? 29 : 28;

  return m === 0 ||
    m === 2 ||
    m === 4 ||
    m === 6 ||
    m === 7 ||
    m === 9 ||
    m === 11
    ? 31
    : 30;
}

function isLeapYear(y: number): boolean {
  return y % 100 === 0 ? y % 400 === 0 : y % 4 === 0;
}
