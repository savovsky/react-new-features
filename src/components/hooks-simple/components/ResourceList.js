import React from 'react';
import { Paper, Typography, Box } from '@material-ui/core';
import useResources from '../hooks/useResources';


const ResourceList = ({resource}) => {
  const items = useResources(resource);

  return (
    <Paper>
      <Box p={1} m={1}>
        {items.slice(0, 10).map((item) => (
            <Typography variant="body1" color="primary" key={item.id}>
              {item.title}
            </Typography>
          )
        )}
      </Box>
    </Paper>
  );
};

export default ResourceList;
