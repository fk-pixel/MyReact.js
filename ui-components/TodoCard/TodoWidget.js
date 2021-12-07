import React, { useState } from 'react';
import CreateNote from './CreateNote';
import ShowNote from './ShowNote';
import { Card } from "react-bootstrap";

export function TodoWidget() {

    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes((prevNotes) => {
            return [...prevNotes, newNote]
        });
    }
    function deleteNote(id) {
        setNotes((prevNotes) => {
            return prevNotes.filter((item, index) => {
                return index !== id;
            });
        });
    }

    return (
       
            <Card className="mt-8">
                <Card.Body>
                    <Card.Title>Aufgabenliste</Card.Title>
                    <CreateNote onAdd={addNote} />
                    {notes.map((note, index) => (
                        <ShowNote
                            key={index}
                            id={index}
                            title={note.title}
                            content={note.content}
                            completed={note.completed}
                            createdDate={note.createdDate}                            
                            onDelete={deleteNote}
                        />
                    ))}

                </Card.Body>
            </Card>
      
    )
}

