import { FilePlus, FileSearch, PlusCircle } from "phosphor-react";
import React from "react";
import NavegateOption from "../components/navegate-options";
import SelectLanguage from "../components/select-language/change";
import { Theme } from "../theme";



export default function Files() {


    return (
        <Theme>
            <NavegateOption
                language={{ pt: "Registrar Paciente", en: "Register Patient", es: "Medicamentos", fr: "Médicaments", it: "Medicinali", de: "Medikamente" }}
            >
                <FilePlus weight="regular" className="navegate-opt-icon" />
            </NavegateOption>

            <NavegateOption
                language={{ pt: "Buscar Paciente", en: "Search Patient", es: "Medicamentos", fr: "Médicaments", it: "Medicinali", de: "Medikamente" }}
            >
                <FileSearch weight="regular" className="navegate-opt-icon" />
            </NavegateOption>

            <SelectLanguage topPt={3} topEn={7} topEs={11} topFr={15} topIt={19} topDe={23} />
        </Theme>
    );
}