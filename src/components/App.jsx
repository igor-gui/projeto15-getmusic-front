import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../assets/globalStyles";
import Home from "./Home";
import LogIn from "./LogIn";
import SignUp from "./SignUp";

export default function App(){
    return(
        <BrowserRouter>
            <GlobalStyle></GlobalStyle>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/signup" element={<SignUp></SignUp>}></Route>
                <Route path="/login" element={<LogIn></LogIn>}></Route>
            </Routes>
        </BrowserRouter>
    )
}