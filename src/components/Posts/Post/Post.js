import React from "react";
import { Link } from "react-router-dom";

import Button from "../../UI/Button/Button";
import cssClass from "./Post.css";

const post = props => {
    const articleClass = [
        cssClass.center,
        cssClass.mw5,
        cssClass.mw6Ns,
        cssClass.br3,
        cssClass.hidden,
        cssClass.ba,
        cssClass.bBlack10,
        cssClass.mv4
    ];

    const h1Class = [
        cssClass.f4,
        cssClass.bgNearWhite,
        cssClass.br3,
        cssClass.brTop,
        cssClass.Black60,
        cssClass.mv0,
        cssClass.pv2,
        cssClass.ph3,
        cssClass.title
    ];

    const articleDivClass = [cssClass.pa3, cssClass.bt, cssClass.bBlack10];

    const articlePClass = [
        cssClass.f6,
        cssClass.f5Ns,
        cssClass.lhCopy,
        cssClass.measure
    ];

    return (
        <article className={articleClass.join(" ")}>
            <div className={cssClass.tooltip}>
            <Link
                style={{ textDecoration: "none" }}
                to={"posts/view/" + props.slug}
            >
                <h1 className={h1Class.join(" ")}>{props.title}</h1>
            </Link>
            <span className={cssClass.tooltiptext}>{props.totalComments}{" "}{props.totalComments == 1 ? " Comment" : " Comments"}</span>
            </div>
            <div className={articleDivClass.join(" ")}>
                <p className={articlePClass.join(" ")}>
                    {props.short_description}
                </p>
                <Link to={"posts/view/" + props.slug}>
                    <div className={cssClass.ReadFullPost}>
                        <Button>Read</Button>
                    </div>
                </Link>
                <br />
                <div className={cssClass.PostInfo}>
                    <img className={cssClass.authorimg} src={'https://avatars.githubusercontent.com/u/20490941?s=460&u=5804999e53d61bf4fd87e44f504749b16d5278b4&v=4'} alt={props.author}/>
                    
                    &nbsp;&nbsp;By <a href={'https://github.com/pranjalbareth'}  target="_blank" rel="noopener noreferrer" className={cssClass.Author}>{props.author}</a>
                    {" "}
                    {new Date(props.datePublished).toDateString()}
                    
                </div>
            </div>
            {/* <Link className={cssClass.arrow} to={"posts/view/" + props.slug}><span className={cssClass.arrowrm}>Read more</span> <svg className={cssClass.arrowsvg} viewBox={"0 0 16 16"} xmlns={"http://www.w3.org/2000/svg"}><path d={"M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z"}></path></svg></Link> */}
         <hr className={cssClass.line}/>
        </article>
    );
};

export default post;
