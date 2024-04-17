import { Feeling } from "../emotoinsAPI/EmotionsAPI";

export type DayType = {
    date: number;
    month: number;
    emotions: Feeling[];
    score?: number;
    content?: string;

}

export type DayReq = {
    date: number; 
    month: number; 
}

export type DayRes = {
    date: number;
    month: number;
    score?: number;
    content?: string;
    emotions: {$values: Feeling[]}
}