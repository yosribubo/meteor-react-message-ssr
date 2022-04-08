
import { Meteor } from 'meteor/meteor';
import React, { Fragment } from 'react'
import { browserHistory } from 'react-router';
import { useTracker } from 'meteor/react-meteor-data';
import { messageCollection } from '/imports/api/messageCollection'
import { Message } from './message';
import { MessageInForm } from './mesageInForm';
import { Link, Redirect, Router } from 'react-router-dom';

const MessageList = (props) => {
    const messages = useTracker(
        () => messageCollection.find({}, { sort: {createdAt: -1} }).fetch()
    );

    this.props = props;

    const counts = messages.length;
    const logged = false;

    Meteor.call('userLoggedIn', (err, res) => {
        this.logged = res;
        if (!res) this.props.history.push("/");
    });

    const handleLogout = (e) => {
        e.preventDefault();
        Meteor.logout(() =>{
            this.props.history.push('/');
       });
    }


    return (
        <div className='main'>
            <div className='container'>
                <div className='header logout'>
                    <Link onClick={handleLogout}>LogOut</Link>
                </div>
                <div className="banner">
                    <h1>Welcome to Meteor & React</h1>
                    <p>You can send message and show message list</p>
                </div>
                <MessageInForm />
                <div>
                    Total Messages: {counts}
                </div>
                <hr />
                { counts === 0 ? (
                    <div>
                        No message
                    </div>
                ) : (
                    <div>
                        { messages.map( 
                            message => <Message key={ message._id } message={ message } />
                        ) }
                    </div>
                )
                }
                
            </div>
        </div>
    );
}

export default MessageList
