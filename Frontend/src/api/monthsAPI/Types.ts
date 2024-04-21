import { DayData } from "../../components/EmotionChart";

export type MonthReq = {
    monthIndex: number;
    numberOfDays: number;
  };
  
  export type MonthRes = {
    monthIndex: number;
    daysInMonth: { $values: DayData[] };
  };