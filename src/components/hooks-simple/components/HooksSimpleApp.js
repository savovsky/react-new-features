import React, { useState }  from 'react';
import ResourceList from './ResourceList';
import { Button } from '@material-ui/core';

const HooksSimpleApp = () => {
  const [resource, setResource] = useState('posts');

  return (
    <>
      <Button
        variant="outlined"
        size="small"
        color="primary"
        onClick={() => setResource('posts')}
      >Posts
      </Button>
      <Button
        variant="outlined"
        size="small"
        color="primary"
        onClick={() => setResource('todos')}
      >Todos
      </Button>
      <ResourceList />
      {resource}
    </>
  );
}

export default HooksSimpleApp;
