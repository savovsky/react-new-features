import React, { useState, useEffect, useReducer } from 'react';
import Note from './Note';




const NoteApp = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addNote = (e) => {
    e.preventDefault();
    setNotes([
      ...notes,
      { title, body }
    ]);
    setTitle('');
    setBody('');
  };

  const removeNote = (title) => {
    setNotes(notes.filter((note) => note.title !== title));
  };

  useEffect(() => {
    const notesData = JSON.parse(localStorage.getItem('notes'));

    if (notesData) {
        setNotes(notesData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <div>
      <h3>Notes</h3>
      {notes.map((note) => (
        <Note key={note.title} note={note} removeNote={removeNote} />
      ))}
      <p>Add Note</p>
      <form onSubmit={addNote}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button>Add Note</button>
      </form>
    </div>
  );
};

export default NoteApp;