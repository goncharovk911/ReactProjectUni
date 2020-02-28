import React from 'react';
import classes from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem;';
import Message from './Message/Message';



const Dialogs = (props) => {

    

    let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} /> );
    
    let messageElements = props.state.messages.map(message => <Message message= {message.message} />)


    return (
        <div className={classes.dialogs}>
            <div className={classes.items}>
               {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;