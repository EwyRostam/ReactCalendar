import { useState } from 'react';
import { Weekdays } from '../configs/Weekdays'
import CalenderDate from './CalenderDate';
import { daysBeforeMonth, daysInMonth, month, today } from '../helpers/DateHelpers';
import { getAllDays } from '../api/DaysAPI';
import { useQuery } from 'react-query';


let monthWithColors: Map<number, string> = new Map();
daysInMonth.map((day) => monthWithColors.set(day, ""));


export function Calendar() {
    const [color, setColor] = useState<Map<number, string>>(monthWithColors);
    const [selectedDate, setSelectedDate] = useState<number>(today);

    const { data: registeredDays } = useQuery('days', getAllDays);

    if (registeredDays) {
        console.log("Array fetched from api", registeredDays)

        const daysList = registeredDays!.slice();

        console.log("Copy of array", daysList)

        for (let i = 0; i < daysList.length; i++) {
            console.log("item in list", daysList[i])

            const value = daysList[i].score! > 0 ? "bg-green-400 hover:bg-green-500" : "bg-red-400 hover:bg-red-500";

            console.log("Score of item", daysList[i].score)

            color.set(daysList[i].date, value);

            console.log("Date of item", daysList[i].date)
        }
    }


    return (
        <>
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

                    {[...color.keys()].map((thisDate) => {
                        return <CalenderDate date={thisDate} color={color} key={thisDate} handleClick={setSelectedDate} selected={selectedDate} />
                    })
                    }
                </div>
            </div>
        </>
    )
}