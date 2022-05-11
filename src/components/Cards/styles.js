import styled, {Keyframes} from 'styled-components';
import { keyframes } from 'styled-components';

const ripple = keyframes`
 0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  4.9% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  5% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
`

export const CardContainer = styled.section`
    background: #FFF2E4;
    width: 28rem;
    min-height: 4rem;
    height: fit-content;
    display: flex;
    flex-direction: column;
    padding: 1rem 4rem 1rem 4rem;
    color: #4A4A4B;
    >text{
        font-size: 1rem;
        align-self: center;
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;
        font-size:2rem;
        
        >button{
            position: relative;
            left    : 7rem;
            bottom: 1rem;
            border: none;
            background-color: transparent;
            :hover{
            cursor: pointer;
        }
        }
    }
    >h1{
        font-size: 1rem;
        display: flex;
        justify-content: space-between;
        margin: 0.5rem 0;
        
        >button{
            position: relative;
            left    : 2rem;
            border: none;
            background-color: transparent;
        &:hover{
            cursor: pointer;
        }
        }
    }
    >h2{
        margin: 0;
        font-size: 2.25rem;
        margin: 1rem 0;
    }
    >div{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        column-gap: 4rem;
        row-gap: 1rem;
        width: 20rem;
        >div{
            display: flex;
            flex-direction: row;
            column-gap: 0.25rem;
            width: 8rem ;
            font-weight: 100;
            >div{
                font-weight: 600;
            }
            >span{
                font-weight: 600;
            }
        }
    }
    >hr{
        color: #FF7800;
        border-style:solid;
        width: 32rem;
        position: relative;
        right: 2rem;
    }
    >footer{
        display: flex;
        justify-content: space-around;
        >div{
            align-items: center;
            text-align: center;
            >div{
                color: #FF7800;
                font-weight: 600;
                word-spacing: 0.25rem;
                &:nth-child(1){
                    color: #595857;
                    margin-bottom: 0.25rem;
                    font-size: 1.2rem;
                }
            }
        }
    }
    `
    export const LoadingAnimation = styled.div`
        display: inline-block;
        position: relative;
        width: 100px;
        height: 100px;
        color: black;
        >div{
            position: absolute;
            border: 4px solid #fff;
            opacity: 1;
            border-radius: 50%;
            animation-name: ${ripple};
            animation-duration: 1s;
            animation-timing-function: cubic-bezier(0, 0.2, 0.8, 1);
            animation-iteration-count: infinite;
        }
        &:nth-child(2){
            animation-delay: -0.5s;
        }
    `