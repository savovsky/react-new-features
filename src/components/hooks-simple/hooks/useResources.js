import { useState, useEffect } from 'react';
import Axios from 'axios';


const useResources = (resource) => {
  const [items, setItems] = useState([]);

  // var. 1
  // useEffect(() => {
  //   Axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
  //     .then(
  //       (res) => {
  //         console.log(res);
  //         setItems(res.data);
  //       }
  //     )
  //     .catch(
  //       (err) => {
  //         console.log("Eho", err);
  //       }
  //     )
  // }, [resource]);


  // var. 2
  const fetchResorce = async (resource) => {
    const response = await Axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
      setItems(response.data);
    };
    useEffect(() => {
      fetchResorce(resource);
    }, [resource]);


  // var. 3
  // useEffect(() => {
  //   (async (resource) => {
  //     const response = await Axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
  //     setItems(response.data);
  //   })(resource);
  // }, [resource]);

  return items;
};

export default useResources;
