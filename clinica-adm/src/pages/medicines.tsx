import { Pill, PlusCircle, PresentationChart } from "phosphor-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import NavegateOption from "../components/navegate-options";
import SelectLanguage from "../components/select-language/change";
import { Theme } from "../theme";

export default function Medicines() {

    const navegate = useNavigate();


    return (
        <Theme>
            <NavegateOption
                onClickOption={() => navegate('/medicines/add')}
                language={{ pt: "Adicionar", en: "Medicines", es: "Medicamentos", fr: "Médicaments", it: "Medicinali", de: "Medikamente" }}
            >
                <PlusCircle weight="bold" className="navegate-opt-icon" />
            </NavegateOption>

            <NavegateOption
                language={{ pt: "Ver", en: "Medicines", es: "Medicamentos", fr: "Médicaments", it: "Medicinali", de: "Medikamente" }}
            >
                <PresentationChart className="navegate-opt-icon" weight="bold" />

            </NavegateOption>

            <SelectLanguage topPt={3} topEn={7} topEs={11} topFr={15} topIt={19} topDe={23} />
        </Theme>
    );
}