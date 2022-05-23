import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Menu from "../components/menu";
import Home from "../pages/home";
import Login from "../pages/login";


export const Router = () => {
    

    return (
        <BrowserRouter>
        <Menu />
                        <Routes>
                            <Route path="/
                            " element={<Home />} />
                        </Routes>
            {/* {
                
                location.pathname != '/'?
                    <>
                        <Menu />
                        <Routes>
                            <Route path="/home" element={<Home />} />
                        </Routes>
                    </>

                :
                    <Routes>
                        <Route path="/" element={<Login />} />
                    </Routes>
            } */}
           
        </BrowserRouter>
    );
};
