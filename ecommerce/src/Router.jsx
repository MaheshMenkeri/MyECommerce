import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductDetails from './products/ProductDetails';
import App from './App';

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/ProductDetails/:slug" element={<ProductDetails />} />
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default Router
