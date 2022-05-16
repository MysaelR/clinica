import { AddressBook, House, Pill, Palette } from "phosphor-react";
import React from "react";

import Logo2 from '../../assets/menu/logo climed 2.png';
import * as Nav from './style';

export default function Menu() {



    return (
        <Nav.MenuContainer>
            <Nav.LogoContainer>
                <Nav.ImageLogo src={Logo2} id="logo" />
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


                <Nav.Option>

                    <Palette size={32} id="image-option" />

                    <Nav.DescriptionOption>
                        Tema
                    </Nav.DescriptionOption>
                </Nav.Option>




            </Nav.MenuOptions>

        </Nav.MenuContainer >
    );
}