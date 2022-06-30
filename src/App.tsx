import React, {useReducer} from 'react';
import './App.css';
import 'react-dadata/dist/react-dadata.css';
import {context, initialState, reducer} from "./state/state";
import {Block} from "./components/remoteInputs/Block";
import {MainInput} from "./components/mainInput/MainInput";
import styled from "styled-components";


const AppStyled = styled.div`
  padding: 30px;
  display: grid;
  grid-template-columns: 200px 600px;
`

const TextStyled = styled.div`
  text-align: left;
  margin: 0 0 10px 0;
  font-weight: 600;

`

export const App = () => {


    const [state, dispatch] = useReducer(reducer, initialState);


    return (
        <AppStyled>
            <TextStyled>
                Адрес объекта
            </TextStyled>
            <div>
                <MainInput dispatch={dispatch}/>
                <context.Provider value={state}>
                    <Block/>
                </context.Provider>
            </div>
        </AppStyled>
    );
}

