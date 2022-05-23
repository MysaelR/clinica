import styled from "styled-components";
import { ReactComponent as Logo } from '../assets/menu/logo climed.svg';


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
    background-color: ${({ theme }) => theme.menuContainerTheme};
`
export const Header = styled.div`
    position: relative;
    z-index: 1;
    top: 0;

    max-height: 25vh;
`

export const BusinessLogo = styled(Logo)`
    position: absolute;
    top: 0;
    fill: ${({ theme }) => theme.iconDesableTheme};
    width: 3vw;

`
export const Business = styled.p`
    top: 0;
    position: absolute;
    color: ${({ theme }) => theme.iconDesableTheme};
    font-weight: bolder;
    font-size: 2rem;


`
