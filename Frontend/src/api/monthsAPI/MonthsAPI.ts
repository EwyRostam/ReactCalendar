import { MonthReq, MonthRes } from "./Types";

const URL_BASE = "http://localhost:5236/Months";
const headers = {'Content-type': "application/json; charset=UTF-8"}

export const getSpecificMonth = async ({monthIndex}: MonthReq): Promise<MonthRes> => {
  const response = await fetch(URL_BASE + `/${monthIndex}`).then((result) =>
    result.json()
  );
  return response as MonthRes;
};

export const createMonth = async ({monthIndex}: MonthReq) => {
  const body = JSON.stringify({monthIndex: monthIndex});

  const method = 'POST'
  const response = await (await fetch(URL_BASE, {body, method, headers})).json()
  return response;
}
