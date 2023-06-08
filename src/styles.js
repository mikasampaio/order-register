import Styled from "styled-components"

export const Container = Styled.div`
    background: #0A0A10;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    height: 100%;
    min-height: 100vh;
`

export const Image = Styled.img`
    width: 335px;
`
export const H1 = Styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 33px;
    color: #FFFFFF;
    margin-top: 11px;
`

export const Formulario = Styled.div`
    display: flex;
    flex-direction: column;
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

export const Button = Styled.button`
    width: 342px;
    height: 58px;
    margin-top: 60px;
    margin-bottom: 10px;

    background: #D93856;
    color: #FFFFFF;

    border: none;
    cursor: pointer;

    font-weight: 600;
    font-size: 17px;
    line-height: 2px;

    &:hover {
        opacity: .8
    }
`

export const Order = Styled.li`
    width: 342px;
    height: 101px;
    padding: 17px 27px;
    margin-top: 10px;


    background: rgba(255, 255, 255, 0.25);
    color: #FFFFFF;
    border-radius: 14px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        background: transparent;
        border: none;
        cursor: pointer;
    }

`

export const DivText = Styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;

    p {
        font-weight: 300;
        font-size: 18px;
        line-height: 21px;
    }

    h2 {
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
    }

    
}
`
