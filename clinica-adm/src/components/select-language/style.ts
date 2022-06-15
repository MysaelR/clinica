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
    border: 1px solid ${({ theme }) => theme.navegateOptionsIconsAndTextDesable};
    width: 3vw;
    height: 3vw;
    display: flex;
    align-items: center;
    border-radius: 100px;
    cursor: pointer;
    z-index: 2;
    color:  ${({ theme }) => theme.navegateOptionsIconsAndTextDesable};
    #translate{
        margin: 0 auto;
        width: 2vw;
        height: 2vw;
 
    }

    :hover{
        background-color:  ${({ theme }) => theme.navegateOptionEnableTheme};
        #translate{
            color: white;

        }
    }



    @media only screen and (max-width: 1100px) {
        width: 5vw;
        height: 5vw;

        #translate{
        width: 3vw;
        height: 3vw;
        }
    

        }

    @media only screen and (max-width: 800px) {
        width: 7vw;
        height: 7vw;
        #translate{
        width: 5vw;
        height: 5vw;
        }
    }

    @media only screen and (max-width: 500px) {
        width: 10vw;
        height: 10vw;

        #translate{
        width: 7vw;
        height: 7vw;
        }
    }
    
`
export const DropLanguage = styled.div<ChangeLanguageButtonI>`
    position: absolute;
    background-color: ${({ theme }) => theme.navageOptionDesableTheme};
    border: 1px solid ${({ theme }) => theme.navegateOptionsIconsAndTextDesable};
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
    z-index: 1;

    @media only screen and (max-width: 1100px) {
        width: 4.9vw;
        height: 4.9vw;
        margin-top: ${(p: ChangeLanguageButtonI) => p.display === false? -0.95 : (p.top && p.top * 1.8)}vw;

    }

    @media only screen and (max-width: 800px) {
        width: 6.8vw;
        height: 6.8vw;
        margin-top: ${(p: ChangeLanguageButtonI) => p.display === false? -0.95 : (p.top && p.top * 2.2)}vw;
    }

    @media only screen and (max-width: 500px) {
        width: 9.5vw;
        height: 9.5vw;
        right: 2.3vw;
        margin-top: ${(p: ChangeLanguageButtonI) => p.display === false? -0.7: (p.top && p.top * 3.5)}vw;
    }

    :hover{
        background-color:  ${({ theme }) => theme.navegateOptionEnableTheme};
        transition: box-shadow  0.2s;
        box-shadow: 0 3px 0.5em #00acee;
        
        p{
            color: ${({ theme }) => theme.navegateOptionsIconsAndTextEnable};
        }
    }

    p{
        font-size: 2.5vh;
        font-weight: lighter;
        color: ${({ theme }) => theme.navegateOptionsIconsAndTextDesable};
        margin: 0 auto;
        @media only screen and (max-width: 1100px) {
       font-size: 2vh;
    }
   

       
    }
    
`




