import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../../components/Header';
import Home from './Home';
import Menu from './Menu';
import Order from './Order';
import Recent from './Recent';
import Footer from '../../components/Footer';
import Profile from './Profile';

export default function Frontend() {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <>
            <Header onSearchChange={setSearchQuery} />
            <Routes>
                <Route index element={<Home />} />
                <Route path='/menu' element={<Menu searchQuery={searchQuery} />} />
                <Route path='/menu' element={<Menu />} />
                <Route path='/order' element={<Order />} />
                <Route path='/recent' element={<Recent />} />
                <Route path='/profile' element={<Profile />} />
            </Routes>
            <Footer />
        </>
    );
}
