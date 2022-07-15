import { useEffect, useState } from "react";
import { Language } from ".";
import { useLanguage } from "../../contexts/multi-languages/languages";


// export interface LanguageString {
//     pt: string;
//     en: string;
//     es: string;
//     fr: string;
//     de: string;
//     it: string;
// }

// const ReturnLanguageString: React.FC<Language> = ({ pt, en, es, de, fr, it}) => {

//     const { stateLanguage } = useLanguage();
//     const [selectedLanguage, setSelectedLanguage] = useState(pt);




//     function language() {
//         switch (stateLanguage.language) {
//             case "pt":
//                 setSelectedLanguage(pt);
//                 break;
//             case "en":
//                 setSelectedLanguage(en);
//                 break;
//             case "es":
//                 setSelectedLanguage(es);
//                 break;
//             case "de":
//                 setSelectedLanguage(de);
//                 break;
//             case "fr":
//                 setSelectedLanguage(fr);
//                 break;
//             case "it":
//                 setSelectedLanguage(it);
//                 break;

//             default:
//                 setSelectedLanguage(pt);
//         }
//     }

//     useEffect(() => {
//         language();
//     }, [stateLanguage])

//     return (
//             selectedLanguage
//     )
// }

// export default ReturnLanguageString;


export default function ReturnLanguageString (obj : Language){
    const { stateLanguage } = useLanguage();
    const [selectedLanguage, setSelectedLanguage] = useState(obj.pt)


    function language() {
                switch (stateLanguage.language) {
                    case "pt":
                        setSelectedLanguage(obj.pt);
                        break;
                    case "en":
                        setSelectedLanguage(obj.en);
                        break;
                    case "es":
                        setSelectedLanguage(obj.es);
                        break;
                    case "de":
                        setSelectedLanguage(obj.de);
                        break;
                    case "fr":
                        setSelectedLanguage(obj.fr);
                        break;
                    case "it":
                        setSelectedLanguage(obj.it);
                        break;
        
                    default:
                        setSelectedLanguage(obj.pt);
                }
            }
        
            useEffect(() => {
                language();
            }, [stateLanguage])

    return (
        selectedLanguage
    )

}