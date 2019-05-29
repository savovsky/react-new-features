import React from 'react';
import { Button, Typography } from '@material-ui/core';


const Language = () => {
  return (
    <div>
      <Typography component="span">Select Language</Typography>
      <Button size="small" variant="contained">BG</Button>
      <Button size="small" variant="contained">EN</Button>
    </div>
  );
}
  
export default Language;
