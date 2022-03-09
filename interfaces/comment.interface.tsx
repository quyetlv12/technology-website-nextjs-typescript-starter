export interface CommentProps {
     readonly _id : string;
    comment : string;
    postId : string;
    user : {
        id : string, 
        name : string ,
        photo : string,
    };
}