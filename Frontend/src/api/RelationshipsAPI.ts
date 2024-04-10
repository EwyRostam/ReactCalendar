import { Feeling } from "./EmotionsAPI";

export type Relationship = {
    id?: number;
    name: string;
    category: string;
    wantedEmotions: Feeling[];
}

const URL_BASE = "http://localhost:5236/Relationships";
const headers = {'Content-type': "application/json; charset=UTF-8"}

export const createRelationship = async ({name, category, wantedEmotions} :Relationship ): Promise<Relationship> => {
    const body = JSON.stringify({
        name: name,
        category: category,
        wantedEmotions: wantedEmotions
    })
    const method = 'POST'
    const response = await (await fetch(URL_BASE, { body, method, headers })).json()
    return response;
}

export const getAllRelationships = async (): Promise<Relationship[]> => {
    const result = await fetch(URL_BASE).then(result => result.json())
    return result.$values as Relationship[];
}

export const getSpecificRelationship = async (id: number): Promise<Relationship> => {
   
    const response = await fetch(URL_BASE + `/${id}`).then(result => result.json())
    return response as Relationship
}