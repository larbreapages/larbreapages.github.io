import React, { Component } from 'react';
import './Landing.scss';

class Landing extends Component {
    render() {
        return (
            <section id="home" className="hero is-fullheight is-dark">
                <div className="hero-head">
                    <div className="nav">
                        <div className="container">
                            <div className="nav-left">
                                <a className="nav-item">
                                    <img src="./images/logo.svg" alt="logo" width="28" />
                                    <span>&nbsp;&nbsp;L'Arbre à Pages</span>
                                </a>
                            </div>
                            <div className="nav-right nav-menu">
                                <a className="nav-item is-tab is-hidden-mobile is-active" href="#home">
                                    <span className="icon">
                                        <i className="fa fa-home" />
                                    </span>
                                    <span>Accueil</span>
                                </a>
                                <a className="nav-item is-tab is-hidden-mobile" href="#services">Services</a>
                                <a className="nav-item is-tab is-hidden-mobile" href="#portfolio">Portfolio</a>
                                <a className="nav-item is-tab" href="#testimonials">Témoignages</a>
                                <a className="nav-item is-tab" href="#contact">Contact</a>
                                <a className="nav-item is-tab is-hidden-mobile" href="#about">À propos</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <img src="./images/logo.svg" alt="logo" className="logo" width="125" />
                        <h1 className="logo-title">L'arbre à Pages</h1>
                        <h2 className="title is-spaced border">ATELIER DE RELIURE D'ART</h2>
                        <h3 className="subtitle is-5">Livres d'Or, Albums Photos, Coffrets & Reliures haut de gamme fait main à Nancy.</h3>
                        <div className="buttons">
                            <a href="https://www.etsy.com/fr/shop/LarbreApages?section_id=19710244" className="button is-primary is-inverted" target="_blank">
                                <span className="icon">
                                    <i className="fa fa-shopping-cart" />
                                </span>
                                <span>Voir ma boutique en ligne</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="hero-foot">
                    <div className="container">
                        <div className="has-text-right">
                            <a href="https://facebook.com/larbreapages/" className="icon" target="_blank"><i className="fa fa-facebook-official" /></a>
                            <a href="https://instagram.com/larbreapagesfr/" className="icon" target="_blank"><i className="fa fa-instagram" /></a>
                            <a href="https://twitter.com/larbreapages" className="icon" target="_blank"><i className="fa fa-twitter" /></a>
                            <a href="https://pinterest.com/larbreapages/" className="icon" target="_blank"><i className="fa fa-pinterest" /></a>
                            <a href="https://github.com/larbreapages/larbreapages" className="icon" target="_blank"><i className="fa fa-github" /></a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Landing;
