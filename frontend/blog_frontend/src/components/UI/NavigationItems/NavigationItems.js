import React from "react";
import { NavLink } from "react-router-dom";

import NavigationItem from "./NavigationItem/NavigationItem";
import cssClass from "./NavigationItems.css";
import reactAux from "../../../hoc/reactAux/reactAux";

const navigationItems = props => {
    return (
        <div className={cssClass.NavigationItems}>
            <ul className={cssClass.UnorderList}>
                <span className={cssClass.NavigationItems}>
                    <NavLink style={{ textDecoration: "none" }} to="/">
                        <NavigationItem>Home</NavigationItem>
                    </NavLink>
                    <a
                        style={{ textDecoration: "none" }}
                        href="https://github.com/pranjalbareth"
                    >
                        <NavigationItem>About</NavigationItem>
                    </a>
                    {props.isAuth ? (
                        <NavLink
                            style={{ textDecoration: "none" }}
                            to="/dashboard"
                        >
                            <NavigationItem>Dashboard</NavigationItem>
                        </NavLink>
                    ) : (
                        <reactAux>
                            <NavLink
                                style={{ textDecoration: "none" }}
                                to="/login"
                            >
                                <NavigationItem>Sign-In</NavigationItem>
                            </NavLink>
                            {/* <NavLink
                                style={{ textDecoration: "none" }}
                                to="/register"
                            >
                                <NavigationItem>Register</NavigationItem>
                            </NavLink> */}
                        </reactAux>
                    )}
                </span>
            </ul>
        </div>
    );
};

export default navigationItems;
