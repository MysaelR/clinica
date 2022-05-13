import { AddressBook, House, Pill } from "phosphor-react";
import React from "react";

import NavegateOption from "../components/navegate-options";
import ReturnLanguage from "../components/select-language";
import SelectLanguage from "../components/select-language/change";
import * as HomeStyle from '../styles/style-home';
import { Theme } from "../theme";

export default function Home() {

    return (
        <Theme>

            <HomeStyle.PrincipalContainerHome>
                <NavegateOption
                    language={{ pt: "Medicamentos", en: "Medicines", es: "Medicamentos", fr: "Médicaments", it: "Medicinali", de: "Medikamente" }}
                >
                    <Pill className="navegate-opt-icon" />
                </NavegateOption>

                {/* <NavegateOption
                    language={{ pt: "Medicamentos", en: "Medicines", es: "Medicamentos", fr: "Médicaments", it: "Medicinali", de: "Medikamente" }}

                >
                    <AddressBook className="navegate-opt-icon" />
                </NavegateOption> */}

                <SelectLanguage />
            </HomeStyle.PrincipalContainerHome>

        </Theme>
    );
}