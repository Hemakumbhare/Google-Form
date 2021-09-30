import React from 'react';
import "./Header.css";
import {IconButton} from "@material-ui/core";
import formImage from "../Images/forms_2020q4_48dp.png";
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from '@material-ui/core';
import avatarImage from '../Images/unnamed.jpg';
import TemporaryDrawer from './TemporaryDrawer';
function Header() {
    return (
        <div className="header">
            <div className="header_info">
                <TemporaryDrawer/>
                <img src={formImage} style={{height:'40px',width:'40px'}} alt="form-image"/>
                <div className="info">
                    Forms
                </div>
            </div>

            <div className="header_search">
                <IconButton>
                <SearchIcon/>
                </IconButton>
                <input type="text" name="search" placeholder="Search"/>
            </div>

            <div className="header_right">
                <IconButton>
                <AppsIcon/>
                </IconButton>
                <IconButton>
                    <Avatar src={avatarImage}/>
                </IconButton>
            </div>
        </div>
    )
}

export default Header
