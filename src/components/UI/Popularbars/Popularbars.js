import React from "react";
import { Link } from "react-router-dom";
import Popularbar from "./Popularbar/Popularbar";
import cssClass from "./Popularbars.css";

const Popularbars = props => {
    return (
        <div className={cssClass.NavigationItem}>
            <ul className={cssClass.UnorderList}>
                <span className={cssClass.NavigationItems}>
                    <h3>Popular on DevLogs</h3>
                    <article style={{borderBottom: "1px solid rgb(208, 208, 208)", display: "flex", paddingTop: "12px"}}>
                        <svg class={cssClass.svgpin} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M15.686 5.695L10.291.3c-.4-.4-.999-.4-1.399 0s-.4.999 0 1.399l.6.599-6.794 3.697-1-1c-.4-.399-.999-.399-1.398 0-.4.4-.4 1 0 1.4l1.498 1.498 2.398 2.398L.6 13.988 2 15.387l3.696-3.697 3.997 3.996c.5.5 1.199.2 1.398 0 .4-.4.4-.999 0-1.398l-.999-1 3.697-6.694.6.6c.599.6 1.199.2 1.398 0 .3-.4.3-1.1-.1-1.499zM8.493 11.79L4.196 7.494l6.695-3.697 1.298 1.299-3.696 6.694z"></path></svg>
                        <article>
                        <h3 style={{fontWeight:500, marginBottom: "6px", marginTop: "-0.6rem"}}>
                        <Link className={cssClass.LinkAuthor} to="/">
                            <Popularbar className={cssClass.LinkAuthor} >Create and Deploy a webapp with NextjS</Popularbar>
                        </Link>
                        </h3>
                        <div style={{fontSize: ".875rem", color: "#333",fontFamily: "'Inter', sans-serif", paddingBottom: "15px"}}>
                            <span style={{color: "#666666"}}>By </span>
                            <Link to="#" className={cssClass.LinkAuthor}>Pranjal Bareth</Link>
                        </div>
                        </article>
                    </article>
                    <article style={{borderBottom: "1px solid rgb(208, 208, 208)", display: "flex", paddingTop: "12px"}}>
                        <svg class={cssClass.svgpin} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M15.686 5.695L10.291.3c-.4-.4-.999-.4-1.399 0s-.4.999 0 1.399l.6.599-6.794 3.697-1-1c-.4-.399-.999-.399-1.398 0-.4.4-.4 1 0 1.4l1.498 1.498 2.398 2.398L.6 13.988 2 15.387l3.696-3.697 3.997 3.996c.5.5 1.199.2 1.398 0 .4-.4.4-.999 0-1.398l-.999-1 3.697-6.694.6.6c.599.6 1.199.2 1.398 0 .3-.4.3-1.1-.1-1.499zM8.493 11.79L4.196 7.494l6.695-3.697 1.298 1.299-3.696 6.694z"></path></svg>
                        <article>
                            <h3 style={{fontWeight:500, marginBottom: "6px", marginTop: "-0.6rem"}}>
                            <Link className={cssClass.LinkAuthor} to="/">
                                <Popularbar className={cssClass.LinkAuthor} >Why we think React is a good start for beginners</Popularbar>
                            </Link>
                        </h3>
                        <div style={{fontSize: ".875rem", color: "#333",fontFamily: "'Inter', sans-serif", paddingBottom: "15px"}}>
                            <span style={{color: "#666666"}}>By </span>
                            <Link to="#" className={cssClass.LinkAuthor}>Pranjal Bareth</Link>
                        </div>
                        </article>
                    </article>
                    <article style={{borderBottom: "1px solid rgb(208, 208, 208)", display: "flex", paddingTop: "12px"}}>
                        <svg class={cssClass.svgpin} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M15.686 5.695L10.291.3c-.4-.4-.999-.4-1.399 0s-.4.999 0 1.399l.6.599-6.794 3.697-1-1c-.4-.399-.999-.399-1.398 0-.4.4-.4 1 0 1.4l1.498 1.498 2.398 2.398L.6 13.988 2 15.387l3.696-3.697 3.997 3.996c.5.5 1.199.2 1.398 0 .4-.4.4-.999 0-1.398l-.999-1 3.697-6.694.6.6c.599.6 1.199.2 1.398 0 .3-.4.3-1.1-.1-1.499zM8.493 11.79L4.196 7.494l6.695-3.697 1.298 1.299-3.696 6.694z"></path></svg>
                        <article>
                            <h3 style={{fontWeight:500, marginBottom: "6px", marginTop: "-0.6rem"}}>
                            <Link className={cssClass.LinkAuthor} to="/">
                                <Popularbar className={cssClass.LinkAuthor} >Getting started with Vue.js and Stripe</Popularbar>
                            </Link>
                        </h3>
                        <div style={{fontSize: ".875rem", color: "#333",fontFamily: "'Inter', sans-serif", paddingBottom: "15px"}}>
                            <span style={{color: "#666666"}}>By </span>
                            <Link to="#" className={cssClass.LinkAuthor}>Pranjal Bareth</Link>
                        </div>
                    </article>
                    </article>
                    <article style={{borderBottom: "1px solid rgb(208, 208, 208)", display: "flex", paddingTop: "12px"}}>
                    <svg class={cssClass.svgpin} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M15.686 5.695L10.291.3c-.4-.4-.999-.4-1.399 0s-.4.999 0 1.399l.6.599-6.794 3.697-1-1c-.4-.399-.999-.399-1.398 0-.4.4-.4 1 0 1.4l1.498 1.498 2.398 2.398L.6 13.988 2 15.387l3.696-3.697 3.997 3.996c.5.5 1.199.2 1.398 0 .4-.4.4-.999 0-1.398l-.999-1 3.697-6.694.6.6c.599.6 1.199.2 1.398 0 .3-.4.3-1.1-.1-1.499zM8.493 11.79L4.196 7.494l6.695-3.697 1.298 1.299-3.696 6.694z"></path></svg>
                    <article>
                        <h3 style={{fontWeight:500, marginBottom: "6px", marginTop: "-0.6rem"}}>
                        <Link className={cssClass.LinkAuthor} to="/">
                            <Popularbar className={cssClass.LinkAuthor} >Making New projects with React & Nodejs</Popularbar>
                        </Link>
                    </h3>
                    <div style={{fontSize: ".875rem", color: "#333",fontFamily: "'Inter', sans-serif", paddingBottom: "15px"}}>
                        <span style={{color: "#666666"}}>By </span>
                        <Link to="#" className={cssClass.LinkAuthor}>Pranjal Bareth</Link>
                    </div>
                    </article>
                    </article>
                </span>
            </ul>
        </div>
    );
};

export default Popularbars;
