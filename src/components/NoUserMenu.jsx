import { Link } from "react-router-dom";
import { NotLoggedUser } from "./styles/NotLoggedUser";



export default function NoUserMenu() {
    return (
        <NotLoggedUser>
            <Link className="login" to={`/login`}>
                Login
            </Link>
            <Link className="signup" to={`/signup`}>
                Cadastrar
            </Link>
        </NotLoggedUser>
    )
}