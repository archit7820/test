import React, { useState } from 'react';

import axios from 'axios';
const Form = () => {
  const [formData2 , setFormData2] = useState({
    id: '',
    storeTimings : '', 
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the GraphQL endpoint
      const response = await axios.post('http://44.201.217.140:8082/graphql', {
        query: `
          mutation StoreTiming(
            $id: Long!,
            $storeTimings: String!,

          ) {
            storeTiming(
              id: $id,
              storeTimings : $storeTimings,
           
            )
          }
        `,
        variables: {
            id: parseInt(formData2.id), // Assuming id is a Long on the backend
            storeTimings: formData2.storeTimings,
          },
        });
  
    

      // Handle the response data
      console.log(response.data);

      // Reset the form after successful submission
      setFormData2({
        id: '',
       
        storeTimings : '',
       
      });
    } catch (error) {
      // Handle errors
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>storeTimings:</label>
        <input
          type="text"
          value={formData2.storeTimings}
          onChange={(e) => setFormData2({ ...formData2, storeTimings: e.target.value })}
        />
        <label>id :</label>
        <input
          type="text"
          value={formData2.id}
          onChange={(e) => setFormData2({ ...formData2, id: e.target.value })}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
