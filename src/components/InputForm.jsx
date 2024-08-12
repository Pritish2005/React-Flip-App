import React, { useState } from 'react';
import { useCardContext } from '../Context/CardContext';

const InputForm = () => {
  const { addCard, updateCard } = useCardContext();
  const [cardData, setCardData] = useState({
    frontTitle: '',
    frontText: '',
    frontImage: '',
    backTitle: '',
    backText: '',
    backImage: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardData({ ...cardData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cardData.id) {
      updateCard(cardData, cardData.id);
    } else {
      addCard(cardData);
    }
    setCardData({
      frontTitle: '',
      frontText: '',
      frontImage: '',
      backTitle: '',
      backText: '',
      backImage: '',
    });
  };

  return (
    <form className="text-black grid grid-cols-3 gap-4 p-4" onSubmit={handleSubmit}>
      <input
        className="p-2 border rounded-md"
        name="frontTitle"
        value={cardData.frontTitle}
        onChange={handleChange}
        placeholder="Front Title"
      />
      <input
        className="p-2 border rounded-md"
        name="frontText"
        value={cardData.frontText}
        onChange={handleChange}
        placeholder="Front Text"
      />
      <input
        className="p-2 border rounded-md"
        name="frontImage"
        value={cardData.frontImage}
        onChange={handleChange}
        placeholder="Front Image URL"
      />
      <input
        className="p-2 border rounded-md"
        name="backTitle"
        value={cardData.backTitle}
        onChange={handleChange}
        placeholder="Back Title"
      />
      <input
        className="p-2 border rounded-md"
        name="backText"
        value={cardData.backText}
        onChange={handleChange}
        placeholder="Back Text"
      />
      <input
        className="p-2 border rounded-md"
        name="backImage"
        value={cardData.backImage}
        onChange={handleChange}
        placeholder="Back Image URL"
      />
      <button
        className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        type="submit"
      >
        Save Card
      </button>
    </form>
  );
};

export default InputForm;
