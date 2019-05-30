import React, { Component } from 'react';
import { Box, Button } from '@material-ui/core';
import LangContext from '../../contexts/LangContext'


class SubmitBtn extends Component {
  static contextType = LangContext;

  btnText = (lang) => {
    return lang === 'EN' ? 'Submit' : 'Потвърди';
  }

  render() {
    return (
      <Box component="div">
        <Button
          variant="contained"
          color="primary"
        >{this.btnText(this.context.language)}
        </Button>
      </Box>
    );
  }
}
  
export default SubmitBtn;
