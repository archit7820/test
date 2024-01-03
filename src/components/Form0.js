import React, { useState } from 'react';
import axios from 'axios';

const Form0 = () => {
  const [formData, setFormData] = useState({  storeName: '', selectCity: '' , selectState : '' , postalCode : '' ,  storeAddress : '' });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the GraphQL endpoint
       const response = await axios.post('https://3.80.79.162:8082/graphql', {
        query: `
        mutation RegisterStore($storeName: String!, $selectCity: String! ,$selectState:  String! , $postalCode :  String! ,  $storeAddress :  String! ) {
          registerStore(storeName: $storeName, selectCity: $selectCity ,selectState : $selectState, postalCode :$postalCode,  storeAddress : $storeAddress)
        }
        `,
        variables: {
          storeName: formData.storeName,
          selectCity : formData.selectCity ,
          selectState : formData.selectState , 
	postalCode : formData.postalCode , 
	storeAddress : formData.storeAddress , 
        },
      });

      // Handle the response data
      console.log(response.data);
    //  console.log(response.data.data.registerStore);  // print 58 or id 

      const value = response.data.data.registerStore
    console.log(value) ;
     

      // Reset the form after successful submission
      setFormData({ storeName : '' , selectCity : '' , selectState : '' , postalCode : '' ,  storeAddress : '' });
    } catch (error) {
      // Handle errors
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label>storeName:</label>
        <input
          type="text"
          value={formData.storeName}
          onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
        />
           <label>postalCode:</label>
        <input
          type="text"
          value={formData.postalCode}
          onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
        />
           <label>selectState:</label>
        <input
          type="text"
          value={formData.selectState}
          onChange={(e) => setFormData({ ...formData, selectState: e.target.value })}
        />

<label>selectCity:</label>
        <input
          type="text"
          value={formData.selectCity}
          onChange={(e) => setFormData({ ...formData, selectCity: e.target.value })}
        />

<label>storeAddress :</label>
        <input
          type="text"
          value={formData.storeAddress }
          onChange={(e) => setFormData({ ...formData, storeAddress : e.target.value })}
        /> 
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form0 ;