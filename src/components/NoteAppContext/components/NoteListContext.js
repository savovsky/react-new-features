import React from 'react';
import NoteContext from './NoteContext';

const NoteListContext = ({notes, removeNote}) => {

  return notes.map((note) => (
    <NoteContext key={note.title} note={note} removeNote={removeNote} />
  ));
};

export default NoteListContext;
