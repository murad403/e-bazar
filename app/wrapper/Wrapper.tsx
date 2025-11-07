"use client";
import React from 'react';
import { Provider } from 'react-redux';
import store, { persistor } from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import { Bounce, ToastContainer } from 'react-toastify';

type TProps = {
    children: React.ReactNode;
}

const Wrapper = ({ children }: TProps) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Navbar></Navbar>
                <div className='bg-gray-100 min-h-screen px-3 md:px-10 lg:px-20'>
                    {
                        children
                    }
                    <ToastContainer
                        position="top-left"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick={false}
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                        transition={Bounce}
                    />
                </div>
                <Footer></Footer>
            </PersistGate>
        </Provider>
    );
};

export default Wrapper;