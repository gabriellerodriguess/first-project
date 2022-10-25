import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100vh;
    height: 100vh;
`
export const Content = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    
`
export const Input = styled.input`
    border: 1px solid #3A3A3A;
    border-radius: .25rem 0 0 .25rem;
    height: 2rem;
    padding: 0 .5rem;

    &:focus, &:active {
        outline: none;
    }
`
export const Button = styled.button`
    height: 2rem;
    border: 1px solid #3A3A3A;
    background: #3A3A3A;
    color:  #FFF;
    border-radius: 0 .25rem .25rem 0;
    padding: 0 .8rem;

`
export const MessageError = styled.p`
    color: #FF0000;
    font-weight: bold;
    display: block;
`