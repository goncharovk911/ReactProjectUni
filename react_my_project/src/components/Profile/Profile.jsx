import React from 'react';
import classes from './Profile.module.css'
import MyPost from './MyPosts/MyPosts'
const Profile = () =>{
    return(
    <div className= {classes.content}>
        <div>
          <img src='https://unsplash.com/photos/LY1eyQMFeyo/download' />
        </div>
        <MyPost hey= 'Yo'/>

       
      </div>
    );
}

export default Profile;