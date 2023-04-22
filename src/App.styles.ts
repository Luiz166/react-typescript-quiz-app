import styled, { createGlobalStyle } from 'styled-components';
//background image
import backgroundIMG from './images/tanya-tulupenko.jpg'

export const GlobalStyle = createGlobalStyle`
    html{
        height: 100%;
    }

    body{
        background-image: url(${backgroundIMG});
        background-size: cover;
        display: flex;
        margin: 0;
        padding: 0 20px;
        justify-content: center;
    }

    *{
        box-sizing: border-box;
        font-family: Lato, sans-serif;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        color: white;
    }

    .score{
        color: black;
        font-weight: 800;
        font-size: 2rem;
        margin: 0;
    }

    h1{
        background-image: linear-gradient(180deg, #2D7DD2, #7CDEDC);
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        filter: drop-shadow(2px 2px #0085a3)
        font-size: 70px;
        text-align: center;
        margin: 20px;
    }

    .start, .next{
        cursor: pointer;
        background-color: #EEB902;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        border: none;
        border-radius: 5px;
        color: white;
        font-weight: 800;
        padding: 10px;
        font-size: 20px;
        margin: 20px 0;
    }
    .start{
        max-width: 200px;
    }
`
