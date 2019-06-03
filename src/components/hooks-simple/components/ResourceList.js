import React, { useState, useEffect } from 'react';
import { Paper, Typography, Box } from '@material-ui/core';
import Axios from 'axios';

const ResourceList = ({resource}) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    Axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
      .then(
        (res) => {
          console.log(res);
          setItems(res.data);
        }
      )
      .catch(
        (err) => {
          console.log("Eho", err);
        }
      )
  }, [resource]);

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
}

export default ResourceList;
