import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import Context from '../context/notes-context';

const NoteContext = ({ note }) => {
  const { notesDispatch } = useContext(Context);

  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <Button
        variant="contained"
        color="primary"
        onClick={() => notesDispatch({ type: 'REMOVE_NOTE', title: note.title })}
      >Delete
      </Button>
    </div>
  );
};

export default NoteContext;
