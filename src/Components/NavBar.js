import React from 'react';
import styled from 'styled-components';
import logoImg from '../image/logo.svg';
import btnQuitImg from '../image/sign.svg';

const NavBarStyled = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    height: 80px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #299B01;
    color: white;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
`;

const H1 = styled.h1`
    font-size: 24px;
    margin-left: 15px;
`;

const ImgLogo = styled.img`
    width: 50px;
`;

const Button = styled.button`
border: solid 0px #ce7910;
color: #FFFFFF;
padding: 9px 9px;
background: linear-gradient(180deg, #ff8c00 5%, #ce7910 100%);
box-shadow: 0px 10px 14px -7px #616174;
cursor: pointer;
user-select: none;
display: inline-flex;
justify-content: center;
align-items: center;
::hover {
	background: linear-gradient(180deg, #ce7910 5%, #ff8c00 100%);
}
::active {
	position: relative;
	top: 1px;
}
`

export const NavBar = () => (
    <NavBarStyled>
        <Logo>
            <ImgLogo src={logoImg} alt="logo"/>
            <H1>MrDonald's</H1>  
        </Logo>
        <Button><img src={btnQuitImg} alt="quit"/></Button>  
    </NavBarStyled>
)