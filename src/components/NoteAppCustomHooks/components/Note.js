import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import Context from '../context/notes-context';
import useMousePosition from '../hooks/useMousePosition';


const NoteContext = ({ note }) => {
  const { notesDispatch } = useContext(Context);

  const position = useMousePosition();

  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <p>{position.x}, {position.y}</p>
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
