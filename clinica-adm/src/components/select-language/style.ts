import styled, {css} from "styled-components";
import { Translate } from "phosphor-react";

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

    #translate{
        margin: 0 auto;
    }

    :hover{
        #translate{
            color: white;

        }
    }
`
export const DropLanguagePt = styled.div`
    position: absolute;
    top: 6vw;
    right: 2vw;
    background-color: #1DB954;
    text-align: center;
    display: flex;
    align-items: center;
    width: 3vw;
    height: 3vw;
    border-radius: 100px;
    cursor: pointer;


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

export const DropLanguageEn = styled.div`
    position: absolute;
    top: 10vw;
    right: 2vw;
    background-color: #1DB954;
    display: flex;
    align-items: center;
    width: 3vw;
    height: 3vw;
    border-radius: 100px;
    cursor: pointer;


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


