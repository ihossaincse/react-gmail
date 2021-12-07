import { Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import firebase from 'firebase/compat/app';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mail/mailSlice';
import { db } from "./firebase";
import "./SendMail.css";

const SendMail = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        db.collection("emails").add(
            {
                to: data.to,
                subject: data.subject,
                message: data.message,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            }
        )
        reset({});
    }

    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <CloseIcon onClick={() => dispatch(closeSendMessage())} className="sendMail__close" />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="To" type="text" {...register('to', { required: true })} />
                {errors.to && <p className="sendMail__error">Required</p>}
                <input placeholder="Subject" type="text" {...register('subject', { required: true })} />
                {errors.subject && <p className="sendMail__error">Required</p>}
                <input placeholder="Message" type="text" className="sendMail__message" {...register('message', { required: true })} />
                {errors.message && <p className="sendMail__error">Required</p>}
                <div className="sendMail__options">
                    <Button className="sendMail__send"  varient="contained" color="primary" type="submit">Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
