import React, { Component } from 'react';
import { Paper, Typography, Box } from '@material-ui/core';

class ResourceList extends Component {

  render() {
    return (
      <Paper>
        <Box  p={1} m={1}>
          <Typography variant="body1" color="primary">Item</Typography>
        </Box>
      </Paper>
    );
  }
}

export default ResourceList;
