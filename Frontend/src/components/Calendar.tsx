import { useState } from 'react';
import { Weekdays } from '../configs/Weekdays'
import CalenderDate from './CalenderDate';
import { daysBeforeMonth, daysInMonth, month, today } from '../helpers/DateHelpers';
import { getAllDays } from '../api/DaysAPI';
import { useQuery } from 'react-query';
import CalendarLine from './CalendarLine';


let monthWithColors: Map<number, string> = new Map();
daysInMonth.map((day) => monthWithColors.set(day, ""));


export function Calendar() {
    const [color] = useState<Map<number, string>>(monthWithColors);
    const [selectedDate, setSelectedDate] = useState<number>(today);

    const { data: registeredDays } = useQuery('days', getAllDays);

    if (registeredDays) {

        const daysList = registeredDays!.slice();

        for (let i = 0; i < daysList.length; i++) {
            const value = daysList[i].score! > 0 ? "bg-green-400 hover:bg-green-500" : "bg-red-400 hover:bg-red-500";
            color.set(daysList[i].date, value);
        }
    }


    return (
        <>
            <div className="flex flex-col items-center">
                <header className="mt-20 mb-5">
                    <h1 className="text-3xl">
                        {month}
                    </h1>
                </header>
                <div className="flex justify-center w-80 h-64 shadow-xl drop-shadow-2xl break-normal grid grid-cols-7 rounded-md bg-white lg:w-3/5 lg:h-[65vh]">
                    {Weekdays.map(day => (
                        <div key={day} className="w-1/7 flex items-center justify-center py-1 px-1">{day}</div>
                    ))}
                    <CalendarLine/>
                    {daysBeforeMonth.map((emptyDayIndex) => (
                        <button key={emptyDayIndex} className="w-1/7"></button>
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