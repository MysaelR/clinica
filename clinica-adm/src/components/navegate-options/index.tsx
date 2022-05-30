import React, { ReactChild } from "react";

import ReturnLanguage, { Language } from "../select-language";
import * as NavegateOpt from './style';

interface NavegateOptionI {
    language: Language,
    children: React.ReactNode,
    onClickOption?: () => void
}

const NavegateOption: React.FC<NavegateOptionI> = ({ language, children, onClickOption }) => {

    return (
        <NavegateOpt.ContainerNavegateOption onClick={onClickOption}>
            {children}
            <NavegateOpt.ImageNavegateOption />
            <NavegateOpt.ImageNavegateOption />
            <ReturnLanguage pt={language.pt} en={language.en} es={language.es} de={language.de} fr={language.fr} it={language.it} />
        </NavegateOpt.ContainerNavegateOption>
    )
}
export default NavegateOption;