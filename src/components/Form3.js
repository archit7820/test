import React, { useState } from 'react';

const F3 = () => {
  const [images, setImages] = useState([]);

  const handleImageChange = (event) => {
    const selectedImages = event.target.files;

    // Use Promise.all to handle asynchronous file reading
    Promise.all(
      Array.from(selectedImages).map((image) => {
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            const byteCode = e.target.result;
            resolve(byteCode);
          };
          reader.readAsArrayBuffer(image);
        });
      })
    ).then((byteCodes) => {
      // Update state with the selected images and their byte codes
      setImages((prevImages) =>
        prevImages.concat(
          Array.from(selectedImages).map((image, index) => ({
            file: image,
            byteCode: byteCodes[index],
          }))
        )
      );
    });
  };

  const handleSubmit = () => {
    // Replace this with your actual logic to upload data
    images.forEach((image) => {
      // Perform upload logic for each image
      console.log('Uploading image:', image);
    });
  };

  const renderImages = () => {
    return images.map((image, index) => (
      <div key={index}>
        <img
          src={URL.createObjectURL(image.file)}
          alt={`Image ${index}`}
          style={{ maxWidth: '100px', maxHeight: '100px', margin: '5px' }}
        />
        <div>Byte Code: {image.byteCode}</div>
      </div>
    ));
  };

  return (
    <div>
      <input type="file" accept="image/*" multiple onChange={handleImageChange} />
      <button onClick={handleSubmit}>Submit</button>
      <div>
        {/* Render selected images */}
        {renderImages()}
      </div>
    </div>
  );
};


