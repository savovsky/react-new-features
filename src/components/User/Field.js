import React from 'react';
import { TextField } from '@material-ui/core';

import LangContext from '../../contexts/LangContext'


const Field = () => {
  return (
    <TextField
      id="outlined-name"
      label={
        <LangContext.Consumer>
          {/* {(value) => value.language === 'EN' ? 'Name' : 'Име'} */}
          {({language}) => language === 'EN' ? 'Name' : 'Име'}
        </LangContext.Consumer>
      }
      // value={values.name}
      // onChange={handleChange('name')}
      margin="normal"
      variant="outlined"
    />
  );
};

export default Field;
