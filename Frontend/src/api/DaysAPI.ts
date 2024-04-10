import { Feeling } from "./EmotionsAPI";

export type DayType = {
    date: number;
    month: number;
    emotions: Feeling[];
    score?: number;
}

const URL_BASE = "http://localhost:5236/Days";
const headers = {'Content-type': "application/json; charset=UTF-8"}

export const createDay = async ({date, month, emotions}: DayType ): Promise<DayType> => {
    const body = JSON.stringify({
        date: date,
        month: month,
        emotions: emotions
    })
    const method = 'POST'
    const response = await (await fetch(URL_BASE, { body, method, headers })).json()
    return response;
}

export const getAllDays = async (): Promise<DayType[]> => {
    const result = await fetch(URL_BASE).then(result => result.json())
    return result.$values as DayType[];
}