import React, { useState } from 'react';
import TextRecognition from './TextRecognition';

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState<string>();
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.files) {
      const image = event.target.files[0];
      setSelectedImage(URL.createObjectURL(image));
    }
  };
  
  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {selectedImage && <img src={selectedImage} alt="Selected" />}
      {selectedImage && <TextRecognition selectedImage={selectedImage} />}
    </div>
  );
};
export default ImageUploader;