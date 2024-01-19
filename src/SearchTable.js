import React, { useState, useEffect, useCallback } from 'react';
import InputField from './InputField';
import Table from './Table';
import Form from 'react-bootstrap/Form';
const SearchTable = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const jsonData = await response.json();
      setData(jsonData);
      setFilteredData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, []);
  if (!data) {
    return <div>Loading....</div>;
  }
  /*-------------------------------------*/
  /* only search on id, name, email */
  const handleSearch = useCallback(
    (value) => {
      //setSearchTerm(value);
      const filtered = data.filter((item) => {
        const { id, name, email } = item;
        return (
          name.toLowerCase().includes(value.toLowerCase()) ||
          id.toString().includes(value.toLowerCase()) ||
          email.toLowerCase().includes(value.toLowerCase())
        );
      });
      setFilteredData(filtered);
    },
    [data]
  );
  /*-------------------------------------*/
  /* filter on any field except nested */
  // const handleSearch = (value) => {
  //   setSearchTerm(value);
  //   const filtered = data.filter((item) => {
  //     return Object.values(item).some(
  //       (field) =>
  //         typeof field === 'string' &&
  //         field.toLowerCase().includes(value.toLowerCase())
  //     );
  //   });
  //   setFilteredData(filtered);
  // };
  /*-------------------------------------*/
  /* filter on nested keys as well */
  /*Nested */
  // const searchNested = (obj, query) => {
  //   for (const key in obj) {
  //     if (typeof obj[key] === 'object') {
  //       const found = searchNested(obj[key], query);
  //       if (found) return true;
  //     } else if (
  //       typeof obj[key] === 'string' &&
  //       obj[key].toLowerCase().includes(query)
  //     ) {
  //       return true;
  //     }
  //   }
  //   return false;
  // };
  // const handleSearch = (value) => {
  //   setSearchTerm(value);
  //   const filtered = data.filter((item) =>
  //     searchNested(item, value.toLowerCase())
  //   );
  //   setFilteredData(filtered);
  // };

  /*-------------------------------------*/
  return (
    <>
      <Form>
        <Form.Group className="mb-3">
          <InputField handleSearch={handleSearch} id="inputField" />
        </Form.Group>
      </Form>
      {filteredData == '' && <h2>No Data Found !</h2>}
      {filteredData != '' && <Table data={filteredData} />}
    </>
  );
};

export default SearchTable;
