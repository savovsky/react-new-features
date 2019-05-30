import React, { useState } from 'react';

const AddNoteFormContext = ({ notesDispatch }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addNote = (e) => {
    e.preventDefault();
    notesDispatch({ type: 'ADD_NOTE', title, body })
    setTitle('');
    setBody('');
  };

  return (
    <div>
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
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddNoteFormContext;
