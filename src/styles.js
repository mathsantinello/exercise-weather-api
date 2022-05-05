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
        padding-bottom: 6vh;
        margin: 0;
        margin-top: 6vh;
        color: white;
        font-size: 4rem;
    }
    >div{
        padding: 2rem 2rem 4rem 2rem;
        border-color: transparent transparent white transparent ;
        border-width: 2px;
        border-style: solid;
        >input{
            height: 2rem;
            width:32rem;
            padding: 0.5rem;
        }
        >button{
            padding: 0;
            background-color: transparent;
            border: none;
            position: relative;
            right: 2rem;
            cursor: pointer;
        }
    }
    >h2{
        color: white;
        position: relative;
        right: 8rem;
        font-size: 2.5rem;
    }
    >ul{
        list-style-type: none;
        max-width: 60rem;
        width: 32rem;
        max-height: 16rem;
        text-indent: 0;
        display: flex;
        align-self: center;
        flex-direction: column;
        justify-content: center;
        flex-wrap: wrap;
        gap: 40px;
        margin:0;
        padding: 0;
        >li{
            color: #000000;
        }
    }
`