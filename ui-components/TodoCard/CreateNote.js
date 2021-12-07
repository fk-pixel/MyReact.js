import React, {useState} from 'react'
import { Form } from "react-bootstrap";
  
import moment from "moment";

export default function CreateNote(props) {
    
    const [ note, setNote ] = useState({
        title: "",
        content: "",
        completed: false,
        createdDate: moment().format('LLL') 
    });
    
    function handleChange(event) {
        const { name, value } = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }   
    
    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: "",
            completed: false,
            createdDate: moment().format('LLL') 
        });
        event.preventDefault();
    }
    
    return (
       
            <Form 
                style={{
                    width: "35rem",
                    margin: "0 auto 20px auto",
                    padding: "15px",
                    borderRadius: "7px",
                    boxShadow: "0 1px 5px rgb(138, 137, 137)",
                }}
            >
                <Form.Control
                    style={{
                        width: "100%",
                        border: "none",
                        padding: "4px",
                        outline: "none",
                        fontSize: "1.2e",
                        resize: "none",
                        fontWeight: "bold"
                    }}
                    name="title"
                    onChange={handleChange}
                    value={note.title}
                    placeholder={"Titel"}
                />
                <Form.Control
                    name="content"
                    style={{
                        width: "100%",
                        border: "none",
                        padding: "4px",
                        outline: "none",
                        fontSize: "1.2e",
                        resize: "none",
                    }}
                    onChange={handleChange}
                    value={note.content}
                    placeholder={"mache eine Notiz..."}
                    as="textarea"
                    rows="2"
                />
                <button 
                    style={{
                        position: "relative",
                        float: "right",
                        right: "0px",
                        bottom: "0px",
                        background: "primary",
                        color: "#fff",
                        border: "none",
                        borderRadius: "50%",
                        width: "36px",
                        height: "36px",
                        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
                        cursor: "pointer",
                        outline: "none",
                        
                    }} 
                    onClick={submitNote}
                >+
                </button>
            </Form>
        
    )
}



