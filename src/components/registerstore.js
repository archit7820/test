{/*}
import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [formData, setFormData] = useState({  storeName: '', selectCity: '' , selectState : '' , postalCode : '' ,  storeAddress : '' });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the GraphQL endpoint
      const response = await axios.post('http://44.201.217.140:8082/graphql', {
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

export default Form;

{*/}






   {/*}original


import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the GraphQL endpoint
      const response = await axios.post('http://localhost:4000/graphql', {
        query: `
          mutation AddFormData($name: String!, $email: String!) {
            addForm(name: $name, email: $email)
          }
        `,
        variables: {
          name: formData.name,
          email: formData.email,
        },
      });

      // Handle the response data
      console.log(response.data);

      // Reset the form after successful submission
      setFormData({ name: '', email: '' });
    } catch (error) {
      // Handle errors
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />

        <label>Email:</label>
        <input
          type="text"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;


{*/}





{/*}   second form 
 import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [formData1, setFormData1] = useState({
    id: '',
    storeType: [],
    averageOrderValue: '', // Assuming averageOrderValue is a Long on the backend
    customerDemographics: [], // Assuming customerDemographics is a List<String> on the backend
    paymentReconciliation: '',
    prefferedProduct: [], // Assuming prefferedProduct is a List<String> on the backend
    shopCategory: [], // Assuming shopCategory is a List<String> on the backend
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the GraphQL endpoint
      const response = await axios.post('http://44.201.217.140:8082/graphql', {
        query: `
          mutation storeBusinessInformation(
            $id: Long!,
            $storeType: [String]!,
            $averageOrderValue: Long!,
            $customerDemographics: [String]!,
            $paymentReconciliation: String!,
            $prefferedProduct: [String]!,
            $shopCategory: [String]!
          ) {
            storeBusinessInformation(
              id: $id,
              storeType: $storeType,
              averageOrderValue: $averageOrderValue,
              customerDemographics: $customerDemographics,
              paymentReconciliation: $paymentReconciliation,
              prefferedProduct: $prefferedProduct,
              shopCategory: $shopCategory
            )
          }
        `,
        variables: {
          id: parseInt(formData1.id), // Assuming id is a Long on the backend
          storeType: formData1.storeType,
          averageOrderValue: parseInt(formData1.averageOrderValue), // Convert to Long
          customerDemographics: formData1.customerDemographics,
          paymentReconciliation: formData1.paymentReconciliation,
          prefferedProduct: formData1.prefferedProduct,
          shopCategory: formData1.shopCategory,
        },
      });

      // Handle the response data
      console.log(response.data);

      // Reset the form after successful submission
      setFormData1({
        id: '',
        storeType: [],
        averageOrderValue: '',
        customerDemographics: [],
        paymentReconciliation: '',
        prefferedProduct: [],
        shopCategory: [],
      });
    } catch (error) {
      // Handle errors
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>storeType:</label>
        <input
          type="text"
          value={formData1.storeType}
          onChange={(e) => setFormData1({ ...formData1, storeType: e.target.value })}
        />

        <label>paymentReconciliation:</label>
        <input
          type="text"
          value={formData1.paymentReconciliation}
          onChange={(e) => setFormData1({ ...formData1, paymentReconciliation: e.target.value })}
        />

        <label>customerDemographics:</label>
        <input
          type="text"
          value={formData1.customerDemographics}
          onChange={(e) => setFormData1({ ...formData1, customerDemographics: e.target.value })}
        />

        <label>averageOrderValue:</label>
        <input
          type="number"
          value={formData1.averageOrderValue}
          onChange={(e) => setFormData1({ ...formData1, averageOrderValue: e.target.value })}
        />

        <label>prefferedProduct :</label>
        <input
          type="text"
          value={formData1.prefferedProduct}
          onChange={(e) => setFormData1({ ...formData1, prefferedProduct: e.target.value })}
        />

        <label>shopCategory :</label>
        <input
          type="text"
          value={formData1.shopCategory}
          onChange={(e) => setFormData1({ ...formData1, shopCategory: e.target.value })}
        />

        <label>id :</label>
        <input
          type="text"
          value={formData1.id}
          onChange={(e) => setFormData1({ ...formData1, id: e.target.value })}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;

{*/}




// timing 


