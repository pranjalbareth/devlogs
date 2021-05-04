import React from "react";

import Comment from "./Comment/Comment";
import reactAux from "../../hoc/reactAux/reactAux";

const comments = props => {
    return props.commentsList.map(comment => (
        <reactAux key={comment.published_on}>
            <Comment
                name={comment.name}
                website={comment.website}
                body={comment.body}
                publishedOn={comment.published_on}
            />
        </reactAux>
    ));
};

export default comments;
