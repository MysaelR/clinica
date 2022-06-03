import styled, { css } from "styled-components";



export const ContainerMedicineInformation = styled.div`

    position: relative;
    border: 1px solid #D3D3D3;
    background-color: #F4F4F5;
    width: 15vw;
    height: 24vh;
    font-size: 1vw;
    font-weight: bolder;
    font-family: inter;
    margin-left: 3vw;
    margin-top: 3vw;
    border-radius: 15px;
    font-family: sans-serif;
    min-width: 250px;
    min-height: 190px;
    
`

export const HeaderMedicineInformation = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    border-radius: 15px 15px 0 0;
    background-color: #28A9E0;
    color: #123A4D;
    padding-top: 0.5vw;
    padding-bottom: 0.5vw;
    min-height: 20px;
    text-align: center;


`

export const TextHeaderMedicineInformation = styled.p`
    font-size: 15px;
   

    @media only screen and (min-width: 2000px) {
        font-size: 30px;
    } 
    

`


export const ContentMedicineInformation = styled.div`
    position: absolute;
    margin-top: 4.5vh;
    /* margin-top: min(45px) max(50px); */
    width: 100%;
    height: 16vh;

    /* background-color: lightblue; */
    display: grid;

    @media only screen and (max-height: 700px) {
        height: 20vh;
    } 

    
`

export const ElementGroupContentMedicineInformation = styled.div`
    display: flex;
    /* background-color: beige; */
    height: 2vw;
    margin-top: 2%;
    align-items: center;

`

export const TextElementGroupContentMedicineInformation = styled.p`
    margin-left: 3%;
    font-size: 9px;
    color: #123A4D;
    
    font-weight: bold;
    position: absolute;
    width: 50%;
   
    /* background-color: red; */


    @media only screen and (max-width: 500px) {
        font-size: 9px;
    } 

    @media only screen and (min-width: 1500px) {
        font-size: 9px;
    }

    @media only screen and (min-width: 2000px) {
        font-size: 12px;
    } 
    @media only screen and (min-width: 3000px) {
        font-size: 20px;
    } 
`
export const InformationElementGroupContentMedicineInformation = styled.div`
    position: absolute;
    text-align: center;
    background-color: #28A9E0;
    border-radius: 15px 0  0 15px ;
    align-content: flex-end;
    right: 0;
    width: 40%;
    padding-top: 0.6vh;
    padding-bottom: 0.6vh;
    
    font-size: 9px;
    align-items: center;

    @media only screen and (max-width: 500px) {
        font-size: 9px;
    } 

    @media only screen and (min-width: 1500px) {
        font-size: 9px;
    }

    @media only screen and (min-width: 2000px) {
        font-size: 12px;
    } 

    @media only screen and (min-width: 3000px) {
        font-size: 20px;
    } 
`








export const ButtonsContainerMedicineInformation = styled.div`
    position: absolute;
    /* margin-top: 9.4vw;  //9.4 */
    margin-top: 20vh;
    /* background-color: lightcyan; */
    width: 100%;
    height: 4vh;
    display: flex;

/* 
    @media only screen and (max-width: 1600px) {
        height: 1vh;
    } */


`
