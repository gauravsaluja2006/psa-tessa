import { useEffect, useState } from 'react';
import Tesseract from 'tesseract.js';

type iProps = {
  selectedImage: string;
};

const TextRecognition = (props: iProps) => {
  const { selectedImage } = props;
  const [recognizedText, setRecognizedText] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const recognizeText = async () => {
      if (selectedImage) {
        setLoading(true);
        const result = await Tesseract.recognize(selectedImage);
        setRecognizedText(result.data.text);
        setLoading(false);
      }
    };
    recognizeText();
  }, [selectedImage]);

  return (
    <div>
      {loading && <div>Processing ...</div>}
      {!loading && <>
        <h2>Recognized Text: </h2>
        <p> {recognizedText} </p>
      </>}
    </div>
  );
};
export default TextRecognition;