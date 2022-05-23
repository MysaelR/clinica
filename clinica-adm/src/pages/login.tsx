import React from "react";
import { useLocation } from "react-router-dom";
import * as LoginStyle from "../styles/style-login";
import SignInGoogle from '../assets/login/signin.svg'

export default function Login() {
    const location = useLocation();

    return (
        <LoginStyle.PrincipalDivLogin>


            <LoginStyle.ContainerLogin>
                <LoginStyle.Header>
                    <LoginStyle.BusinessLogo />
                    <LoginStyle.Business>CLIMED</LoginStyle.Business>
                </LoginStyle.Header>
            </LoginStyle.ContainerLogin>


        </LoginStyle.PrincipalDivLogin>



    );
}