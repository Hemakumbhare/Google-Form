import React from 'react'
import "./Formheader.css"
import {Button, IconButton} from "@material-ui/core";
import formImage from "../Images/forms_2020q4_48dp.png";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import VisibilityIcon from '@material-ui/icons/Visibility';
import SettingsIcon from '@material-ui/icons/Settings';
import { Avatar } from '@material-ui/core';
import MoreVertIcon from "@material-ui/icons/MoreVert"
import avatarImage from '../Images/unnamed.jpg';
import TemporaryDrawer from './TemporaryDrawer';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider'
import AlertDialog from './Alert';

function Formheader() {
    const history = useHistory();
  const [{doc_name}, dispatch] = useStateValue();


    function navigates(){
        history.push("/response")
    }

    return (
        <div className="form_header">
            <div className="form_header_left">
            <img src={formImage} style={{height:'40px',width:'40px'}} alt="form-image"/>
            <input type="text" placeholder="Untitled form" className="form_name" value={doc_name} ></input>
                <FolderOpenIcon className="form_header_icon" style={{marginRight:"10px"}}></FolderOpenIcon>
                <StarBorderIcon className="form_header_icon" style={{marginRight:"10px"}}/>
                <span style={{fontSize:"12px", fontWeight:"600"}}>All Chnages Saved in Drive </span>
            </div>
            <div className="form_header_right">
                <IconButton>
                    <ColorLensIcon size="small" className="form_header_icon"/>
                </IconButton>

                <IconButton onClick={navigates} target="blank">
                    <VisibilityIcon  className="form_header_icon"/>
                </IconButton>

                <IconButton  target="blank">
                    <SettingsIcon  className="form_header_icon"/>
                </IconButton>
                <AlertDialog />
                {/* <Button variant="contained" color="primary" href="#contained-button">Send</Button> */}

                <IconButton>
                    <MoreVertIcon  className="form_header_icon"/>
                </IconButton>

                <IconButton>
                    <Avatar style={{height:"30px",width:"30px"}} src={avatarImage}/>
                </IconButton>
            </div>
        </div>
    )
}

export default Formheader
