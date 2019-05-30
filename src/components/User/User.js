import React from 'react';
import { Paper } from '@material-ui/core';

import Language from './Language';
import UserCreate from './UserCreate';

import { LanguageStore } from '../../contexts/LangContext'


const User = () => {
  return (
    <Paper>
      <LanguageStore>
        <Language />
        <UserCreate />
      </LanguageStore>
    </Paper>
  );
};

export default User;
