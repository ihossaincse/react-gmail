import { Checkbox, IconButton } from '@material-ui/core';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectMail } from './features/mail/mailSlice';
import "./MailRow.css";

const MailRow = ({ title, subject, description, time }) => {
    const history = useNavigate();
    const dispatch = useDispatch();

    const openMail = () => {
        dispatch(
            selectMail({
                title, subject, description, time
            })
        );
        history("/mail");
    }

    return (
        <div onClick={() => openMail()} className="mailRow">
            <div className="mailRow__options">
                <Checkbox />
                <IconButton>
                    <StarBorderIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantIcon />
                </IconButton>   
            </div>
            <h3 className="mailRow__title">
                {title}
            </h3>
            <div className="mailRow__message">
                <h4>{subject} <span className="mailRow__description">{description}</span></h4>
            </div>
            <p className="mailRow__time">{time}</p>
        </div>
    )
}

export default MailRow
