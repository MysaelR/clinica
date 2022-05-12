import React, { createContext, ReactNode, useCallback, useContext, useEffect, useReducer, useState } from 'react';


export type LanguageI = {
    language: "pt" | "en" | "es" | "fr" | "de" | "it",
}

/*
    pt = brazilian portuguese
    en = english
    es = spanish
    fr = french
    de = german
    it = italian
*/

type Action = {
    type: LanguageActions;
    payload: any;
}
type ContextType = {
    stateLanguage: LanguageI;
    dispatch: (action: Action) => void;
}

type LanguageProviderProps = {
    children: ReactNode;
}

const initialData: LanguageI = { //dados iniciais
    language: "pt"
}


// Context
//const LanguageContext = createContext<ContextType>({} as ContextType);
const LanguageContext = createContext<ContextType | undefined>(undefined);

//Reducer
export enum LanguageActions {
    setLanguage,
}

const languageReducer = (language: LanguageI, action: Action) => { //Ela recebe uma state (os dados), e recebe uma action (que ação eu quero executar com esses dados)
    switch (action.type) { //um switch pra ver qual ação eu vou querer realizar, o type fala o tipo de ação, exemplo: trocar o nome do usuário que está no contexto, um setName.
        case LanguageActions.setLanguage:
            return { ...language, language: action.payload };
        default:
            return language;
    }
}

//Provider
export const LanguageProvider = ({ children }: LanguageProviderProps) => {

    const [stateLanguage, dispatch] = useReducer(languageReducer, initialData); //state tem os dados, e dispatch tem uma função que usa para executar as ações //segundo parametro são dados iniciais
    const value = { stateLanguage, dispatch };





    return (
        <LanguageContext.Provider value={value}> {/* value é um objeto com 2 itens q precise*/}
            {children}
        </LanguageContext.Provider>
    );
}

// Context Hook
export const useLanguage = () => {
    const context = useContext(LanguageContext);

    if (context === undefined) {
        throw new Error('useLanguage precisa ser usado dentro do LanguageProvider');
    }
    return context;
}