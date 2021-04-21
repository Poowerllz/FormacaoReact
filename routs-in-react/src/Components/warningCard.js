import styled from "styled-components";
import { PrimaryCollor, TextCollor } from './variáveis.js'

const FirstCard = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500&display=swap');
    font-family: 'Quicksand', sans-serif;
    background: ${PrimaryCollor};
    border: 2px solid #0099FF;
    border-radius: 3px;
    color: ${TextCollor};
    font-size: 1.2rem;
    margin: 1rem;
    padding: 1rem 1.5rem;
`;

export default FirstCard;

// Explorando a biblioteca Styled-Componets.