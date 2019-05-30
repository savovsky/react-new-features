import React from 'react';
import { Button } from '@material-ui/core';

const NoteContext = ({ note, removeNote }) => {

  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <Button
        variant="contained"
        color="primary"
        onClick={() => removeNote(note.title)}
      >Delete
      </Button>
    </div>
  );
};

export default NoteContext;
