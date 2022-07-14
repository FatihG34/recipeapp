import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/nav/Navbar';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import { GlobalStyles } from '../components/globalStyles/Global.style';
import Login from '../pages/login/Login';
import PirvateRouter from './PirvateRouter';
import Details from '../pages/details/Details';


const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <GlobalStyles />
                <Navbar />
                <Routes>
                    <Route>
                        <Route path='/' element={<Home />} />
                        <Route path='login' element={<Login />} />
                        <Route path='about' element={<PirvateRouter />} >
                            <Route path='' element={<About />} />
                        </Route>
                        <Route path='detail' element={<PirvateRouter />} >
                            <Route path='' element={<Details />} />
                        </Route>

                    </Route>
                </Routes>



            </BrowserRouter>
        </div>
    )
}

export default AppRouter