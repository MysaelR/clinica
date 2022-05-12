import styled, {css} from "styled-components";
import { Translate } from "phosphor-react";



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

    #translate{
        margin: 0 auto;
    }

    :hover{
        #translate{
            color: white;

        }
    }
`
export const DropLanguagePt = styled.div<ChangeLanguageButtonI>`
    position: absolute;
    top: 6vw
    right: 2vw;
    background-color: #1DB954;
    text-align: center;
    display: flex;
    align-items: center;
    width: 3vw;
    height: 3vw;
    border-radius: 100px;
    cursor: pointer;
    transform: translateY(${(p: ChangeLanguageButtonI) => p.top}vw) to 20vw;
    transition: 1s;
    transition-delay: 0.5s;
    display: ${(p: ChangeLanguageButtonI) => p.display? "flex" : "none"};


 

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

    display: ${(p: ChangeLanguageButtonI) => p.display? "flex" : "none"};

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
/*
    it = italian*/

export const DropLanguageEs = styled.div`
    position: absolute;
    top: 14vw;
    right: 2vw;
    background-color: #1DB954;
    display: flex;
    align-items: center;
    width: 3vw;
    height: 3vw;
    border-radius: 100px;
    cursor: pointer;
    display: ${(p: ChangeLanguageButtonI) => p.display? "flex" : "none"};

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

export const DropLanguageFr = styled.div`
    position: absolute;
    top: 18vw;
    right: 2vw;
    background-color: #1DB954;
    display: flex;
    align-items: center;
    width: 3vw;
    height: 3vw;
    border-radius: 100px;
    cursor: pointer;
display: ${(p: ChangeLanguageButtonI) => p.display? "flex" : "none"};
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

export const DropLanguageDe = styled.div`
    position: absolute;
    top: 22vw;
    right: 2vw;
    background-color: #1DB954;
    display: flex;
    align-items: center;
    width: 3vw;
    height: 3vw;
    border-radius: 100px;
    cursor: pointer;
    display: ${(p: ChangeLanguageButtonI) => p.display? "flex" : "none"};
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
export const DropLanguageIt = styled.div`
    position: absolute;
    top: 26vw;
    right: 2vw;
    background-color: #1DB954;
    display: flex;
    align-items: center;
    width: 3vw;
    height: 3vw;
    border-radius: 100px;
    cursor: pointer;
    display: ${(p: ChangeLanguageButtonI) => p.display? "flex" : "none"};

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




