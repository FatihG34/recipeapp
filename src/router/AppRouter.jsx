import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
// import Details from '../pages/details/Details';

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        {/* <Route path='/github' element={<Navigate to={"https://github.com/FatihG34"} />} /> */}

                    </Route>
                </Routes>



            </BrowserRouter>
        </div>
    )
}

export default AppRouter