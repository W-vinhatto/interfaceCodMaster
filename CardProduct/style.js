import styled from "styled-components";

export const ConteinerItens = styled.div`
    background-size: cover;
    border-radius: 20px;
    background-color: #ffffff;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    padding: 20px 10px;
    width: 90%;
    height: 250px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    cursor: grab;

    div {
        display: flex;
        gap: 20px;
        width: 100%;

        flex-direction: column;
        justify-content: space-between;
        align-items: start;

        p {
            font-size: 18px;
            color: #ff8c05;
            font-weight: 700;
            line-height: 20px;
        }

        strong {
            font-size: 22px;
            color: #363636;
            font-weight: 800;
            line-height: 20px;
        }
    }
`

export const ConteinerImage = styled.div`
    background: url('${(props) => props.imageUrl}'), no-repeat;
    background-size: cover;
    height: 100px;
    width: 40%;

    position: absolute;
    top: -40px;
    z-index: 10;
`

export const DivButton = styled.div`
    padding-top: 10px;
    width: 100%;
    height: 60px;
`
