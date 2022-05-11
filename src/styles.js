import styled, {createGlobalStyle} from 'styled-components';

const mediaWidth = '700px';

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
    min-height: 100vh;
    height: calc(max-content+1rem);
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    >h1{
        padding-bottom: 2vh;
        margin: 6vh 0 0 0;
        color: white;
        font-size: 4rem;
        @media(max-width:${mediaWidth}){
            font-size: 2rem;
        }
    }
    >div{
        padding: 2rem 2rem 4rem 2rem;
        border-color: transparent transparent white transparent ;
        border-width: 2px;
        border-style: solid;
        position: relative;
        >input{
            height: 2rem;
            width:32rem;
            padding: 1rem;
            font-size: 1.5rem;
            @media(max-width:${mediaWidth}){
            font-size: 1rem;
            width: 80vw;
        }
            &:focus{
                outline: none;
                border-width: 2px;
                border-color: black;
                border-style: solid;
            }
        }
        >button{
            background-color: transparent;
            padding: 0;
            position: absolute;
            right: 3rem;
            top: 3.2rem;
            border: none;
            font-size: 1.25rem;
            cursor: pointer;
        }
    }
    >h2{
        width: 28rem ;
        color: white;
        font-size: 2rem;
        @media(max-width:${mediaWidth}){
            width: 80vw;
        }
    }
    >h3{
        display: flex;
        justify-content: space-between;
        column-gap: 0;
        width: 28rem;
        margin: 0;
        color: #000000;
        font-size: 0.75rem;
        font-weight: 300;
        margin-bottom: 0.75rem;
        @media(max-width:${mediaWidth}){
            width: 80vw;
            >:nth-child(2){
                display: none;
            }
        }
        >span{
            width: 14rem;
            word-spacing: 0.5rem;
        }
    }
    >ul{
        list-style-type: none;
        height: 13rem;
        width: 28rem;
        max-width: 60rem;
        text-indent: 0;
        display: flex;
        align-content: space-between;
        flex-direction: column;
        flex-wrap: wrap;
        row-gap: 1.5rem;
        margin-bottom: 1rem;
        padding: 0;
        @media(max-width:${mediaWidth}){
            flex-wrap: nowrap;
            width: 80vw;
        }
        >li{
            width: 14rem;
            color: #000000;
            font-size: 1rem;
            font-weight: 600;
            >span{
                margin-left: 0.75rem;
            }
        }
    }
`