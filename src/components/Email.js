import React from 'react'

const Email = () => {
    const receiverEmail = 'recipient@example.com'; // Replace with the actual email address

const handleEmailButtonClick = () => {
  window.location.href = `mailto:${receiverEmail}`;
};

  return (
    <div>
      
return (
  <div>
    <button onClick={handleEmailButtonClick}>Send Email</button>
  </div>

    </div>
  )
}

export default Email
