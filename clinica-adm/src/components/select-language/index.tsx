import React, { useEffect, useState } from "react";
import { LanguageActions, useLanguage } from "../../contexts/multi-languages/languages";


export interface Language {
    pt: string;
    en?: string | any;
    es?: string | any;
    fr?: string | any;
    de?: string | any;
    it?: string | any;
}



const ReturnLanguage: React.FC<Language> = ({ pt, en, es, de, fr, it }) => {

    const { stateLanguage } = useLanguage();
    const [selectedLanguage, setSelectedLanguage] = useState(pt);




    function language() {
        switch (stateLanguage.language) {
            case "pt":
                setSelectedLanguage(pt);
                break;
            case "en":
                setSelectedLanguage(en);
                break;
            case "es":
                setSelectedLanguage(es);
                break;
            case "de":
                setSelectedLanguage(de);
                break;
            case "fr":
                setSelectedLanguage(fr);
                break;
            case "it":
                setSelectedLanguage(it);
                break;

            default:
                setSelectedLanguage(pt);
        }
    }

    useEffect(() => {
        language();
    }, [stateLanguage])



    return (
        <p>
            {selectedLanguage}
        </p>

    )
}

export default ReturnLanguage;

