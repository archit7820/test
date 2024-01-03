import React, { useState } from 'react';
import axios from 'axios';

const Form = (value) => {

  const [formData, setFormData] = useState({
    id: 'value' ,
    accountNumber: '',
    accountName: '', 
    sortCode: '',
  });
 
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the GraphQL endpoint
      const response = await axios.post('https://3.80.79.162:8082/graphql', {
        query: `
          mutation storeBankInformation(
            $id: Long!,
              
                   $accountNumber: String!,
                   $accountName: String!,
                   $sortCode: String!,
                 

         
          ) {
             bankInformation(
              id: $id,
              accountNumber: $accountNumber,
              accountName: $accountName,
              sortCode: $sortCode,
            
            )
          }
        `,
        variables: {
          id: parseInt(formData.value), // Assuming id is a Long on the backend
          accountName: formData.accountName,
          accountNumber: formData.accountNumber ,  // Convert to Long
          sortCode: formData.sortCode,
         
        },
      });

      // Handle the response data
      console.log(response.data);

      // Reset the form after successful submission
      setFormData({
        id: '',
        accountNumber: '',
        accountName: '', // Assuming averageOrderValue is a Long on the backend
        sortCode: '',
      
      });
    } catch (error) {
      // Handle errors
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label> accountNumber:</label>
        <input
          type="text"
          value={formData.accountNumber}
          onChange={(e) => setFormData({ ...formData, accountNumber: e.target.value })}
        />


        <label>accountName:</label>
        <input
          type="text"
          value={formData.accountName}
          onChange={(e) => setFormData({ ...formData, accountName: e.target.value })}
        />

        <label>sortCode:</label>
        <input
          type="text"
          value={formData.sortCode}
          onChange={(e) => setFormData({ ...formData, sortCode: e.target.value })}
        />

  

        <label>id :</label>
        <input
          type="text"
          value={formData.id1}
          onChange={(e) => setFormData({ ...formData, id: e.target.value })}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
