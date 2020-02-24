import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
   
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
            <Post message = 'Hi, how are you?' like = '15' image = "https://img.cartoongoodies.com/wp-content/uploads/2019/11/Avatar-The-Last-Airbender-Aang-head.png"/>
            <Post message = "It's my first post" like = '30' image = "https://img.cartoongoodies.com/wp-content/uploads/2019/11/Avatar-The-Last-Airbender-Aang-head.png"/>           
        </div>
      </div>
    )
}

export default MyPosts