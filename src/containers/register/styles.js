import styled from "styled-components";
import { Link as ReactLink } from "react-router-dom";



import Background from '../../assets/backgrounkbaseLogin.svg'
import BackgroundLogin from '../../assets/backgroundLogin.png'


export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
`

export const LeftContainer = styled.div`
    background: url('${Background}');
    background-size: cover;
    background-position: center;

    width: 100%;
    height: 100%;
    max-width: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    img{
        width: 80%;
    }
`

export const RigtContainer = styled.div`
    background: url('${BackgroundLogin}');
    background-color: #1e1e1e;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
    max-width: 50%;
    gap: 25px;

    
    p {
        font-size: 18px;
        color: #ffffff;
        font-weight: 600;
    }
`

export const Title = styled.h2`
    font-family: "Road Rage", sans-serif;
    font-size: 40px;
    color: #ffff;
    letter-spacing: 0.5px;
    color: #9758a6;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    max-width: 400px;
`

export const ImputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;

    input{
        width: 100%;
        border: none;
        border-radius: 5px;
        height: 52px;
        padding: 0 16px;
    }

    label {
        font-size: 18px;
        color: #ffffff;
        font-weight: 600;
    }

    p{
        font-size: 14;
        line-height: 80%;
        color: #cf3057;
        font-weight: 600;
        height: 10px;
    }
`

export const Link = styled(ReactLink)`
   text-decoration: none;
   color: #9758a6;
`
