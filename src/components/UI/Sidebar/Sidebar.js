import React from "react";

import reactAux from "../../../hoc/reactAux/reactAux";
import NavigationItems from "../NavigationItems/NavigationItems";
import cssClass from "./Sidebar.css";
import Logo from "../Logo/Logo";

const sidebar = props => {
    let classes = [cssClass.Sidebar];
    if (props.isSidebarOpen) {
        classes.push(cssClass.Open);
    } else {
        classes.push(cssClass.Close);
    }

    return (
        <reactAux>
            <div className={classes.join(" ")} onClick={props.closed} >
                <Logo />
                <NavigationItems isAuth={props.isAuth} />
            </div>
        </reactAux>
    );
};

export default sidebar;
