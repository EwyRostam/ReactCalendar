import { Feeling } from "../emotoinsAPI/Types";
import { MonthRes } from "../monthsAPI/Types";

export type Relationship = {
    id?: number;
    name?: string;
    category?: string;
    months: MonthRes[];
    wantedEmotions?: Feeling[];
}