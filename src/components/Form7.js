//self infromation 


import React, { useState } from 'react';
import axios from 'axios';

const Form7 = () => {
  const [formData, setformData] = useState({
    id: '',
    shelfType: '',
    shelfName: '', 
    shelfRent: '',
    shelfDescription : ''
   
  });
   
 
   
  
  


  const handleSubmit7 = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the GraphQL endpoint
      const response = await axios.post('http://54.167.245.210:8082/graphql', {
        query: `
          mutation storeShelfInformation(
            $id: Long!,
            $shelfType: String!,
            $shelfName: String!,
            $shelfRent: String!,
            $shelfDescription: String!,
         
          ) {
            storeShelfInformation(
              id: $id,
              shelfType: $shelfType,
              shelfRent : $shelfRent , 
              shelfName : $shelfName ,
              shelfDescription : $shelfDescription


            
            )
          }
        `,
        variables: {
          id: parseInt(formData.id), 
          shelfType: formData.shelfType,
          shelfRent: formData.shelfRent  , 
          shelfName: formData.shelfName ,
          shelfDescription: formData.shelfDescription ,
     
        },
      });

      // Handle the response data
      console.log(response.data);

      // Reset the form after successful submission
      setformData({
        id: '',
    shelfType: '',
    shelfName: '', 
    shelfRent: '',
    shelfDescription : ''
      });
    } catch (error) {
      // Handle errors
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit7}>
        <label>shelfType:</label>
        <input
          type="text"
          value={formData.shelfType}
          onChange={(e) => setformData({ ...formData, shelfType: e.target.value })}
        />


        <label>shelfName:</label>
        <input
          type="text"
          value={formData.shelfName}
          onChange={(e) => setformData({ ...formData, shelfName: e.target.value })}
        />

        <label>shelfRent</label>
        <input
          type="text"
          value={formData.shelfRent}
          onChange={(e) => setformData({ ...formData, shelfRent: e.target.value })}
        />

        <label>shelfDescription</label>
        <input
          type="text"
          value={formData.shelfDescription}
          onChange={(e) => setformData({ ...formData, shelfDescription: e.target.value })}
        />

       
         

        <label>id :</label>
        <input
          type="text"
          value={formData.id}
          onChange={(e) => setformData({ ...formData, id: e.target.value })}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form7 ;
