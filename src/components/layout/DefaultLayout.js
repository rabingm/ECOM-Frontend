import React from 'react'
import Header from './header/Header'
import Footer from "./footer/Footer";
import Landing from '../landing/Landing';

const DefaultLayout = () => {
    return (
        <div>
            <Header/>
            <Landing/>
            <Footer/>
        </div>
    )
}

export default DefaultLayout
