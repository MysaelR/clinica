import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import Menu from "../components/menu";
import Files from "../pages/files";
import Home from "../pages/home";
import Login from "../pages/login";
import Medicines from "../pages/medicines";
import AddMedicines from "../pages/medicines-add";
import ShowMedicines from "../pages/medicines-show";

export const Router = () => {
    { console.log(window.location.href) }

    return (
        <BrowserRouter>

            {window.location.pathname === '/' ?

                (<Routes>
                    <Route path="/" element={<Login />} />
                </Routes>) :

                (<> <Menu />
                    <Routes>
                        <Route path="/home" element={<Home />} />

                        <Route path="medicines">
                            <Route
                                index
                                element={<Medicines />}
                            />
                            <Route
                                path="add"
                                element={<AddMedicines />}
                            />
                            <Route
                                path="show"
                                element={<ShowMedicines />}
                            />


                        </Route>

                        <Route path="/files" element={<Files />} />
                    </Routes></>)




            }
            {/* <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes> */}


            {/* {

                window.location.href != '/' ?
                    <>
                        ( <Menu />
                        <Routes>
                            <Route path="/home" element={<Home />} />
                        </Routes>)
                    </>

                    :
                    (<Routes>
                        <Route path="/" element={<Login />} />
                    </Routes>)
            } */}

        </BrowserRouter>
    );
};
