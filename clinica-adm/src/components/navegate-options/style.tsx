import { Children } from "react";
import styled, { css } from "styled-components";

import ReturnLanguage from "../select-language";

export const ContainerNavegateOption = styled.div`
    /* display: flex;
    flex-wrap: wrap; */
    padding: 1vw;
    width: 10vw;
    height: 25vh;
    border-radius: 30px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.navageOptionDesableTheme};
    color: ${({ theme }) => theme.navegateOptionsIconsAndTextDesable};
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
    font-size: 1.3rem;
    margin-left: 2vw;
 


    .navegate-opt-icon{
        color: ${({ theme }) => theme.navegateOptionsIconsAndTextDesable};
        width: 4vw;
        height: 4vw;

        padding-bottom: 3vw;
    }

    

    :hover{
        transition: box-shadow  0.2s;
        box-shadow: 0 3px 0.5em #00acee;
        background-color: ${({ theme }) => theme.navegateOptionEnableTheme};
        color: white;

        .navegate-opt-icon{
            transition: color 0.2s;
            color: ${({ theme }) => theme.navegateOptionsIconsAndTextEnable};


    }
      
    }

    

`

export const ImageNavegateOption = styled.img`

`

