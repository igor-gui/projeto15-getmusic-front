import Input from "./styles/Input"
import Button from "./styles/Button"
import Form from "./styles/Form"
import { useState } from "react"
import { changePassValue } from "../services/utilities"
import { cadastrar } from "../services/api"
import { useNavigate } from "react-router-dom"


export default function SignUp() {
    const [inputType, setInputType] = useState('password')
    const [confirmInputType, setconfirmInputType] = useState('password')
    const eye = inputType === 'text' ? "eye-outline" : "eye-off-outline"
    const secEye = confirmInputType === 'text' ? "eye-outline" : "eye-off-outline"

    const navigate = useNavigate()

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    function handleSubmit(e) {
        e.preventDefault()
        const passwordsDontMatchEachOther = form.password !== form.confirmPassword
        if (passwordsDontMatchEachOther) {
            return alert("As senhas devem ser Iguais!!")
        }
        const {name, email, password} = form
        const newForm = {
            name,
            email,
            password
        }
        cadastrar(newForm)
            .then((res) => {
                alert('Cadastro realizado com sucesso!');
                console.log(res.data)
                navigate('/')
            }
            )
            .catch((err) => console.log(err.response.data))
    }

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <>

            <Form onSubmit={handleSubmit}>
                <Input name="name" type="text" onChange={(e) => handleForm(e)} placeholder="Nome" />
                <Input name="email" type="text" onChange={(e) => handleForm(e)} placeholder="E-mail" />
                <div>
                    <Input name="password" type={inputType} onChange={(e) => handleForm(e)} placeholder="Senha" />
                    <ion-icon onClick={() => changePassValue(setInputType, inputType)} name={eye}></ion-icon>
                </div>
                <div>
                    <Input name="confirmPassword" type={confirmInputType} onChange={(e) => handleForm(e)} placeholder="Confirmar Senha" />
                    <ion-icon onClick={() => changePassValue(setconfirmInputType, confirmInputType)} name={secEye}></ion-icon>
                </div>
                <Button type="submit" value="Cadastrar" />
            </Form>
        </>
    )
}