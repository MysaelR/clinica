import React from "react";
import * as Nav from './style';
import Logo2 from '../../assets/menu/logo climed 2.png';
import { House, Pill, AddressBook } from "phosphor-react";

export default function Menu() {



    return (
        <Nav.MenuContainer>
            <Nav.ImageLogo src={Logo2} id="logo" />
            <Nav.Business>
                CLIMED
            </Nav.Business>
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



            </Nav.MenuOptions>

        </Nav.MenuContainer >
    );
}