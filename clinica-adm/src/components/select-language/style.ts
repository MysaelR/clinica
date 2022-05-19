import { Translate } from "phosphor-react";
import styled, { css } from "styled-components";

interface ChangeLanguageButtonI{
    display?: boolean;
    top?: number;

}

export const ContainerDropLanguage= styled.div`
    position: absolute;
    top: 2vw;
    right: 2vw;
    background-color:  ${({ theme }) => theme.navageOptionDesableTheme};
    width: 3vw;
    height: 3vw;
    display: flex;
    align-items: center;
    border-radius: 100px;
    cursor: pointer;
    z-index: 1;
    color:  ${({ theme }) => theme.navegateOptionsIconsAndTextDesable};

    #translate{
        margin: 0 auto;
    }

    :hover{
        background-color:  ${({ theme }) => theme.navegateOptionEnableTheme};
        #translate{
            color: white;

        }
    }
    
`
export const DropLanguage = styled.div<ChangeLanguageButtonI>`
    position: absolute;
    background-color: ${({ theme }) => theme.navageOptionDesableTheme};
    right: 2.05vw;
    text-align: center;
    display: flex;
    align-items: center;
    width: 2.9vw;
    height: 2.9vw;
    border-radius: 100px;
    cursor: pointer;
    transition: margin 700ms;
    //transform: translateY(${(p: ChangeLanguageButtonI) => p.top}vw);
    margin-top: ${(p: ChangeLanguageButtonI) => p.display === false? -0.95 : p.top}vw;
    
   /*  display: ${(p: ChangeLanguageButtonI) => p.display? "flex" : "none"}; */
    z-index: 0;

    :hover{
        background-color:  ${({ theme }) => theme.navegateOptionEnableTheme};
        transition: box-shadow  0.2s;
        box-shadow: 0 3px 0.5em #00acee;
    }

    p{
        font-size: 1.6rem;
        font-weight: lighter;
        color: ${({ theme }) => theme.navegateOptionsIconsAndTextDesable};
        margin: 0 auto;

        :hover{
            color: ${({ theme }) => theme.navegateOptionsIconsAndTextEnable};
        }
    }
    
`




