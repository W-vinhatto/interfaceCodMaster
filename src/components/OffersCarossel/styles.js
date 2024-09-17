import styled from "styled-components";

export const Conteiner = styled.div`
    padding-left: 40px;
    padding-bottom: 40px;

    .carrosel-item {
        padding-right: 40px;
    }

    overflow-x: hidden;

    .react-multi-carousel-list {
        overflow: visible;
    }

    .sc-fLVwEd {
        width: auto;
    } 

    .sc-eEPDDI {
        width: 150px;
        height: 90px;
    }

`

export const Title = styled.h2`
    font-size: 32px;
    font-weight: 800;
    color: #61a120;
    padding-bottom: 12px;
    position: relative;
    text-align: center;
    margin: 50px 0;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: calc(50% - 28px);
        width: 56px;
        height: 4px;
        background-color: #61a120;
    }
`
