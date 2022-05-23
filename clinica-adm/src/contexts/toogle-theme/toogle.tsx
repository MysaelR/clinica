import React, { createContext, ReactNode, useCallback, useContext, useEffect, useReducer, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../../components/global-style/themes';


export type ToogleI = {
    toogleValue: boolean
}

type Action = {
    type: ToogleActions;
    payload: any;
}
type ContextType = {
    stateToogle: ToogleI;
    dispatch: (action: Action) => void;
}

type ToogleProviderProps = {
    children: ReactNode;
}

const initialData: ToogleI = { //dados iniciais
    toogleValue: false
}

// Context
//const ToogleContext = createContext<ContextType>({} as ContextType);
const ToogleContext = createContext<ContextType | undefined>(undefined);

//Reducer
export enum ToogleActions {
    setToogleValue,
}

const toogleReducer = (toogle: ToogleI, action: Action) => { //Ela recebe uma state (os dados), e recebe uma action (que ação eu quero executar com esses dados)
    switch (action.type) { //um switch pra ver qual ação eu vou querer realizar, o type fala o tipo de ação, exemplo: trocar o nome do usuário que está no contexto, um setName.
        case ToogleActions.setToogleValue:
            return { ...toogle, toogleValue: !toogle.toogleValue };
        default:
            return toogle;
    }
}

//Provider
export const ToogleProvider = ({ children }: ToogleProviderProps) => {

    const [stateToogle, dispatch] = useReducer(toogleReducer, initialData); //state tem os dados, e dispatch tem uma função que usa para executar as ações //segundo parametro são dados iniciais
    const value = { stateToogle, dispatch };

    // const [isDarkTheme, setIsDarkTheme] = useState(true);



    return (
        <ToogleContext.Provider value={value}> {/* value é um objeto com 2 itens q precise*/}
            <ThemeProvider theme={stateToogle.toogleValue ? darkTheme : lightTheme}>
                {children}
            </ThemeProvider>
        </ToogleContext.Provider>
    );
}

// Context Hook
export const useToogle = () => {
    const context = useContext(ToogleContext);

    if (context === undefined) {
        throw new Error('useToogle precisa ser usado dentro do ToogleProvider');
    }
    return context;
}

