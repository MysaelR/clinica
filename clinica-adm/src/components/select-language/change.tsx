import React, { useState } from "react";
import { useLanguage, LanguageActions } from "../../contexts/multi-languages/languages";
import { Translate } from "phosphor-react";
import * as ChangeLanguage from "./style";

interface SelectLanguageI {

    topPt: number,
    topEn: number,
    topEs: number,
    topFr: number,
    topIt: number,
    topDe: number

}

const SelectLanguage: React.FC<SelectLanguageI> = ({ topPt, topEn, topEs, topFr, topIt, topDe }) => {
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
            <ChangeLanguage.ContainerDropLanguage onClick={() => { setLanguageVisible(!languageVisible) }}>
                <Translate size={32} id="translate" />
            </ChangeLanguage.ContainerDropLanguage>
            <ChangeLanguage.DropLanguage
                display={languageVisible}
                top={topPt}
                onClick={() => { handleSetLanguagePt() }}>
                <p>
                    PT
                </p>
            </ChangeLanguage.DropLanguage>
            <ChangeLanguage.DropLanguage
                display={languageVisible}
                top={topEn}
                onClick={() => { handleSetLanguageEn() }}
            >
                <p>
                    EN
                </p>
            </ChangeLanguage.DropLanguage >
            <ChangeLanguage.DropLanguage
                display={languageVisible}
                top={topEs}
                onClick={() => { handleSetLanguageEs() }}
            >
                <p>
                    ES
                </p>
            </ChangeLanguage.DropLanguage>
            <ChangeLanguage.DropLanguage
                display={languageVisible}
                top={topFr}
                onClick={() => { handleSetLanguageFr() }}
            >
                <p>
                    FR
                </p>
            </ChangeLanguage.DropLanguage>
            <ChangeLanguage.DropLanguage
                display={languageVisible}
                top={topIt}
                onClick={() => { handleSetLanguageIt() }}
            >
                <p>
                    IT
                </p>
            </ChangeLanguage.DropLanguage>
            <ChangeLanguage.DropLanguage
                display={languageVisible}
                top={topDe}
                onClick={() => { handleSetLanguageDe() }}
            >
                <p>
                    DE
                </p>
            </ChangeLanguage.DropLanguage>
        </div>



    )
}

export default SelectLanguage;