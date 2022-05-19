import { AddressBook, House, Pill, Palette } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { ReactComponent as Logo } from '../../assets/menu/logo climed.svg';
import Logo2 from '../../assets/menu/logo climed 2.png';
import * as Nav from './style';
import { useDarkMode } from "../global-style/globalStyles";
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { ToogleActions, useToogle } from "../../contexts/toogle-theme/toogle";
import { MarginSpaceStyle } from "../../styles/global";





export default function Menu() {

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
                <Nav.Option>

                    <House size={32} id="image-option" />

                    <Nav.DescriptionOption>
                        Home
                    </Nav.DescriptionOption>
                </Nav.Option>

                <Nav.Option>

                    <Pill size={32} id="image-option" />

                    <Nav.DescriptionOption>
                        Medicamentos
                    </Nav.DescriptionOption>
                </Nav.Option>

                <Nav.Option>

                    <AddressBook size={32} id="image-option" />

                    <Nav.DescriptionOption>
                        Fichas
                    </Nav.DescriptionOption>
                </Nav.Option>


                <Nav.Option onClick={() => { changeTheme() }}>

                    <Palette size={32} id="image-option" />

                    <Nav.DescriptionOption>
                        Tema
                    </Nav.DescriptionOption>
                </Nav.Option>






            </Nav.MenuOptions>

        </Nav.MenuContainer >
    );
}