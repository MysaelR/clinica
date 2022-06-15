import NavegateOption from "../components/navegate-options";
import ReturnLanguage from "../components/select-language";
import SelectLanguage from "../components/select-language/change";
import * as HomeStyle from '../styles/style-home';
import { Theme } from "../theme";
import { AddressBook, House, Pill } from "phosphor-react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {

    const navegate = useNavigate();

    return (
        <Theme>
            <HomeStyle.PrincipalContainerHome>
                <NavegateOption
                    onClickOption={() => navegate('/medicines')}
                    language={{ pt: "Medicamentos", en: "Medicines", es: "Medicamentos", fr: "Médicaments", it: "Medicinali", de: "Medikamente" }}
                >
                    <Pill className="navegate-opt-icon" />
                </NavegateOption>

                <NavegateOption
                    onClickOption={() => navegate('/files')}
                    language={{ pt: "Fichas", en: "Files", es: "Archivos", fr: "Des dossiers", it: "File", de: "Dateien" }}
                >
                    <AddressBook className="navegate-opt-icon" />
                </NavegateOption>

                {/* <NavegateOption
                    language={{ pt: "Medicamentos", en: "Medicines", es: "Medicamentos", fr: "Médicaments", it: "Medicinali", de: "Medikamente" }}

                >
                    <AddressBook className="navegate-opt-icon" />
                </NavegateOption> */}

                <SelectLanguage topPt={3} topEn={7} topEs={11} topFr={15} topIt={19} topDe={23} />
            </HomeStyle.PrincipalContainerHome>


        </Theme>
    );
}