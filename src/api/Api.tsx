type Feeling = {
    emotion: string;
    opposite: string;
    value: string;
    isWanted: boolean;
}

const URL_BASE = "";
const headers = {'Content-type': "application/json; charset=UTF-8"}

export const createEmotion = async ({emotion, opposite, value, isWanted} :Feeling ): Promise<Response> => {
    const body = JSON.stringify({
        emotion: emotion,
        opposite: opposite,
        value: value,
        isWanted: isWanted,

    })
    const method = 'POST'
    const response = await (await fetch(URL_BASE, { body, method, headers })).json()
    return response;
}