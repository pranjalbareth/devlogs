import React, { Component } from "react";

import AxiosInstance from "../../AxiosInstance";
import Spinner from "../../components/UI/Spinner/Spinner";
import cssClass from "./PostBody.css";
import HR from "../../components/UI/HR/HR";
import reactAux from "../../hoc/reactAux/reactAux";
import Comments from "../../components/Comments/Comments";
import CommentForm from "../CreateComment/CreateComment";

class PostBody extends Component {
    
    state = {
        loading: true,
        postBody: null,
        comments: null
    };

    getPostBody = () => {
        AxiosInstance.get("posts/view/" + this.props.match.params.slug)
            .then(response =>
                this.setState({ loading: false, postBody: response.data })
            )
            .catch(err => console.log("Error From PostBody.js", err));
    };

    getCommentsList = () => {
        AxiosInstance.get("comments/" + this.props.match.params.slug + "/")
            .then(response => {
                this.setState({ comments: response.data });
            })
            .catch(error => {
                alert("Error Loading Comments. Try Again..!!");
            });
    };

    renderWholePage = () => {
        this.getPostBody();
        this.getCommentsList();
    };
    componentDidMount() {
        this.renderWholePage();
    }

    render() {
        let postBody = <Spinner />;
        if (!this.state.loading && this.state.postBody) {
            postBody = (
                <reactAux>
                    <div className={cssClass.PostBodyDiv}>
                        <h1 className={cssClass.Title}>
                            {this.state.postBody.title}
                        </h1>
                        {/* <span className={cssClass.author}>{this.state.postBody.author_full_name}&nbsp;&nbsp;&nbsp;</span> */}
                         <img className={cssClass.authorimg} src={'https://avatars.githubusercontent.com/u/20490941?s=460&u=5804999e53d61bf4fd87e44f504749b16d5278b4&v=4'} alt={this.state.postBody.author_full_name}/>&nbsp;&nbsp; 
                            
                            &nbsp;&nbsp;<a href={'https://github.com/pranjalbareth'}  target="_blank" rel="noopener noreferrer" className={cssClass.Author}>{this.state.postBody.author_full_name}</a>    &nbsp;&nbsp;                        
                        <span className={cssClass.PublishedDate}>
                            {new Date(
                                this.state.postBody.published_on
                            ).toDateString()}
                        </span>
                        <HR />
                        <p className={cssClass.PostBody}>
                            {this.state.postBody.body}
                        </p>
                        <HR />
                        {/* <div className={cssClass.PostInfo}>
                            <p> - {this.state.postBody.author_full_name}</p>
                        </div> */}
                        <h1 className={cssClass.CommentHeading}>
                            Comments: {this.state.postBody.total_comments}
                        </h1>
                    </div>
                    <Comments commentsList={this.state.comments} />
                    <CommentForm
                        slug={this.props.match.params.slug}
                        refresh={this.renderWholePage}
                    />
                </reactAux>
            );
        }

        return postBody;
    }
}

export default PostBody;
