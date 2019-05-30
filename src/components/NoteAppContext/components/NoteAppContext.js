import React, { useEffect, useReducer } from 'react';
import notesReducer from '../reducers/notesReducer'
import NoteListContext from './NoteListContext';
import AddNoteFormContext from './AddNoteFormContext';


const NoteAppContext = () => {
  const [notes, notesDispatch] = useReducer(notesReducer, []);

  const removeNote = (title) => {
    notesDispatch({ type: 'REMOVE_NOTE', title })
  };

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes'));

    if (notes) {
      notesDispatch({ type: 'POPULATE_NOTES', notes })
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <div>
      <h3>Notes</h3>
      <NoteListContext notes={notes} removeNote={removeNote} />
      <AddNoteFormContext notesDispatch={notesDispatch} />
    </div>
  );
};

export default NoteAppContext;
