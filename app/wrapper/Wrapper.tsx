"use client";
import React from 'react';
import { Provider } from 'react-redux';
import store, { persistor } from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';

type TProps = {
    children: React.ReactNode;
}

const Wrapper = ({ children }: TProps) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Navbar></Navbar>
                <div className='bg-white min-h-screen px-3 md:px-10 lg:px-20'>
                    {
                    children
                }
                </div>
                <Footer></Footer>
            </PersistGate>
        </Provider>
    );
};

export default Wrapper;