import Input from "./styles/Input"
import Button from "./styles/Button"
import Form from "./styles/Form"
import { useState } from "react"
import { changePassValue } from "../services/utilities"


export default function SignUp() {
    const [password, setPasswordToText] = useState('password')
    const [confirmPassword, setConfirmPasswordPasswordToText] = useState('password')



    return (
        <>

            <Form >
                <Input type="text" placeholder="Nome" />
                <Input type="text" placeholder="E-mail" />
                <div>
                    <Input type={password} placeholder="Senha" />
                    <ion-icon onClick={() => changePassValue(setPasswordToText, password)} name="eye-outline"></ion-icon>
                </div>
                <div>
                    <Input type={confirmPassword} placeholder="Confirmar Senha" />
                    <ion-icon onClick={() => changePassValue(setConfirmPasswordPasswordToText, confirmPassword)} name="eye-outline"></ion-icon>
                </div>
                <Button value="Cadastrar" />
            </Form>
        </>
    )
}