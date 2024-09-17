import styled from "styled-components";

import Bacground from '../../assets/backgroundLogin.png'
import BackgroundImageTop from '../../assets/pexels-kiro-wang-7133605 1.svg'



export const Banner = styled.div`
    background: url(${BackgroundImageTop});
    background-size: cover;
    background-position: center;
    height: 480px;
    width: 100vw;

    h1{
        font-family: "Road Rage", sans-serif;
        font-size: 80px;
        color: #ffff;
        position: absolute;
        right: 20%;
        top: 10%;
    }
`

export const Container = styled.div`
    width: 100vw;
    min-height: 100vh;

    background: url('${Bacground}');
    
    background-size: cover;

    img{
        width: 100vw;
        
    }
`

export const Content = styled.div`
    padding-bottom: 70px;
`