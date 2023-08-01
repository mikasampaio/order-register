import Styled from 'styled-components'

export const Button = Styled.button`
    width: 342px;
    height: 58px;
    margin-top: 60px;
    margin-bottom: 10px;

    background: ${props => props.isColor ? 'rgba(255, 255, 255, 0.15)' : '#690C08'};
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
