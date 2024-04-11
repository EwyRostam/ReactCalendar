import { getDaysInMonth, format, getMonth, getYear } from "date-fns";


export const year = getYear(new Date());
export const monthIndex = getMonth(new Date());
export const monthAsNumber = monthIndex +1;
export const month = format(new Date(), 'MMMM');
export const today = parseInt(format(new Date(), 'd'));
export const firstWeekDay = parseInt(format(new Date(year, monthIndex, 1), 'i')) - 1;
export const numberOfDays = getDaysInMonth(new Date());
export const daysBeforeMonth = [...Array(firstWeekDay).keys()].map(i => i + 1);
export const daysInMonth = [...Array(numberOfDays).keys()].map(i => i + 1);
