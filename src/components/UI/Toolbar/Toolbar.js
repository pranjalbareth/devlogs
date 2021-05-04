import React from "react";

import NavigationItems from "../NavigationItems/NavigationItems";
import cssClass from "./Toolbar.css";
import HamburgerIcon from "../../../assets/images/hamburger.png";
import reactAux from "../../../hoc/reactAux/reactAux";

const toolbar = props => {
    return (
        <reactAux>
            <div className={cssClass.Toolbar}>
                <div className={cssClass.NavigationItems}>
                    <NavigationItems isAuth={props.isAuth}/>
                </div>
                <div className={cssClass.HamburgerIcon} onClick={props.clicked}>
                    <img
                        className={cssClass.HamburgerIcon}
                        src={HamburgerIcon}
                        alt="HamburgerIcon"
                    />
                </div>
            </div>
        </reactAux>
    );
};

export default toolbar;
