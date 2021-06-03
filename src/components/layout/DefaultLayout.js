import React from 'react'
import Header from './header/Header'
import Footer from "./footer/Footer";
import Landing from '../landing/Landing';

import "./defaultlayout.style.css";

const DefaultLayout = ({children}) => {
    return (
        <div className="body">
            <div className="header">
            <Header/>
            </div>
            
            {children}
            <div>
            <Footer className="footer"/>
            </div>
            
        </div>
    )
}

export default DefaultLayout
