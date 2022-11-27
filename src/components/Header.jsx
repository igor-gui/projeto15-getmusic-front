import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../contexts/auth';
import Logo from './Logo';
import NoUserMenu from './NoUserMenu';

export default function Header(){

    const {user} = useContext(AuthContext)
    useEffect(() => {
        
    }, [])
    return (
        <HeaderContainer>
            <HeaderWrapper>
                <Logo />
                <StyledMenu>
                    <span>Home</span>
                    <span>Categorias</span>
                    <span>Sobre nós</span>
                </StyledMenu>

                { user !== {} ? <NoUserMenu/> : ''}
            </HeaderWrapper>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    width: 100%;
    height: 74px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000;
    position: fixed;
    top: 0;
    z-index: 1;
`;

const HeaderWrapper = styled.div`
    width: 100%;
    max-width: 935px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`;


const StyledMenu = styled.div`
    display: flex;
    align-items: center;
    span {
        color: #FFFFFF;
        font-family: 'Signika Negative', sans-serif;
        margin: 0 10px;
        cursor: pointer;
        font-size: 18px;
    }
`;

