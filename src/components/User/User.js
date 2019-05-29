import React from 'react';
import { Paper } from '@material-ui/core';

import Language from './Language';
import UserCreate from './UserCreate';


const User = () => {
  return (
    <Paper>
      <Language />
      <UserCreate />
    </Paper>
  );
}

export default User;
