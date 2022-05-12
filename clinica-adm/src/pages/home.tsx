import React from "react";
import NavegateOption from "../components/navegate-options";
import ReturnLanguage from "../components/select-language";
import SelectLanguage from "../components/select-language/change";
import { Theme } from "../theme";
import { House, Pill, AddressBook } from "phosphor-react";




export default function Home() {

    return (
        <Theme>

            <NavegateOption
                language={{ pt: "Medicamentos", en: "Medicines", es: "Medicamentos", fr: "Médicaments", it: "Medicinali", de: "Medikamente" }}

            />

            <SelectLanguage />
        </Theme>
    );
}