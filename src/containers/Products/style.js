import styled from "styled-components"


import Bacground from '../../assets/backgroundLogin.png'
import BackgroundImageTop from '../../assets/bacgroud-products.svg'
import { Link } from "react-router-dom"


export const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: #f0f0f0;

    background: linear-gradient(
        rgba(255,255,255, 0.6),
        rgba(255,255,255, 0.6)
    ), url('${Bacground}');
`


export const Banner = styled.div`
    display: flex;
    align-items: center;
    background-color: #1f1f1f ;
    background: url('${BackgroundImageTop}');
    background-size: cover;
    background-position: center;
    height: 480px;
    width: 100vw;

    h2{
        font-family: "Road Rage", sans-serif;
        font-size: 96px;
        color: #ffff;
        position: absolute;
        right: 15%;
        top: 10%;

        width: 387.47px;
        height: 207px;

        font-weight: 400;
        line-height: 65.94px;
        text-align: center;
    }

    p{
        color: #ffff;
        position: absolute;
        width: 387.47px;
        right: 15%;
        top: 38%;
        color: #ff8c05;


        font-size: 19.11px;
        font-weight: 400;
        line-height: 13.09px;
        text-align: center;
    }
`



export const CategoryMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 30px;
`

export const CategoryButton = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    background: none;
    color:  ${props => props. $isActive ?  '#ff8c05':'#9758a6' } ;
    font-size: 24px;
    font-weight: 500;
    padding-bottom: 5px;
    line-height: 20px;

    border-bottom: ${props => props. $isActive ? '3px solid   #ff8c05':'none' } ;
`

export const ContainerMenu = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 40px;
    justify-content: center;
    max-width: 1280px;
    gap: 60px;
    margin: 50px auto;
`
