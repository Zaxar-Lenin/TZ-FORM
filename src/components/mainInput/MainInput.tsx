import {AddressSuggestions, DaDataAddress, DaDataSuggestion} from "react-dadata";
import React, {Dispatch, useEffect, useState} from "react";
import styled from "styled-components";
import {TextField} from "@mui/material";
import {ActionType, setDataActionCreate} from "../../state/state";


type MainInputTypeProps = {
    dispatch: Dispatch<ActionType>
}

const API_KEY = "074642fc934950f321fab650c6e2fd4f6ad9b036"

const BlockStyled = styled.div`
  width: 600px;
  margin: 0 auto;
`

const InputStyled = styled(TextField)`
  max-width: 600px;
`

const TextStyled = styled.div`
  text-align: left;
  margin: 0 0 10px 0;

`


export const MainInput = ({dispatch}: MainInputTypeProps) => {

    const [value, setValue] = useState<DaDataSuggestion<DaDataAddress>>();

    useEffect(() => {
        if (value) {
            dispatch(setDataActionCreate(value))
        }
    }, [value])

    return <BlockStyled>
        <TextStyled>
            Адрес
        </TextStyled>
        <AddressSuggestions customInput={InputStyled} token={API_KEY} value={value} onChange={setValue}/>
    </BlockStyled>
}