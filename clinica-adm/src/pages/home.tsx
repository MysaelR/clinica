import React from "react";
import ReturnLanguage from "../components/select-language";
import SelectLanguage from "../components/select-language/change";
import { Theme } from "../theme";



export default function Home() {

    return (
        <Theme>
            <ReturnLanguage pt="Teste" en="Test" es="Testo" de="Ahue" />

            <SelectLanguage />
        </Theme>
    );
}