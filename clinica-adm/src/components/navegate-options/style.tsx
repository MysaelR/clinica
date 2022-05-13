import { Children } from "react";
import styled, { css } from "styled-components";

import ReturnLanguage from "../select-language";

export const ContainerNavegateOption = styled.div`
    /* display: flex;
    flex-wrap: wrap; */
    padding: 1vw;
    width: 10vw;
    height: 12vw;
    border-radius: 30px;
    cursor: pointer;
    background-color: azure;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
    font-size: 1.5rem;
 


    .navegate-opt-icon{
        color: black;
        width: 4vw;
        height: 4vw;

        padding-bottom: 3vw;
    }

    

    :hover{
        transition: box-shadow  0.2s;
        box-shadow: 0 3px 0.5em #00acee;
        color: #00acee;



        .navegate-opt-icon{
            transition: color 0.2s;
            color: #00acee;


    }
      
    }

    

`

export const ImageNavegateOption = styled.img`

`

