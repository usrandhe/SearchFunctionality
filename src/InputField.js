import React from 'react';

import Form from 'react-bootstrap/Form';

const InputField = ({ handleSearch }) => {
  return (
    <>
      <Form.Label htmlFor="inputSearch">
        Search
      </Form.Label>
      <Form.Control
        type="search"
        id="inputSearch"
        aria-describedby="passwordHelpBlock"
        placeholder="Search ID, Name, Email ..."
        onChange={(e) => handleSearch(e.target.value)}
      />
    </>
  );

  
};
export default InputField;
