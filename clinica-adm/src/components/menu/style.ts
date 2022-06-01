
import { url } from "inspector";
import styled, { css } from "styled-components";
import { ReactComponent as Logo } from '../../assets/menu/logo climed.svg';


export const BusinessLogo = styled(Logo)`
    top: 0;
    fill: ${({ theme }) => theme.iconDesableTheme};
    width: 90%;
    height: 50%;
    padding: 5%;

`

export const MenuOptions = styled.div`
    margin-top: 5vh;
    display: grid;

    #image-option{
        min-width: 2vw;
        margin-left: 5px;
        color: ${({ theme }) => theme.iconDesableTheme};
    }
`


export const DescriptionOption = styled.p` //Option Text
    margin-left: 1vw;
    display: none;
    position: relative;
    color: ${({ theme }) => theme.textColorDesableTheme};
    font-size: 1rem;
    white-space: nowrap; // Removendo quebra de linha
    overflow: hidden; // Removendo a barra de rolagem
    text-overflow: ellipsis; // Adicionando "..." ao final do texto
    
    @media only screen and (max-width: 1600px) {
        font-size: 0.8rem;
    }
   
`
export const Business = styled.p` //Business name
    color: ${({ theme }) => theme.iconDesableTheme};
    text-align: center;
    font-weight: bolder;
    font-size: 2rem;
    display: none;
    overflow: hidden;
    position: relative;
`
export const MenuContainer = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 3vw;
    background-color:  ${({ theme }) => theme.menuContainerTheme};
    border-right: 2px solid ${({ theme }) => theme.borderContainerTheme};
    z-index: 3;

    :hover{
        transition: 0.2s ease-in; //Aumentar valor para melhorar o menu
        width: 10vw;

       ${DescriptionOption}{
            
            display: inline-block;
 
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
    margin-top: 0px;
    height: 25vh;
`





export const Option = styled.div`
    display: flex;
    align-items: center;
    padding: 1vh 0;
    cursor: pointer;
    overflow: hidden;


    

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


