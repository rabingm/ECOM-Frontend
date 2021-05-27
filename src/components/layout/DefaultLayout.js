import React from 'react'
import Header from './header/Header'
import Footer from "./footer/Footer";
import Landing from '../landing/Landing';

const DefaultLayout = ({children}) => {
    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}

export default DefaultLayout
