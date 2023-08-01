import Styled from "styled-components"

export const Container = Styled.div`
    background: #0A0A10;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 100%;
    min-height: 100vh;
`

export const ContainerImage = Styled.div`
    height: 100vh;
    width: 50%;
    display: flex;
    justify-content: center;
    background: #690C08;
`

export const Image = Styled.img`
    width: 70%;
`

export const Formulario = Styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    height: 100vh;
`

export const Forms = Styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`


export const Label = Styled.p`
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    margin: 25px 0 0 20px;

    color: #EEEEEE;
`

export const Input = Styled.input`
    width: 342px;
    height: 50px;
    padding-left: 15px;

    background: rgba(255, 255, 255, 0.25);
    color: #FFFFFF;
    border-radius: 14px;

    outline: none;
    border: none;

    &::placeholder {
    color: rgba(255, 255, 255, 0.5);
}

`
