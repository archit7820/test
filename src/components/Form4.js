import React, { useState } from 'react';
import axios from 'axios';

const Form4 = () => {
  const [formData9, setFormData9] = useState({
    input1: { value1: '', value2: '' },
    input2: { value1: '', value2: '' },
    input3: { value1: '', value2: '' },
    input4: { value1: '', value2: '' },
    input5: { value1: '', value2: '' },
    input6: { value1: '', value2: '' },
    input7: { value1: '', value2: '' },
  });

  const handleInputChange = (inputKey, inputNumber, value) => {
    setFormData9((prevData) => ({
      ...prevData,
      [inputKey]: {
        ...prevData[inputKey],
        [`value${inputNumber}`]: value,
      },
    }));
  };

  const processForm = () => {
    // Create a list of key-value pairs
    const storeTiming = Object.entries(formData9).map(([key, values]) => ({
      key,
      value: `${values.value1} ${values.value2}`,
    }));
    const storeTimings = storeTiming.map(pair => `${pair.key}: ${pair.value}`).join(', ');
    // Log or use the list as needed
    console.log(storeTimings);
    return storeTimings;
  };

  const [formData8, setFormData8] = useState({
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
          id: parseInt(formData8.id), // Assuming id is a Long on the backend
          storeTimings: processedFormData,
        },
      });
      setFormData9({
        input1: { value1: '', value2: '' },
        input2: { value1: '', value2: '' },
        input3: { value1: '', value2: '' },
        input4: { value1: '', value2: '' },
        input5: { value1: '', value2: '' },
        input6: { value1: '', value2: '' },
        input7: { value1: '', value2: '' },
      });
      // Handle the response data
      console.log(response.data);

      // Reset the form after successful submission
      setFormData8({
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
      {/* Repeat the following block for each input */}
      <label htmlFor="input1">Input 1 - Value 1:</label>
      <input
        type="text"
        id="input1Value1"
        name="input1"
        value={formData9.input1.value1}
        onChange={(e) => handleInputChange('input1', 1, e.target.value)}
      />
      <label htmlFor="input1">Close : :</label>
      <input
        type="text"
        id="input1Value2"
        name="input1"
        value={formData9.input1.value2}
        onChange={(e) => handleInputChange('input1', 2, e.target.value)}
      />
      <br />
      <label htmlFor="input1">Input 2 - Value 1:</label>
      <input
        type="text"
        id="input2Value1"
        name="input2"
        value={formData9.input2.value1}
        onChange={(e) => handleInputChange('input2', 1, e.target.value)}
      />
      <label htmlFor="input1"> Close : :</label>
      <input
        type="text"
        id="input2Value2"
        name="input2"
        value={formData9.input2.value2}
        onChange={(e) => handleInputChange('input2', 2, e.target.value)}
      />
      <br />
      <label htmlFor="input1">Wednesday- Open</label>
      <input
        type="text"
        id="input3Value1"
        name="input3"
        value={formData9.input3.value1}
        onChange={(e) => handleInputChange('input3', 1, e.target.value)}
      />
      <label htmlFor="input1"> Close :</label>
      <input
        type="text"
        id="input3Value2"
        name="input3"
        value={formData9.input3.value2}
        onChange={(e) => handleInputChange('input3', 2, e.target.value)}
      />
      <br />
      <label htmlFor="input4">Thursday - Open</label>
      <input
        type="text"
        id="input4Value1"
        name="input4"
        value={formData9.input4.value1}
        onChange={(e) => handleInputChange('input4', 1, e.target.value)}
      />
      <label htmlFor="input4">Close:</label>
      <input
        type="text"
        id="input4Value2"
        name="input4"
        value={formData9.input4.value2}
        onChange={(e) => handleInputChange('input4', 2, e.target.value)}
      />
      <br />
      <label htmlFor="input5">Friday - Open</label>
      <input
        type="text"
        id="input5Value1"
        name="input5"
        value={formData9.input5.value1}
        onChange={(e) => handleInputChange('input5', 1, e.target.value)}
      />
      <label htmlFor="input5">Close :</label>
      <input
        type="text"
        id="input5Value2"
        name="input5"
        value={formData9.input5.value2}
        onChange={(e) => handleInputChange('input5', 2, e.target.value)}
      />
      <br />
      <label htmlFor="input1">Saturday- Open:</label>
      <input
        type="text"
        id="input6Value1"
        name="input6"
        value={formData9.input6.value1}
        onChange={(e) => handleInputChange('input6', 1, e.target.value)}
      />
      <label htmlFor="input6">Close :</label>
      <input
        type="text"
        id="input6Value2"
        name="input6"
        value={formData9.input6.value2}
        onChange={(e) => handleInputChange('input6', 2, e.target.value)}
      />
      <br />
    
      <label htmlFor="input1">Sunday - Open:</label>
      <input
        type="text"
        id="input7Value1"
        name="input7"
        value={formData9.input7.value1}
        onChange={(e) => handleInputChange('input7', 1, e.target.value)}
      />
      <label htmlFor="input7">Close : </label>
      <input
        type="text"
        id="input7Value2"
        name="input7"
        value={formData9.input7.value2}
        onChange={(e) => handleInputChange('input7', 2, e.target.value)}
      />
      <br />
      
      {/* Repeat the above block for each input */}
      {/* ... (similar structure for the other inputs) */}

      




      

      <div>
      <form onSubmit={handleSubmit}>
      
        <label>id :</label>
        <input
          type="text"
          value={formData8.id}
          onChange={(e) => setFormData8({ ...formData8, id: e.target.value })}
        />

        <button type="submit"onClick={processForm}>Submit9</button>



      </form>
    </div>
  

    </div>

 




    
  );
};
export default Form4
