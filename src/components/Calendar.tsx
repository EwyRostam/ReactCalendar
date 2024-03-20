import { Weekdays } from '../configs/Weekdays'
import { getDaysInMonth, format, getMonth, getYear } from "date-fns";

const year = getYear(new Date());
const monthAsNumber = getMonth(new Date());
const month = format(new Date(), 'MMMM');
const firstWeekDay = parseInt(format(new Date(year, monthAsNumber, 1), 'i')) -1;
const numberOfDays = getDaysInMonth(new Date());
const daysBeforeMonth = [...Array(firstWeekDay).keys()].map(i => i + 1);
const daysInMonth = [...Array(numberOfDays).keys()].map(i => i + 1);



export const Calendar = ({ }) => {
    return (
        <div className="flex flex-col items-center ">
            <header>
                <h1 className="text-3xl">
                    {month}
                </h1>
            </header>
            <div className="flex justify-center w-64 border border-black break-normal grid grid-cols-7">
                {Weekdays.map(day => (
                    <div key={day} className="w-1/7">{day}</div>
                ))}
                {daysBeforeMonth.map((number) => (
                    <button key={number} className="w-1/7 border border-black"></button>
                ))}
                {daysInMonth.map(date => (
                    <button key={date} className="w-1/7 border border-black">{date}</button>
                ))}
            </div>
        </div>
    )
}