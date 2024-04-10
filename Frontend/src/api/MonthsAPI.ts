import { DayType } from "./DaysAPI";

const URL_BASE = "http://localhost:5236/Months";

type Month = {
    monthIndex: number
    DaysInMonth: DayType[]
}

export const getMonth = async ({monthIndex}: Month): Promise<Month> => {
    const response = await fetch(URL_BASE + `/${monthIndex}`).then(result => result.json())
    return response as Month
}