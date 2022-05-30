import { AddressBook, House, Pill, Palette } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { ReactComponent as Logo } from '../../assets/menu/logo climed.svg';
import Logo2 from '../../assets/menu/logo climed 2.png';
import * as Nav from './style';
import { useDarkMode } from "../global-style/globalStyles";
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { ToogleActions, useToogle } from "../../contexts/toogle-theme/toogle";
import { MarginSpaceStyle } from "../../styles/global";
import ReturnLanguage from "../select-language";
import { useNavigate } from "react-router-dom";





export default function Menu() {

    const navegate = useNavigate();

    const { stateToogle, dispatch } = useToogle();

    useEffect(() => {
        console.log(stateToogle.toogleValue)
    }, [stateToogle])

    const changeTheme = () => {
        dispatch({
            type: ToogleActions.setToogleValue,
            payload: true
        })
    }

    return (

        <Nav.MenuContainer>
            <Nav.LogoContainer>
                {/* <Nav.ImageLogo src={Logo2} /> */}


                {/* <Nav.ImageLogo src={Logo} id="logo" /> */}
                <Nav.BusinessLogo />
                {/* <img src={Logo} /> */}
                <Nav.Business>
                    CLIMED
                </Nav.Business>
            </Nav.LogoContainer>

            <Nav.MenuOptions>
                <Nav.Option onClick={() => navegate("/home")}>

                    <House size={32} id="image-option" />

                    <Nav.DescriptionOption>
                        Home
                    </Nav.DescriptionOption>
                </Nav.Option>

                <Nav.Option onClick={() => navegate("/medicines")}>

                    <Pill size={32} id="image-option" />

                    <Nav.DescriptionOption>
                        <ReturnLanguage pt={"Medicamentos"} en={"Medicines"} es={"Medicamentos"} de={"Medikamente"} fr={"Médicaments"} it={"Medicinali"} />
                    </Nav.DescriptionOption>
                </Nav.Option>

                <Nav.Option onClick={() => navegate("/files")}>

                    <AddressBook size={32} id="image-option" />

                    <Nav.DescriptionOption>
                        <ReturnLanguage pt={"Fichas"} en={"Files"} es={"Archivos"} de={"Dateien"} fr={"Des dossiers"} it={"File"} />
                    </Nav.DescriptionOption>
                </Nav.Option>


                <Nav.Option onClick={() => { changeTheme() }}>

                    <Palette size={32} id="image-option" />

                    <Nav.DescriptionOption>
                        <ReturnLanguage pt={"Tema"} en={"Theme"} es={"Temática"} de={"Thema"} fr={"Thème"} it={"Tema"} />
                    </Nav.DescriptionOption>
                </Nav.Option>






            </Nav.MenuOptions>

        </Nav.MenuContainer >
    );
}