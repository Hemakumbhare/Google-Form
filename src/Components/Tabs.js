import React from 'react'
import {makeStyles} from "@material-ui/core/styles"
import Paper from "@material-ui/core/paper"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import { useHistory } from 'react-router';


const useStyles = makeStyles({
    root:{
        flexGrow:1
    },
    tab:{
        fontSize:12,
        color:"#5f6368",
        TextTransForm:"Capitalize",
        height:10,
        fontWeight:"600",
        fontFamily:'Google Sans,Roboto,Arial,sans-serif',
    },
    tabs:{
        height:10
    }
})

function CenteredTab() {
    const history = useHistory();
    const response = ()=>{
        history.push("/form")
    }
    const classes = useStyles()
    return (
       <Paper className={classes.root}>
           <Tabs    className={classes.tabs}
                 textColor="primary"
                indicatorColor="primary"

                 centered>
               <Tab className={classes.tab} label="Questions">

               </Tab>
               <Tab className={classes.tab} label="Responses" onClick={response}>

               </Tab>
           </Tabs>
       </Paper>
    )
}

export default CenteredTab
