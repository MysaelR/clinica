import styled from "styled-components";




export const PrincipalDivAddMedicines = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: rgb(244 244 245);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContainerAddMedicines = styled.div`
    position: absolute;
    width: 25vw;
    height: 60vh;
    border-radius: 15px;
    border: 1px solid lightgray;
    background-color: ${({ theme }) => theme.backgroundTheme};
    flex-direction: column;
`