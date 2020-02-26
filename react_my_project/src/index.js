import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let  posts =[
    {id:1, message:'Hi, how are you?', likesCount: 15, image: "https://img.cartoongoodies.com/wp-content/uploads/2019/11/Avatar-The-Last-Airbender-Aang-head.png"},
    {id:2, message:"It's my first post", likesCount: 30, image:"https://img.cartoongoodies.com/wp-content/uploads/2019/11/Avatar-The-Last-Airbender-Aang-head.png"},
    {id:3, message:"How a you?", likesCount: 4, image:"https://img.cartoongoodies.com/wp-content/uploads/2019/11/Avatar-The-Last-Airbender-Aang-head.png"},
    {id:4, message:"Can you hear me?", likesCount: 3, image:"https://img.cartoongoodies.com/wp-content/uploads/2019/11/Avatar-The-Last-Airbender-Aang-head.png"},
    {id:5, message:"If someone sees these messages give an answer", likesCount: 0, image:"https://img.cartoongoodies.com/wp-content/uploads/2019/11/Avatar-The-Last-Airbender-Aang-head.png"},
    {id:6, message:"Or at least like", likesCount: 1, image:"https://img.cartoongoodies.com/wp-content/uploads/2019/11/Avatar-The-Last-Airbender-Aang-head.png"}
]

let dialogsData =[ 
    {id: 1, name: 'Kostya'},
    {id: 2, name: 'Vasya'},
    {id: 3, name: 'Denis'},
    {id: 4, name: 'Dima'},
    {id: 5, name: 'Sasha'},
    {id: 6, name: 'Valera'},
    {id: 7, name: 'Serega'},
    {id: 8, name: 'Anya'}
]

let messageData =[ 
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your it'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Hello'},
    {id: 5, message: 'Lol is your'},
    {id: 6, message: 'Bull shit'}
    
]

ReactDOM.render(<App posts={posts} dialogs={dialogsData} messages={messageData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
