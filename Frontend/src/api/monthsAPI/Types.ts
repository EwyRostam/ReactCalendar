import { DayData } from "../../components/EmotionChart";

export type MonthReq = {
    monthIndex: number;
  };
  
  export type MonthRes = {
    monthIndex: number;
    daysInMonth: { $values: DayData[] };
  };