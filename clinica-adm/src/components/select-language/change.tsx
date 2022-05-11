import React from "react";
import { useLanguage, LanguageActions } from "../../contexts/multi-languages/languages";
import { Translate } from "phosphor-react";
import * as ChangeLanguage from "./style";



export default function SelectLanguage() {

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
    const handleSetLanguageDe = () => {
        dispatch({
            type: LanguageActions.setLanguage,
            payload: "de"
        });
    };

    return (

        <div>
            <ChangeLanguage.ContainerDropLanguage>
                <Translate size={32} id="translate" />
            </ChangeLanguage.ContainerDropLanguage>
            <ChangeLanguage.DropLanguagePt>
                <p>
                    PT
                </p>
            </ChangeLanguage.DropLanguagePt>
            <ChangeLanguage.DropLanguageEn>
                <p>
                    EN
                </p>
            </ChangeLanguage.DropLanguageEn>
        </div>



    )
}