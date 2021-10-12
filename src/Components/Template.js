import React from 'react'
import MoreVertIcon from "@material-ui/icons/MoreVert"
import { IconButton } from "@material-ui/core"
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore'
import "./Template.css";
import Blank from "../Images/forms-blank.png"
import EventFeedback from "../Images/form01.png"
import OrderForm from "../Images/form02.png"
import uuid from "react-uuid";
import { useHistory } from 'react-router';
import axios from "axios";

function Template() {
    const history = useHistory();
    const createForm = ()=>{
        const create_form_id= uuid();
        history.push("/form/"+create_form_id)

        var questions_list=[{questionText: "Question", questionType:"radio", options : [{optionText: "Option 1"}], open: true, required:false}]
    
        axios.post(`http://localhost:9000/add_questions/${create_form_id}`,{
            "document_name": "untitled_form",
            "doc_desc": "Add Description",
            "questions": questions_list,
        })
    }
    return (
        <div className="template_section">
            <div className="template_top">
                <div className="template_left">
                    <span style={{ fontSize: "16px", color: "#202124" }}>Start a new form</span>
                </div>
                <div className="template_right">
                    <div className="gallary_button">
                        Template Gallary
                        <UnfoldMoreIcon fontSize="small" />
                    </div>
                    <IconButton>
                        <MoreVertIcon fontSize="small" />
                    </IconButton>
                </div>
            </div>
            <div className="template_body">
                <div className="card" onClick={createForm}>
                    <img src={Blank} alt="Blank-image" className="card_image" />
                    <p className="card_title">Blank</p>
                </div>
                {/* <div className="card">
                    <img src={EventFeedback} alt="Event Feedbak-image" className="card_image" />
                    <p className="card_title">Event Feedback</p>

                </div>
                <div className="card">
                    <img src={OrderForm} alt="Order-form-image" className="card_image" />
                    <p className="card_title">Order Form</p>

                </div> */}
            </div>
        </div>
    )
}

export default Template
