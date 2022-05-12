import React, { useState } from "react";
import { useLanguage, LanguageActions } from "../../contexts/multi-languages/languages";
import { Translate } from "phosphor-react";
import * as ChangeLanguage from "./style";



export default function SelectLanguage() {
    const [languageVisible, setLanguageVisible] = useState(false);
    const { dispatch } = useLanguage();

    const handleSetLanguagePt = () => {
        dispatch({
            type: LanguageActions.setLanguage,
            payload: "pt"
        });
    };
    const handleSetLanguageEn = () => {
        dispatch({
            type: LanguageActions.setLanguage,
            payload: "en"
        });
    };
    const handleSetLanguageEs = () => {
        dispatch({
            type: LanguageActions.setLanguage,
            payload: "es"
        });
    };
    const handleSetLanguageFr = () => {
        dispatch({
            type: LanguageActions.setLanguage,
            payload: "fr"
        })
    }
    const handleSetLanguageIt = () => {
        dispatch({
            type: LanguageActions.setLanguage,
            payload: "it"
        })
    }
    const handleSetLanguageDe = () => {
        dispatch({
            type: LanguageActions.setLanguage,
            payload: "de"
        });
    };


    return (

        <div>
            <ChangeLanguage.ContainerDropLanguage onClick={() => {setLanguageVisible(!languageVisible)}}>
                <Translate size={32} id="translate" />
            </ChangeLanguage.ContainerDropLanguage>
            <ChangeLanguage.DropLanguagePt
                display={languageVisible}
    
                onClick={() => {handleSetLanguagePt()}}>
                <p>
                    PT
                </p>
            </ChangeLanguage.DropLanguagePt>
            <ChangeLanguage.DropLanguageEn
                display={languageVisible}
                onClick={() => {handleSetLanguageEn()}}
                >
                <p>
                    EN
                </p>
            </ChangeLanguage.DropLanguageEn >
            <ChangeLanguage.DropLanguageEs
                display={languageVisible}
                onClick={() => {handleSetLanguageEs()}}
                >
                <p>
                    ES
                </p>
            </ChangeLanguage.DropLanguageEs>
            <ChangeLanguage.DropLanguageFr
                display={languageVisible}
                onClick={() => {handleSetLanguageFr()}}
                >
                <p>
                    FR
                </p>
            </ChangeLanguage.DropLanguageFr>
            <ChangeLanguage.DropLanguageIt
                display={languageVisible}
                onClick={() => {handleSetLanguageIt()}}
                >
                <p>
                    IT
                </p>
            </ChangeLanguage.DropLanguageIt>
            <ChangeLanguage.DropLanguageDe
                display={languageVisible}
                onClick={() => {handleSetLanguageDe()}}
                >
                <p>
                    DE
                </p>
            </ChangeLanguage.DropLanguageDe>
        </div>



    )
}