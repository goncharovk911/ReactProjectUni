import React from 'react';
import classes from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) =>{
    let path = "/dialogs/" + props.id

    return(
        <div className={classes.dialogs + ' ' + classes.dialogs.active}>
                   <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
}

const Message = (props) =>{
   return (
   <div className={classes.dialog}>{props.message}</div>
    )
}


const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div classes={classes.dialogsItems}>
                <DialogItem name='Kostya' id='1'/>
                <DialogItem name='Vasya' id='2'/>
                <DialogItem name='Denis' id='3'/>
                <DialogItem name='Dima' id='4'/>
                <DialogItem name='Sasha' id='5'/>
                <DialogItem name='Valera' id='6'/>
                <DialogItem name='Serega' id='7'/>
                <DialogItem name='Anya' id='8'/>
               
            </div>
            <div className={classes.messages}>
               <Message message='Hi'/>
               <Message message='How is your it'/>
               <Message message='Yo'/>
               <Message message='Hi'/>
               <Message message='How is your it'/>
               <Message message='Yo'/>
            </div>
        </div>
    )
}

export default Dialogs;