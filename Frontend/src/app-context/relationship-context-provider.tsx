import { FunctionComponent, ReactNode, useState } from "react";
import { AppState, RelationshipContext } from "./relationship-context";

type Props = {
    children: ReactNode;
}

export const RelationshipContextProvider: FunctionComponent<Props> = (
    props: Props
): JSX.Element => {

    const [state, setState] = useState({});

    const updateState = (newState: Partial<AppState>) => {
        setState({...state, ...newState});
    };
    

    return (
        <RelationshipContext.Provider value={{...state, updateState}}>
            {props.children}
        </RelationshipContext.Provider>
    )
}