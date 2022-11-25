import { useContext, useState } from "react";
import {AuthContext} from "../contexts/auth.jsx";
import { entrar } from "../services/api";
import { changePassValue } from "../services/utilities";
import Button from "./styles/Button";
import Form from "./styles/Form";
import Input from "./styles/Input";

export default function LogIn() {
    const [password, setPasswordToText] = useState()
    const eye = password === 'text' ? "eye-outline" : "eye-off-outline"

    const {setUser} = useContext(AuthContext)

    const [form, setForm] = useState({ email: '', password: '' })
    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        const { email, password } = form
        const newForm = {
            email,
            password
        }
        entrar(newForm)
            .then((res) => { 
                console.log(res.data)
                setUser(res.data)
            })
            .catch(err => console.log(err.response.data))
    }
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Input name="email" onChange={(e) => handleForm(e)} placeholder="E-mail" />
                <div>
                    <Input name="password" type={password} onChange={(e) => handleForm(e)} placeholder="Senha" />
                    <ion-icon onClick={() => changePassValue(setPasswordToText, password)} name={eye}></ion-icon>
                </div>
                <Button type='submit' value="Iniciar Sessão" />
            </Form>
        </>
    )
}