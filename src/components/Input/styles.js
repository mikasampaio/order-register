import Styled from "styled-components";

export const Input = Styled.input`
    width: 342px;
    height: 50px;
    padding-left: 20px;

    background: rgba(255, 255, 255, 0.25);
    color: #FFFFFF;
    border-radius: 14px;

    outline: none;
    border: 1px solid #afa6a6;

    &::placeholder {
        color: rgba(255, 255, 255, 0.5);

        &:focus {
            border: 2px solid #D93856;
        }
    }

@media screen and (max-width: 400px) {
        font-size: 18px;
    }

`

export const Label = Styled.p`
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    margin: 25px 0 0 20px;

    color: #FFFFFF;
`

export const Error = Styled.span`
    display: flex;
    color: #EA2A2A;
`