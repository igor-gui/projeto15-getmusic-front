import { useState } from "react";
import { changePassValue } from "../services/utilities";
import Form from "./styles/Form";
import Input from "./styles/Input";

export default function LogIn() {
    const [password, setPasswordToText] = useState()
    const eye = password === 'text' ? "eye-outline" : "eye-off-outline"
    return (
        <>
            <Form>
                <Input placeholder="E-mail" />
                <div>
                    <Input type={password} placeholder="Senha" />
                    <ion-icon onClick={() => changePassValue(setPasswordToText, password)} name={eye}></ion-icon>
                </div>
            </Form>
        </>
    )
}