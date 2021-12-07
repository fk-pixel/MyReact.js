import React, { useState } from 'react'
import styled from 'styled-components';
import DatePicker, {registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {de} from "date-fns/locale";
import {
    Form,
    Button,
    Modal,
} from "react-bootstrap";
function ShowNote(props) {
    
    registerLocale('de', de)

    const [timepicker, setTimepicker] = useState(false);
    const [checked, setChecked] = useState(false);
    const [show, setShow] = useState(false);
    const [startDate, setStartDate] = useState(new Date());

    function setAlarm() {
        if(setStartDate != null) {
            if (startDate >= setStartDate) {
                //console.log(setStartDate)
                alert("Time done!");
              }    
        }
    }
    
    function handleDelete() {
        props.onDelete(props.id);
    }

    const handleCheckbox = () => {
        setChecked(!checked)
    }

    const handleClose = () => {
        setShow(false);
    }

    const handleShow = () => {
        setShow(true);
    }

    return (
        <Note>
            <div className="d-flex item justify-space-between">
                <div className={`d-flex item`}>
                    <Form.Group className={`${timepicker ? 'left-border' : ''}`} controlId="formBasicCheckbox">
                        <Form.Check 
                                onChange={handleCheckbox}
                                checked={checked}
                                type="checkbox" 
                        />
                    </Form.Group>
                    <p className={`ml-2 title ${checked ? 'line' : ''}`}>{props.title.length > 70 ? props.title.substr(0, 70) + "..." : props.title}</p>
                </div>    
                <div className="d-flex">
                    <i className="fas fa-info-circle icon ml-8" id="info" onClick={handleShow}></i>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title style={{width: "fitContent(20em)"}}>{props.title}<br />
                                    <span style={{ fontSize: "0.7em", color: theme.dark }}> @ {props.createdDate}</span></Modal.Title>
                            </Modal.Header>
                            <Modal.Body style={{width: "fitContent(20em)"}}>
                                {props.content}
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Schliessen
                                </Button>
                                <Button variant="warning" onClick={setAlarm}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-alarm mr-2" viewBox="0 0 16 16">
                                        <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                                        <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                                    </svg>
                                    Errinnern
                                </Button>
                                <DatePicker 
                                    selected={startDate} 
                                    onChange={(date) => setStartDate(date)}
                                    showTimeSelect 
                                    dateFormat="MM/dd/yyyy hh:mm a"
                                    locale="de" 
                                />
                            </Modal.Footer>
                        </Modal>
                   <i className="fas fa-trash-alt icon ml-2" id="delete" onClick={handleDelete}></i>
                </div>
            </div>
            
        </Note>
    );
}


const Note = styled.div`
margin: 0;
background-color: #fff;
border-bottom: 0.2px solid ${theme.gray};
padding-top: 1rem;
width: 100%;
.title {
    font-size:1.1rem;
}
.icon {
    border: none;
    cursor: pointer;
    outline: none;
    margin-top: 0.4rem;
}
#info:hover {
    color:"info"
}
#delete:hover {
    color:"danger"
}
.item{
    width: 100%;
    .left-border {
        border-left: 3px solid warning;
    }
    .line {
        text-decoration: line-through;
    }
}
.content {
    font-size: 0.8e;
    margin-bottom: 10px;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
`

export default ShowNote
