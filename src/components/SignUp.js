import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

export default function SignUp(){

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [nome, setNome] = useState('')
    const navigate = useNavigate()

    function submit(){
        const URL = "http://localhost:5000/signup"
        const user = {
            name: nome,
            email,
            password: senha
        }

        const promise = axios.post(URL, user)

        promise.then(resposta => {
            navigate("/")
        })

        promise.catch(err => {
            console.log(err.response.data)
        })
    }

    return (
        <StyledContainer>
            <StyledWrapper>

                <Formulario>
                    <input type='text' placeholder="email" value={email} onChange={e => setEmail(e.target.value)}></input>
                    <input type='text' placeholder="senha" value={senha} onChange={e => setSenha(e.target.value)}></input>
                    <input type='text' placeholder="nome" value={nome} onChange={e => setNome(e.target.value)}></input>

                    <button type='submit' onClick={submit}>
                        Cadastrar
                    </button>
                </Formulario>

                <Link to={`/login`}>
                    <LinkCad>Já tem uma conta? Faça login!</LinkCad>
                </Link>
            </StyledWrapper>
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 60px;
`

const StyledWrapper = styled.div`
    width: 100%;
    max-width: 414px;
`
const Formulario = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 32px;
    input {
        width: 303px;
        height: 45px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        font-weight: 400;
        padding-left: 15px;
        margin-bottom: 6px;
        &::placeholder {
            color: #DBDBDB;
        }
    }
    button {
        width: 320px;
        height: 45px;
        background: #0451bd;
        border: none;
        border-radius: 5px;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        font-weight: 400;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
    }
`
const LinkCad = styled.div`
    color: #0451bd;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    text-decoration-line: underline;
    margin-top: 25px;
`