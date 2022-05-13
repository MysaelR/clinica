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
    background-color: #1DB954;
    width: 3vw;
    height: 3vw;
    display: flex;
    align-items: center;
    border-radius: 100px;
    cursor: pointer;
    z-index: 1;

    #translate{
        margin: 0 auto;
    }

    :hover{
        #translate{
            color: white;

        }
    }
    
`
export const DropLanguage = styled.div<ChangeLanguageButtonI>`
    position: absolute;
    background-color: #1DB954;
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

    p{
        font-size: 1.6rem;
        font-weight: lighter;
        color: black;
        margin: 0 auto;

        :hover{
            color: white;
        }
    }
    
`




