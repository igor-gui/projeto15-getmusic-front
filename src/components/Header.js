import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContext } from '../contexts/auth';

export default function Header(){

    const {user} = useContext(AuthContext)
    useEffect(() => {
        
    }, [])
    return (
        <HeaderContainer>
            <HeaderWrapper>
                <StyledLogo>
                    <h1>get(Music)</h1>
                </StyledLogo>

                <StyledMenu>
                    <span>Home</span>
                    <span>Categorias</span>
                    <span>Sobre nós</span>
                </StyledMenu>

                <StyledUserInfo>
                    <NotLoggedUser>
                        <Link to={`/login`}>
                            <LoginButton>Login</LoginButton>
                        </Link>
                        <Link to={`/signup`}>
                            <SignupButton>Cadastrar</SignupButton>
                        </Link>
                    </NotLoggedUser>
                </StyledUserInfo>
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

const StyledLogo = styled.div`
    color: #FFFFFF;
    font-family: 'Signika Negative', sans-serif;
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

const StyledUserInfo = styled.div`
    display: flex;
`;

const NotLoggedUser = styled.div`
    button {
        width: 90px;
        height: 50px;
        border: none;
        border-radius: 5px;
        margin: 0 5px;
        color: #FFFFFF;
        font-family: 'Signika Negative', sans-serif;
        font-size: 16px;
        cursor: pointer;
    }
`;

const LoginButton = styled.button`
    background: #000000;
`;
const SignupButton = styled.button`
    background: #0451bd;
`;