import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';

const Note = ({ note, removeNote }) => {
  useEffect(() => {
    console.log('Setting up effect!');

    return () => {
      console.log('Cleaning up effect!');
    }
  }, []);

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

export default Note;