{/*}
import React, { useState } from 'react';
import axios from 'axios';

const Form4 = () => {
  const [formData, setFormData] = useState({
    input1: { value1: '', value2: '' },
    input2: { value1: '', value2: '' },
    input3: { value1: '', value2: '' },
    input4: { value1: '', value2: '' },
    input5: { value1: '', value2: '' },
    input6: { value1: '', value2: '' },
    input7: { value1: '', value2: '' },
  });

  const handleInputChange = (inputKey, inputNumber, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [inputKey]: {
        ...prevData[inputKey],
        [`value${inputNumber}`]: value,
      },
    }));
  };

  const processForm = () => {
    // Create a list of key-value pairs
    const storeTiming = Object.entries(formData).map(([key, values]) => ({
      key,
      value: `${values.value1} ${values.value2}`,
    }));
    const storeTimings = storeTiming.map(pair => `${pair.key}: ${pair.value}`).join(', ');
    // Log or use the list as needed
    console.log(storeTimings);
    return storeTimings;
  };

  const [formData2, setFormData2] = useState({
    id: '',
    storeTimings: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Get the processed form data
      const processedFormData = processForm();

      // Make a POST request to the GraphQL endpoint
      const response = await axios.post('http://54.167.245.210:8082/graphql', {
        query: `
          mutation storeTiming(
            $id: Long!,
            $storeTimings: String!,
          ) {
            storeTiming(
              id: $id,
              storeTimings: $storeTimings,
            )
          }
        `,
        variables: {
          id: parseInt(formData2.id), // Assuming id is a Long on the backend
          storeTimings: processedFormData,
        },
      });

      // Handle the response data
      console.log(response.data);

      // Reset the form after successful submission
      setFormData2({
        id: '',
        storeTimings: '',
      });
    } catch (error) {
      // Handle errors
      console.error(error);
    }
  };

  return (
    <div>
    
      <label htmlFor="input1">Input 1 - Value 1:</label>
      <input
        type="text"
        id="input1Value1"
        name="input1"
        value={formData.input1.value1}
        onChange={(e) => handleInputChange('input1', 1, e.target.value)}
      />
      <label htmlFor="input1">Close : :</label>
      <input
        type="text"
        id="input1Value2"
        name="input1"
        value={formData.input1.value2}
        onChange={(e) => handleInputChange('input1', 2, e.target.value)}
      />
      <br />
      <label htmlFor="input1">Input 2 - Value 1:</label>
      <input
        type="text"
        id="input2Value1"
        name="input2"
        value={formData.input2.value1}
        onChange={(e) => handleInputChange('input2', 1, e.target.value)}
      />
      <label htmlFor="input1"> Close : :</label>
      <input
        type="text"
        id="input2Value2"
        name="input2"
        value={formData.input2.value2}
        onChange={(e) => handleInputChange('input2', 2, e.target.value)}
      />
      <br />
      <label htmlFor="input1">Wednesday- Open</label>
      <input
        type="text"
        id="input3Value1"
        name="input3"
        value={formData.input3.value1}
        onChange={(e) => handleInputChange('input3', 1, e.target.value)}
      />
      <label htmlFor="input1"> Close :</label>
      <input
        type="text"
        id="input3Value2"
        name="input3"
        value={formData.input3.value2}
        onChange={(e) => handleInputChange('input3', 2, e.target.value)}
      />
      <br />
      <label htmlFor="input4">Thursday - Open</label>
      <input
        type="text"
        id="input4Value1"
        name="input4"
        value={formData.input4.value1}
        onChange={(e) => handleInputChange('input4', 1, e.target.value)}
      />
      <label htmlFor="input4">Close:</label>
      <input
        type="text"
        id="input4Value2"
        name="input4"
        value={formData.input4.value2}
        onChange={(e) => handleInputChange('input4', 2, e.target.value)}
      />
      <br />
      <label htmlFor="input5">Friday - Open</label>
      <input
        type="text"
        id="input5Value1"
        name="input5"
        value={formData.input5.value1}
        onChange={(e) => handleInputChange('input5', 1, e.target.value)}
      />
      <label htmlFor="input5">Close :</label>
      <input
        type="text"
        id="input5Value2"
        name="input5"
        value={formData.input5.value2}
        onChange={(e) => handleInputChange('input5', 2, e.target.value)}
      />
      <br />
      <label htmlFor="input1">Saturday- Open:</label>
      <input
        type="text"
        id="input6Value1"
        name="input6"
        value={formData.input6.value1}
        onChange={(e) => handleInputChange('input6', 1, e.target.value)}
      />
      <label htmlFor="input6">Close :</label>
      <input
        type="text"
        id="input6Value2"
        name="input6"
        value={formData.input6.value2}
        onChange={(e) => handleInputChange('input6', 2, e.target.value)}
      />
      <br />
    
      <label htmlFor="input1">Sunday - Open:</label>
      <input
        type="text"
        id="input7Value1"
        name="input7"
        value={formData.input7.value1}
        onChange={(e) => handleInputChange('input7', 1, e.target.value)}
      />
      <label htmlFor="input7">Close : </label>
      <input
        type="text"
        id="input7Value2"
        name="input7"
        value={formData.input7.value2}
        onChange={(e) => handleInputChange('input7', 2, e.target.value)}
      />
      <br />
      
  
      




      

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

        <button type="submit"onClick={processForm}>Submit</button>



      </form>
    </div>
  

    </div>

 




    
  );
};
export default Form4
{*/}