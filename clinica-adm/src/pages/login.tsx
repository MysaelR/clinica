import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import * as LoginStyle from "../styles/style-login";
import SignInGoogle from '../assets/login/signin.svg';
import { useField, SubmitHandler, FormHandles } from '@unform/core';


interface FormData {
    email: string;
    password: string;
}



export default function Login() {
    const location = useLocation();

    const formRef = useRef<FormHandles>(null);

    const handleSubmit: SubmitHandler<FormData> = data => {
        console.log(formRef)
    }

    return (
        <LoginStyle.PrincipalDivLogin> {/* container pegando toda a página disponivel, para que possa conter a div de login posicionada ao centro */}


            <LoginStyle.ContainerLogin>

                <LoginStyle.Header> {/* Cabeçalho onde vai conter a Logo e o nome da empresa */}
                    <LoginStyle.BusinessLogo />
                    <LoginStyle.Business>CLIMED</LoginStyle.Business>
                </LoginStyle.Header>

                <LoginStyle.Body>
                    <LoginStyle.StyledForm ref={formRef} onSubmit={handleSubmit}>
                        <LoginStyle.StyledTextInput name="email" type={"text"} placeholder={"Email"} top={5} />


                        <LoginStyle.StyledTextInput name="password" type={"password"} placeholder={"Password"} top={7} />

                        <LoginStyle.SubmitButtonLogin>LOGIN</LoginStyle.SubmitButtonLogin>
                    </LoginStyle.StyledForm>

                </LoginStyle.Body>




            </LoginStyle.ContainerLogin>


        </LoginStyle.PrincipalDivLogin>



    );
}