import React from "react";
import cssClass from "./Popularbar.css";

const Popularbar = props => {
    return <li className={cssClass.Item}>{props.children}</li>;
};

export default Popularbar;
