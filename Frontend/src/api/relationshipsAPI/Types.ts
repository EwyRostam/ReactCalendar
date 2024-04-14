import { Feeling } from "../emotoinsAPI/Types";

export type Relationship = {
    id?: number;
    name?: string;
    category?: string;
    wantedEmotions?: Feeling[];
}