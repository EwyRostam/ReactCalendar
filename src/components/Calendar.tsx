import { useState } from 'react';
import { Weekdays } from '../configs/Weekdays'
import { getDaysInMonth, format, getMonth, getYear } from "date-fns";
import CalenderDate from './CalenderDate';

const year = getYear(new Date());
const monthAsNumber = getMonth(new Date());
const month = format(new Date(), 'MMMM');
const firstWeekDay = parseInt(format(new Date(year, monthAsNumber, 1), 'i')) - 1;
const numberOfDays = getDaysInMonth(new Date());
const daysBeforeMonth = [...Array(firstWeekDay).keys()].map(i => i + 1);
const daysInMonth = [...Array(numberOfDays).keys()].map(i => i + 1);
let monthWithColors: Map<number, string> = new Map();

daysInMonth.map((day) => monthWithColors.set(day, ""));


export const Calendar = () => {
    const [color, setColor] = useState<Map<number, string>>(monthWithColors);

    function handleClick(date: number) {
        let currentMap: Map<number, string> = color;
        console.log("CurrentMap: ", currentMap)
        color.get(date) == ""
            ? (currentMap.set(date, "bg-red-400"))
            : (currentMap.set(date, ""))
        setColor(currentMap);
        console.log("Clicked date!")
        console.log("Color map after set color: ", color)
    }

    return (
        <div className="flex flex-col items-center">
            <header>
                <h1 className="text-3xl">
                    {month}
                </h1>
            </header>
            <div className="flex justify-center w-64 border border-black break-normal grid grid-cols-7">
                {Weekdays.map(day => (
                    <div key={day} className="w-1/7">{day}</div>
                ))}
                {daysBeforeMonth.map((emptyDayIndex) => (
                    <button key={emptyDayIndex} className="w-1/7 border border-black"></button>
                ))}

                {daysInMonth.map((thisDate) => {
                    return <CalenderDate date={thisDate} color={color.get(thisDate) ?? ""} onDateClick={() => handleClick(thisDate)} key={thisDate}/>
                })
                }
            </div>
        </div>
    )
}