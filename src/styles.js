import styled, {createGlobalStyle} from 'styled-components';

export const Global = createGlobalStyle`
    body{
        font-family: Arial, Helvetica, sans-serif;
        margin: 0;
        padding: 0;
        outline: 0;
        border: 0;
    }
`

export const Container = styled.main`
    background: rgb(255,126,0);
    background: linear-gradient(180deg, rgba(255,126,0,1) 0%, rgba(255,186,0,1) 100%); 
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    >h1{
        margin: 0;
        padding-bottom: 6vh;
        margin-top: 6vh;
        color: white;
    }
    >div{
        >input{
            width:20rem;
            padding: 0.5rem;
            margin-right: -2rem;
        }
        >button{
            padding: 0;
            background-color: transparent;
            border: none;
            cursor: pointer;

        }
    }
`