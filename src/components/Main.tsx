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
    overflow:scroll;
    /* transition:1s; */

    //TODO adicionar animação de background
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

    width:80%;
    min-height:50px;
    border-radius:5px;
    outline:none;
    background:transparent;
    text-align:center;
    font-size:1.5em;
    color:white;
    transition:.8s;


    &:invalid{
        border:2px solid red;
    }


    &::placeholder{
        color:white;
    }
`;

//Aqui são as divições
const DivBC = Styled.div`
    width:50%;
    min-width:50px;
    /* height:50px; */
    
    display:flex;
  
`;

//Botao
const IconeAreaButton = Styled.button`
    border:none;
    outline:none;
    border-radius:5px;
    min-width:50px;
    width:10%;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-left:10px;
    background:red;
    transition:.6s;
    cursor:pointer;

    &:hover{
        background:white;
        box-shadow:4px 4px 1px red;
    }
`;

//Detalhes
const DetailBC = Styled.details`

    width:30%;
    height:10vh;
    display:flex;
    margin-top:50px;
    color:white;

`;

// Ul 
const UlBC = Styled.ul`
    width:100%;
    height:200%;
    border:2px solid white;
    border-radius:5px;
    overflow:scroll;

`;

//Listas
const LiBC = Styled.li`

    color:white;
    font-size:1em;
    display:flex;
    padding:5px 10px;


`;

export {MainBC ,TitleBC, InputBC,DivBC, IconeAreaButton, DetailBC, UlBC, LiBC};