import React from "react";
import Comment from "./Comment";

const comments =[
    {
        name: "Sally Kim",
        comment:"안녕하세요! 반갑습니다.",
    },
    {
        name: "Kelly Y",
        comment:"안녕하세요! ㅎㅎㅎ",
    },
    {
        name: "David",
        comment:"Hi !! ",
    },
];

function CommentList(props){
    return(
       <div>
        {comments.map((comment)=>{
            return (
                <Comment name={comment.name} comment={comment.comment}/>
            );
        })}
       </div>
    );
}

export default CommentList;