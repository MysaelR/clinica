import { url } from "inspector";
import styled, {css} from "styled-components";
import Logo from '../../assets/logo climed.png';


export const DescriptionOption = styled.p`
    margin-left: 1vw;
    display: none;
   
`

export const MenuContainer = styled.div`
    height: 100vh;
    width: 3vw;
    background-color: #1DB954;

    :hover{
        transition: 0.05s ease-in;
        width: 10vw;

       ${DescriptionOption}{
            display: block;
        }
        
        
    }
`

export const Business = styled.p`
`

export const ImageLogo = styled.img`
    padding: 5%;
    width: 90%;

`

export const MenuOptions = styled.div`
    margin-top: 5vh;
    display: grid;


    #image-option{
        margin-left: 5px;
    }
`




export const Option = styled.div`
    display: flex;
    align-items: center;
    padding: 1vh 0;


    :hover{
        //background-color: #229c4d;
        background-color: #2feb71;
        opacity: 0.5;
    }
`
