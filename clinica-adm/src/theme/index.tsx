import React, { ReactNode } from "react";
import Menu from "../components/menu";
import * as C from './style';

type Props = {
    children: ReactNode;
}

export const Theme = ({ children }: Props) => {

    return (


        <C.Container>
            <Menu />
            <C.Page>
                {children}
            </C.Page>
        </C.Container>
    );

}