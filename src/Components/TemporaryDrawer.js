import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton, ListItemText } from "@material-ui/core";
import Drawer from '@material-ui/core/Drawer';
import { ListItem, List } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import docsImage from "../Images/01.png"
import formImage from "../Images/forms.png"
import sheetimage from "../Images/sheet.png"
import slidesImage from "../Images/slides.png"
import driveImage from "../Images/drive.jpg"
import googleImage from "../Images/google.png"
import { Divider } from '@material-ui/core';
import "./Drawer.css"

const useStyles = makeStyles({
    listItem: {
        marginLeft: "20px", fontSize: "14px", fontWeight: "500", color: "gray"
    },
    slidesImage: {
        height: "20px", width: "20px"
    }
})

function TemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false
    })

    const toggleDrawer = (anchor, open) => (event) => {
        setState({ ...state, [anchor]: open });
    }

    // const list = (anchor) =>{
    //     <div>
    //         <List>
    //             <ListItem>
    //                 Sidebar
    //             </ListItem>
    //         </List>
    //     </div>
    // }
    return (
        <div>
            <React.Fragment>
                <IconButton onClick={toggleDrawer("left", true)}>
                    <MenuIcon />
                </IconButton>
                <Drawer open={state['left']} onClose={toggleDrawer("left", false)} anchor={"left"}>
                    <List style={{ width: "250px" }} role="presentation">

                        <ListItem>
                            <ListItemText style={{ fontSize: "48px", marginLeft: "5px" }}>
                                <img src={googleImage} style={{ width: "70px" }} />
                                <span style={{ color: "#5f6368", fontWeight: "500", fontSize: "22px", fontFamily: "'Product Sans',Arial,sans-serif" }}>Docs</span>
                            </ListItemText>
                        </ListItem>

                    </List>
                    <Divider />
                    <List style={{ marginLeft: "08px", marginRight: "8px", marginTop: "15px" }}>
                        <ListItem className="list_item">
                            <img src={docsImage} className={classes.slidesImage} />
                            <div className={classes.listItem}>Docs</div>
                        </ListItem>

                        <ListItem className="list_item">
                            <img src={sheetimage} className={classes.slidesImage} />
                            <div className={classes.listItem}>Sheets</div>
                        </ListItem>

                        <ListItem className="list_item">
                            <img src={slidesImage} className={classes.slidesImage} />
                            <div className={classes.listItem}>Slides</div>
                        </ListItem>

                        <ListItem className="list_item">
                            <img src={formImage} className={classes.slidesImage} />
                            <div className={classes.listItem}>Forms</div>
                        </ListItem>

                        
                    </List>
                    <Divider/>
                    <List style={{ marginLeft: "08px", marginRight: "8px", marginTop: "15px" }}>
                        <ListItem className="list_item">
                            <SettingsIcon/>
                            <div style={{marginLeft: "20px", fontSize: "14px"}}>Settings</div>
                        </ListItem>
                        <ListItem className="list_item">
                            <HelpOutlineIcon/>
                            <div style={{marginLeft: "20px", fontSize: "14px"}}>Help & Feedback</div>
                        </ListItem>
                    </List>
                    <Divider/>
                    <List style={{ marginLeft: "08px", marginRight: "8px", marginTop: "15px" }}>
                        <ListItem className="list_item">
                            <img src={driveImage} className={classes.slidesImage} />
                            <div className={classes.listItem}>Drive</div>
                        </ListItem>
                        </List>
                </Drawer>
            </React.Fragment>
        </div>
    )
}

export default TemporaryDrawer
