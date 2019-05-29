import React, { useState } from 'react';
import { Paper } from '@material-ui/core';

import Language from './Language';
import UserCreate from './UserCreate';

import LangContext from '../../contexts/LangContext'


const User = () => {
  const [lang, setLang] = useState();

  const onLangChange = (lang) => {
    setLang(lang);
  }

  return (
    <Paper>
      <Language onLangChange={onLangChange}/>
      <LangContext.Provider value={lang}>
        <UserCreate />
      </LangContext.Provider>
    </Paper>
  );
};

export default User;
