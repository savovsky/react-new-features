import React, { useContext } from 'react';
import NoteContext from './Note';
import Context from '../context/notes-context';

const NoteListContext = () => {
  const { notes } = useContext(Context);

  return notes.map((note) => (
    <NoteContext key={note.title} note={note} />
  ));
};

export default NoteListContext;
