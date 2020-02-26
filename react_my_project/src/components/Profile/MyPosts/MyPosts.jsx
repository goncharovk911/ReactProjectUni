import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
   

    let postsElements = props.posts.map(p => <Post message = {p.message} like = {p.likesCount} image =  {p.image}/>)

    return(
    <div className = {classes.item}>
       <h3> My posts</h3>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>                
                <button>All post</button>
            </div>
        </div>
        <div className = {classes.post}>
           {postsElements}          
        </div>
    </div>
    )
}

export default MyPosts