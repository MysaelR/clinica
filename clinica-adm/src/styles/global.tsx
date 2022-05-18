import styled, { css } from "styled-components";
import React from 'react';


interface SpaceI {
    right: number;
    left: number;
    top: number;
    bottom: number;
    width: number;
    height: number;
    pright: number;
    pleft: number;
    ptop: number;
    pbottom: number;
}

export const DisplayFlexStyle = styled.div<SpaceI>`
    display: flex;
    position: relative;
    align-items: center;
    
    ${(props) => css`
        margin-right: ${props.right}vw;
        margin-left: ${props.left}vw;
        margin-top: ${props.top}vh;
        margin-bottom: ${props.bottom}vh;
    `}
`
export const DisplayGridStyle = styled.div<SpaceI>`
    display: grid;
    position: relative;
    
    ${(props) => css`
        margin-right: ${props.right}vw;
        margin-left: ${props.left}vw;
        margin-top: ${props.top}vh;
        margin-bottom: ${props.bottom}vh;
        width: ${props.width}vw;
        height: ${props.height}vh;
        padding-left: ${props.pleft}vw;
        padding-right: ${props.pright}vw;
        padding-top: ${props.ptop}vh;
        padding-bottom: ${props.pbottom}vh;
    `}
`

export const MarginSpaceStyle = styled.div<SpaceI>`

    ${(props) => css`
        margin-right: ${props.right}vw;
        margin-left: ${props.left}vw;
        margin-top: ${props.top}vh;
        margin-bottom: ${props.bottom}vh;
        width: ${props.width}vw;
        height: ${props.height}vh;
        padding-left: ${props.pleft}vw;
        padding-right: ${props.pright}vw;
        padding-top: ${props.ptop}vh;
        padding-bottom: ${props.pbottom}vh;
    `}

`