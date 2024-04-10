import { DayType } from "./DaysAPI";

const URL_BASE = "http://localhost:5236/Months";

export type MonthReq = {
  monthIndex: number;
};

export type MonthRes = {
  monthIndex: number;
  daysInMonth: { $values: DayType[] };
};

export const getSpecificMonth = async ({monthIndex}: MonthReq): Promise<MonthRes> => {
  const response = await fetch(URL_BASE + `/${monthIndex}`).then((result) =>
    result.json()
  );
  return response as MonthRes;
};
