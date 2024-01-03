import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [formData7, setFormData7] = useState({
    id: '',
    storeType: [],
    averageOrderValue: '', // Assuming averageOrderValue is a Long on the backend
    customerDemographics: [], // Assuming customerDemographics is a List<String> on the backend
    paymentReconciliation: '',
    prefferedProduct: [], // Assuming prefferedProduct is a List<String> on the backend
    shopCategory: [], // Assuming shopCategory is a List<String> on the backend
  });
  // 1--cutomer demographicss 2-- averageOrderValue 3-- payemet-recoincailation  4-- prefereeed product 



  const [selectedState, setSelectedState] = useState('');
	const [selectedCity, setSelectedCity] = useState('');
// List of states and cities (replace with your actual data)
	const states = ['State 1', 'State 2', 'State 3'];
	const cities = ['City 1', 'City 2', 'City 3'];
// Function to handle state selection
	const handleStateChange = (event) => {
	  setSelectedState(event.target.value); 
	};
	// Function to handle city selection
	const handleCityChange = (event) => {
	  setSelectedCity(event.target.value);
	};


  const [selectedstoreType, setSelectedstoreType] = useState('');
  const [selectedaverageOrderValue, setSelectedaverageOrderValue] = useState('');
  const [selectedcustomerDemographics, setSelectedcustomerDemographics] = useState('');
  const [selectedpaymentReconciliation, setSelectedpaymentReconciliation] = useState('');
  const [selectedprefferedProduct, setSelectedprefferedProduct] = useState('');
  const [selectedshopCategory, setSelectedshopCategory] = useState('');


  // List of states and cities (replace with your actual data)
  const storeType = ['Chain Store', 'Small Store', 'Brand Store' , 'Supermarket','Multi Brand','Boutique Store','Others'];
  const averageOrderValue = ['under £50', '£50 -£100', '£100-£200','£200-£500','over £500',];
  const customerDemographics = ['Baby products', 'Minor', '18-24' , '25-35','45-65','65+'];
  const paymentReconciliation = ['30', '60', '90+ days'];
  const prefferedProduct = ['Fresh Products', 'Packaged goods', 'Alcohol', "Men's clothing" , "Women's clothing" ,"Televisons",'Computers'] ;
  const shopCategory = ['FMCG', 'Fashion', '£100 - £200','Kids','DIY & Hardware' , 'Furniture & Interior' , 'Gardening' , 'Others'];



  const handleSubmit7 = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the GraphQL endpoint
      const response = await axios.post('http://54.167.245.210:8082/graphql', {
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
          id: parseInt(formData7.id), // Assuming id is a Long on the backend
          storeType: formData7.storeType,
          averageOrderValue: parseInt(formData7.averageOrderValue), // Convert to Long
          customerDemographics: formData7.customerDemographics,
          paymentReconciliation: formData7.paymentReconciliation,
          prefferedProduct: formData7.prefferedProduct,
          shopCategory: formData7.shopCategory,
        },
      });

      // Handle the response data
      console.log(response.data);

      // Reset the form after successful submission
      setFormData7({
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
      <form onSubmit={handleSubmit7}>
        <label>storeType:</label>
        <input
          type="text"
          value={formData7.storeType}
          onChange={(e) => setFormData7({ ...formData7, storeType: e.target.value })}
        />


        <label>paymentReconciliation:</label>
        <input
          type="text"
          value={formData7.paymentReconciliation}
          onChange={(e) => setFormData7({ ...formData7, paymentReconciliation: e.target.value })}
        />

        <label>customerDemographics:</label>
        <input
          type="text"
          value={formData7.customerDemographics}
          onChange={(e) => setFormData7({ ...formData7, customerDemographics: e.target.value })}
        />

        <label>averageOrderValue:</label>
        <input
          type="number"
          value={formData7.averageOrderValue}
          onChange={(e) => setFormData7({ ...formData7, averageOrderValue: e.target.value })}
        />

        <label>prefferedProduct :</label>
        <input
          type="text"
          value={formData7.prefferedProduct}
          onChange={(e) => setFormData7({ ...formData7, prefferedProduct: e.target.value })}
        />

        <label>shopCategory :</label>
        <input
          type="text"
          value={formData7.shopCategory}
          onChange={(e) => setFormData7({ ...formData7, shopCategory: e.target.value })}
        />

        <label>id :</label>
        <input
          type="text"
          value={formData7.id}
          onChange={(e) => setFormData7({ ...formData7, id: e.target.value })}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
