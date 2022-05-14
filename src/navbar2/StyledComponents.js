import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';


export const Nav = styled.nav`
    background: #EEEFF1;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
`;

export const NavLink = styled(Link)`
    color: #2C98A0;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 25px;
    font-family: 'Roboto', sans-serif;
    font-style: italic;

    &:hover {
        color: #1a5f64;
    }
    &.active {
        color: #000000;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #2C98A0;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 10px;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;



Third Nav 
        width: 100vw;
    white-space: nowrap; 

    @media screen and (max-width: 768px) {
        display: none;
    }
`;