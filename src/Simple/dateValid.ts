function isLeapYear(y: number): boolean {
  return y % 100 === 0 ? y % 400 === 0 : y % 4 === 0;
}

function isValidMonth(m: number): boolean {
  return m >= 1 && m <= 12;
}

function isValid(y: number, m: number, d: number): boolean {
  if (m === 2) {
    return isLeapYear(y) ? d > 0 && d < 30 : d > 0 && d < 29;
  }
  return m === 4 || m === 6 || m === 9 || m === 11
    ? d > 0 && d < 31
    : d > 0 && d <= 31;
}
function isValidYear(y: number): boolean {
  return y > 0;
}
export function isDateValid(y: number, m: number, d: number): boolean {
  return isValidYear(y) && isValidMonth(m) && isValid(y, m, d);
}
