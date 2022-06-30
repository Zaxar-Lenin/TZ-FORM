import {DaDataAddress, DaDataSuggestion} from "react-dadata";
import React from "react";

export const initialState  = {} as TypeObject;

export const context = React.createContext(initialState);

export const reducer = (state: TypeObject, action: ActionType): TypeObject => {
    switch (action.type) {
        case "SET-DATA":
            return {
                Locality: action.data.data.city_with_type || action.data.data.settlement_with_type,
                street: action.data.data.street_with_type,
                house:  action.data.data.house,
                building: action.data.data.block,
                flat: action.data.data.flat,
                zipCode: action.data.data.postal_code,
            }
        default:
            throw new Error();
    }
}


export const setDataActionCreate = (data: DaDataSuggestion<DaDataAddress>) => {
    console.log(data)
    return {
        type: "SET-DATA",
        data
    }
}

export type ActionType = ReturnType<typeof setDataActionCreate>

export type TypeObject = {
    Locality: string | null,
    street: string | null,
    house: string | null,
    building: string | null,
    flat: string | null,
    zipCode: string | null,
}
