import { useState } from 'react';
import { Weekdays } from '../configs/Weekdays'
import CalenderDate from './CalenderDate';
import Feeling from './Feeling';
import { daysBeforeMonth, daysInMonth, month, today } from '../helpers/DateHelpers';


let monthWithColors: Map<number, string> = new Map();
daysInMonth.map((day) => monthWithColors.set(day, ""));


export function Calendar() {
    const [color, setColor] = useState<Map<number, string>>(monthWithColors);
    const [selectedDate, setSelectedDate] = useState<number>(today);

    const ChangeColor = (mood: string) => {
        const currentMap = color;
        color.get(selectedDate) != mood
            ? (currentMap.set(selectedDate, mood))
            : (currentMap.set(selectedDate, ""))

        setColor(new Map(currentMap));
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
            <Feeling handleClick={ChangeColor} />
        </>
    )
}