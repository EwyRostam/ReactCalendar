import { Feeling } from "./EmotionsAPI";

export type Relationship = {
    name: string;
    wantedEmotions: Feeling[];
}

const URL_BASE = "http://localhost:5236/Relationships";
const headers = {'Content-type': "application/json; charset=UTF-8"}

export const createRelationship = async ({content, opposite, value} :Feeling ): Promise<Feeling> => {
    const body = JSON.stringify({
        content: content,
        opposite: opposite,
        value: value
    })
    const method = 'POST'
    const response = await (await fetch(URL_BASE, { body, method, headers })).json()
    return response;
}

export const getAllEmotions = async (): Promise<Feeling[]> => {
    const result = await fetch(URL_BASE).then(result => result.json())
    return result.$values as Feeling[];
}