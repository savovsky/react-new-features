import React, { useState }  from 'react';
import ResourceList from './ResourceList';
import { Button, Box } from '@material-ui/core';

const HooksSimpleApp = () => {
  const [resource, setResource] = useState('posts');
  const [active, setActive] = useState('posts');

  return (
    <>
      <Box mr={1} component='span'>
        <Button
          variant='contained'
          size="small"
          color={active === 'posts' ? 'primary' : null}
          onClick={
            () => {
              setResource('posts');
              setActive('posts');
            }
          }
        >Posts
        </Button>
      </Box>
      <Box component='span'>
        <Button
          variant='contained'
          size="small"
          color={active === 'todos' ? 'primary' : null}
          onClick={
            () => {
              setResource('todos');
              setActive('todos');
            }
          }
        >Todos
        </Button>
      </Box>
      <ResourceList resource={resource}/>
    </>
  );
}

export default HooksSimpleApp;
