import { DayReq, DayRes, DayType } from "./Types";

const URL_BASE = "http://localhost:5236/Days";
const headers = {'Content-type': "application/json; charset=UTF-8"}

export const createDay = async ({date, month, emotions, content}: DayType ): Promise<DayType> => {
    const body = JSON.stringify({
        date: date,
        month: month,
        emotions: emotions,
        content: content
    })
    const method = 'POST'
    const response = await (await fetch(URL_BASE, { body, method, headers })).json()
    return response;
}

export const getAllDays = async (): Promise<DayType[]> => {
    const result = await fetch(URL_BASE).then(result => result.json())
    return result.$values as DayType[];
}

export const getSpecificDay = async ({date, month}: DayReq): Promise<DayRes> => {
   
    const response = await fetch(URL_BASE + `/${date}/${month}`).then(result => result.json())
    return response as DayRes
}