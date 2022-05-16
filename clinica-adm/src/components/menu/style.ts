import Logo from '../../assets/logo climed.png';
import { url } from "inspector";
import styled, { css } from "styled-components";

export const DescriptionOption = styled.p`
    margin-left: 1vw;
    display: none;
    color: ${({ theme }) => theme.textColorDesableTheme};
    font-size: 1rem;
    white-space: nowrap;
   overflow: hidden !important;
   text-overflow: ellipsis;

    @media only screen and (max-width: 1600px) {
        font-size: 0.8rem;
    }
   
`
export const Business = styled.p`
    color: rgb(56,103,202);
    text-align: center;
    font-weight: bolder;
    font-size: 2rem;
    display: none;
    position: relative;
`
export const MenuContainer = styled.div`
    height: 100vh;
    width: 3vw;
    background-color:  ${({ theme }) => theme.menuContainerTheme};

    :hover{
        transition: 0.1s ease-in; //Aumentar valor para melhorar o menu
        width: 10vw;

       ${DescriptionOption}{
            display: inline-block;;
        }
        ${Business}{
            display: block;
        }
        
        
    }
`



export const ImageLogo = styled.img`
    padding: 5%;
    width: 90%;

`
export const LogoContainer = styled.div`
    height: 25vh;
`

export const MenuOptions = styled.div`
    margin-top: 5vh;
    display: grid;
    

    #image-option{
        margin-left: 5px;
        color: ${({ theme }) => theme.iconDesableTheme};
    }
`




export const Option = styled.div`
    display: flex;
    align-items: center;
    padding: 1vh 0;
    cursor: pointer;
    max-width: 100%;

 
    


    :hover{
        //background-color: #229c4d;
        //background-color: #2feb71;
        transition: 0.2s ease-in;
        background-color: ${({ theme }) => theme.navegateOptionEnableTheme};
        padding-left: 10px;

        #image-option{
            color: ${({ theme }) => theme.iconEnableTheme};
        }

        ${DescriptionOption}{
            color: white;
        }
        
       
    }
`
