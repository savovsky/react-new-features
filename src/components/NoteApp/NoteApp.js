import React, { useState, useEffect, useReducer } from 'react';
import Note from './Note';


const notesReducer = (state, action) => {
  switch (action.type) {
    case 'POPULATE_NOTES':
      return action.notes;
    case 'ADD_NOTE':
      return [
        ...state,
        { title: action.title, body: action.body }
      ];
    case 'REMOVE_NOTE':
      return state.filter((note) => note.title !== action.title);

    default:
      return state;

  }
};

const NoteApp = () => {
  // const [notes, setNotes] = useState([]);
  // const [state, dispatch] = useReducer(notesReducer, []);
  const [notes, notesDispatch] = useReducer(notesReducer, []);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addNote = (e) => {
    e.preventDefault();
    notesDispatch({ type: 'ADD_NOTE', title, body })
    // setNotes([
    //   ...notes,
    //   { title, body }
    // ]);
    setTitle('');
    setBody('');
  };

  const removeNote = (title) => {
    notesDispatch({ type: 'REMOVE_NOTE', title })
    // setNotes(notes.filter((note) => note.title !== title));
  };

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes'));

    if (notes) {
      notesDispatch({ type: 'POPULATE_NOTES', notes })
        // setNotes(notes);
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