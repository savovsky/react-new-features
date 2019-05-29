import React from 'react';
import { TextField } from '@material-ui/core';


const Field = () => {
  return (
    <TextField
      id="outlined-name"
      label="Name"
      // value={values.name}
      // onChange={handleChange('name')}
      margin="normal"
      variant="outlined"
    />
  );
};

export default Field;
