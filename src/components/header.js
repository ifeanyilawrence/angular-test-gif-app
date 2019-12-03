import React from 'react';
import Logo from './../assets/images/logo.png';

const header = (
    <section className="banner" role="banner">
        <header id="header">
            <div className="header-content clearfix"> 
                <a className="logo" href="index.html">
                    <img src={Logo} alt=""/>
                </a>
                <nav className="navigation" role="navigation">
                    <ul className="primary-nav">
                        <li>Some Giphy Browser</li>
                    </ul>
                </nav>
                <a href="#" className="nav-toggle">Menu<span></span></a> </div>
        </header>
    </section>
);

const headerContent = (
    <section id="hero" className="section ">
        <div className="container">
            <div className="row">
                <div className="col-md-7 col-sm-6 hero">
                    <div className="hero-content">
                        <h1>Some Giphy Browser</h1>
                    </div>
                </div>
                <div className="col-md-5 col-sm-6 hero">
                    <div className="hero-content">
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export const Header = () => {
    return (
        <div>
            {header}
            {headerContent}
        </div>
    )
}