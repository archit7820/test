import React, { useState } from 'react';



  
const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [otherValue, setOtherValue] = useState('');

  const handleDropdownChange = (event) => {
    const selectedValue = event.target.value;

    if (selectedValue === 'other') {
      // If "Other" is selected, clear otherValue
      setOtherValue('');
    }

    setSelectedOption(selectedValue);
  };

  const handleOtherInputChange = (event) => {
    setOtherValue(event.target.value);
  };

  return (
    <div>
      <label htmlFor="dropdown">Select an option:</label>
      <select id="dropdown" value={selectedOption} onChange={handleDropdownChange}>
        <option value="">Select...</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="other">Other</option>
      </select>

      {selectedOption === 'other' && (
        <div>
          <label htmlFor="otherInput">Enter other option:</label>
          <input
            type="text"
            id="otherInput"
            value={otherValue}
            onChange={handleOtherInputChange}
          />
        </div>
      )}

      <p>Selected Option: {selectedOption}</p>
      {selectedOption === 'other' && <p>Other Value: {otherValue}</p>}
    </div>
  );
};

export default Dropdown;
