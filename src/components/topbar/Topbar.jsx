import React from 'react';
import "./topbar.css";
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">lamaadmin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src="https://i.pinimg.com/originals/eb/bb/9c/ebbb9c6067fd1f30c0c1b5261833e051.jpg  " alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}

export default Topbar
