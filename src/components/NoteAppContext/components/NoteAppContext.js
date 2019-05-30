import React, { useEffect, useReducer } from 'react';
import notesReducer from '../reducers/notesReducer'
import NoteListContext from './NoteListContext';
import AddNoteFormContext from './AddNoteFormContext';
import Context from '../context/notes-context';


const NoteAppContext = () => {
  const [notes, notesDispatch] = useReducer(notesReducer, []);

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
    <Context.Provider value={{ notes, notesDispatch }}>
      <h3>Notes</h3>
      <NoteListContext />
      <AddNoteFormContext />
    </Context.Provider>
  );
};

export default NoteAppContext;
