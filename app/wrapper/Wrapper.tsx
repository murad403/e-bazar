"use client";
import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';

type TProps = {
    children: React.ReactNode;
}

const Wrapper = ({children}: TProps) => {
    return (
        <Provider store={store}>
            {
                children
            }
        </Provider>
    );
};

export default Wrapper;