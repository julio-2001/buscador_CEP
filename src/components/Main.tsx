import React from "react";
import Styled from "styled-components"

//Corpo principal da pagina
const MainBC = Styled.main`

    width:100%;
    height:100vh;
    background:black;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`;

//texto principal da pagina
const TitleBC = Styled.h1`
    font-size:72px;
    font-weight:700;
    color:white;
    display:flex;

    //TODO colocar animação de flutuação
`;

// o input 
const InputBC = Styled.input`

    width:50%;
    min-height:50px;
    

`;

//Aqui são as divições
const DivBC = Styled.div`
    width:20%;
    height:50px;
    background:red;
   


`;


export {MainBC ,TitleBC, InputBC,DivBC};