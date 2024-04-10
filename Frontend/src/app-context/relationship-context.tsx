import { createContext } from "react";
import { Relationship } from "../api/RelationshipsAPI";

export interface AppState {
    relationship?: Relationship
    updateState: (newState: Partial<AppState>) => void
}

const defaultState: AppState = {
    relationship: {},
    updateState: (newState?: Partial<AppState>) => {},
}

export const RelationshipContext = createContext<AppState>(defaultState)