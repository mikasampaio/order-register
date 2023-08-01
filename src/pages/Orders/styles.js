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
    width: 240px;
`


export const Order = Styled.li`
    width: 342px;
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
