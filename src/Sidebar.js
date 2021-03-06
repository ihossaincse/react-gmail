import { Button, IconButton } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AddIcon from '@material-ui/icons/Add';
import DuoIcon from '@material-ui/icons/Duo';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InboxIcon from '@material-ui/icons/Inbox';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';
import React from 'react';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mail/mailSlice';
import "./Sidebar.css";
import SidebarOption from './SidebarOption';

const Sidebar = () => {
    const dispatch = useDispatch();

    return (
        <div className="sidebar">
            <Button onClick={() => dispatch(openSendMessage())} startIcon={<AddIcon />} className="sidebar__compose">Compose</Button>
            <SidebarOption Icon={<InboxIcon />} title="Inbox" number="54" selected />
            <SidebarOption Icon={<AccessTimeIcon />} title="Snozzed" number="54" />
            <SidebarOption Icon={<LabelImportantIcon />} title="Important" number="54" />
            <SidebarOption Icon={<NearMeIcon />} title="Sent" number="54" />
            <SidebarOption Icon={<NoteIcon />} title="Drafts" number="54" />
            <SidebarOption Icon={<ExpandMoreIcon />} title="More" number="54" />

            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                    <IconButton>
                        <DuoIcon />
                    </IconButton>
                    <IconButton>
                        <PhoneIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
