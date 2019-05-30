import React, { Component } from 'react';
import { Button, Typography } from '@material-ui/core';

import LangContext from '../../contexts/LangContext'


class Language extends Component {
  static contextType = LangContext;

  render() {
    return (
      <div>
        <Typography component="span">Select Language</Typography>
          <Button
            size="small"
            variant="contained"
            onClick={() => this.context.onLanguageChange('BG')}
          >BG
          </Button>
          <Button
            size="small"
            variant="contained"
            onClick={() => this.context.onLanguageChange('EN')}
          >EN
          </Button>
      </div>
    );
  }
};
  
export default Language;
