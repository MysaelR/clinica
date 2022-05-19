import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "../components/menu";
import Home from "../pages/home";


export const Router = () => {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />


            </Routes>
        </BrowserRouter>
    );
};
