import { Form } from '@unform/web';
import styled from "styled-components";

import { ReactComponent as Logo } from '../assets/menu/logo climed.svg';
import TextInput from "../components/input/text";

interface InputControllI {
    top?: number
}

export const PrincipalDivLogin = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: rgb(244 244 245);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContainerLogin = styled.div`
    position: absolute;
    width: 25vw;
    height: 60vh;
    border-radius: 15px;
    border: 1px solid lightgray;
    background-color: ${({ theme }) => theme.backgroundTheme};
    flex-direction: column;
`
export const Header = styled.div`
    position: relative;
    z-index: 1;
    top: 1vh;
    max-height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const BusinessLogo = styled(Logo)`
    position: relative;
    padding: 0;
    fill: ${({ theme }) => theme.iconDesableTheme};
    width: 3vw;

`
export const Business = styled.p`
    position: relative;
    color: ${({ theme }) => theme.iconDesableTheme};
    font-weight: bolder;
    font-size: 2rem;
`

export const Body = styled.div`
    position: relative;
    margin-top: 5vh;
    height: 45vh;

    display: flex;

    flex-direction: column;
`

export const StyledForm = styled(Form)`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;

    align-items: center;
    flex-direction: column;

`

export const StyledTextInput = styled(TextInput) <InputControllI>`

    position: relative;

    border-radius: 5px;
    background-color: none;
    margin-top: ${(p: InputControllI) => p.top}vh;
    color: black;
    
    border: none;
    border-bottom: 1px solid lightgray;
    padding-top: 2vh;
    padding-left: 2vw; 

    :focus{
        background-color: lightgray;
        outline: 0;
    }
    
`

export const SubmitButtonLogin = styled.button`
    margin-top: 10vh;
    cursor: pointer;
    padding: 0.5vw 8vh;
    color: white;
    font-weight: bolder;
    border: none;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.iconDesableTheme};

    :hover{
        background-color: ${({ theme }) => theme.iconEnableTheme};
    }

`
