import React from 'react';
import { Button, Typography } from '@material-ui/core';


const Language = (props) => {
  return (
    <div>
      <Typography component="span">Select Language</Typography>
        <Button
          size="small"
          variant="contained"
          onClick={() => props.onLangChange('BG')}
        >BG
        </Button>
        <Button
          size="small"
          variant="contained"
          onClick={() => props.onLangChange('EN')}
        >EN
        </Button>
    </div>
  );
};
  
export default Language;
