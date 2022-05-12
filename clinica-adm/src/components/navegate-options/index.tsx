import React from "react";
import ReturnLanguage, { Language } from "../select-language";
import * as NavegateOpt from './style';

interface NavegateOptionI {
    language: Language,
}

const NavegateOption: React.FC<NavegateOptionI> = ({ language }) => {

    return (
        <NavegateOpt.ContainerNavegateOption>

            <NavegateOpt.ImageNavegateOption />
            <NavegateOpt.ImageNavegateOption />
            <ReturnLanguage pt={language.pt} en={language.en} es={language.es} de={language.de} fr={language.fr} it={language.it} />
        </NavegateOpt.ContainerNavegateOption>
    )
}
export default NavegateOption;