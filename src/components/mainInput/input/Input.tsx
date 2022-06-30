import React from "react";
import styled from "styled-components";
import {TextField} from "@mui/material";
import {useFormik} from "formik";


type InputTypeProps = {
    values: string
    text: string
    onChanges: {
        (e: React.ChangeEvent<any>): void;
        <T_1 = string | React.ChangeEvent<any>>(field: T_1): T_1 extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void;
    }
    onBlur: {
        (e: React.FocusEvent<any>): void;
        <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
    }
    name: string
}


const BlockStyled = styled.div`
  width: 250px;
  margin: 10px 0;

`

const TextStyled = styled.div`
  text-align: left;
  margin: 0 0 10px 0;

`

const InputStyled = styled(TextField)`
  width: 250px;
`

export const Input = ({onBlur, values, text, onChanges, name}: InputTypeProps) => {


    return <BlockStyled>
        <TextStyled>
            {text}
        </TextStyled>
        <InputStyled onBlur = {onBlur} name={name} onChange={onChanges} size="small" type="text" value={values}/>
    </BlockStyled>
}


