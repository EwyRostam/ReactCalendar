import { MonthReq, MonthRes } from "./Types";

const URL_BASE = "http://localhost:5236/Months";



export const getSpecificMonth = async ({monthIndex}: MonthReq): Promise<MonthRes> => {
  const response = await fetch(URL_BASE + `/${monthIndex}`).then((result) =>
    result.json()
  );
  return response as MonthRes;
};
