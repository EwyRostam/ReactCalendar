import { Feeling } from "./EmotionsAPI";

export type Day = {
    date: string;
    emotions: Feeling[];
}

const URL_BASE = "http://localhost:5236/Days";
const headers = {'Content-type': "application/json; charset=UTF-8"}

export const createEmotion = async ({date, emotions}: Day ): Promise<Day> => {
    const body = JSON.stringify({
        date: date,
        emotions: emotions
    })
    const method = 'POST'
    const response = await (await fetch(URL_BASE, { body, method, headers })).json()
    return response;
}

export const getAllEmotions = async (): Promise<Day[]> => {
    const result = await fetch(URL_BASE).then(result => result.json())
    return result.$values as Day[];
}