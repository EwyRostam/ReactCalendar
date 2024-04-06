export type Feeling = {
    emotion: string;
    oppositeEmotion: string;
    positiveOrNegative: string;
    wanted: boolean;
}

const URL_BASE = "";
const headers = {'Content-type': "application/json; charset=UTF-8"}

export const createEmotion = async ({emotion, oppositeEmotion, positiveOrNegative, wanted} :Feeling ): Promise<Feeling> => {
    const body = JSON.stringify({
        emotion: emotion,
        oppositeEmotion: oppositeEmotion,
        positiveOrNegative: positiveOrNegative,
        wanted: wanted
    })
    const method = 'POST'
    const response = await (await fetch(URL_BASE, { body, method, headers })).json()
    return response;
}