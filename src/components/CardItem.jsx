import React, { useState } from 'react';
import { useCardContext } from '../Context/CardContext';
import CardFlip from './CardFlip';
import CardFlipMini from './CardFlipMini';

function CardItem({ card }) {
  const [ifEditable, setIfEditable] = useState(false);
  const [cardData, setCardData] = useState({
    frontTitle: card.frontTitle,
    frontText: card.frontText,
    frontImage: card.frontImage,
    backTitle: card.backTitle,
    backText: card.backText,
    backImage: card.backImage,
  });

  const { updateCard, deleteCard } = useCardContext();

  const editCard = () => {
    updateCard({ ...card, ...cardData }, card.id);
    setIfEditable(false);
  };

  return (
    <div className="w-full flex items-center justify-between px-8 mx-auto text-white">
      <div className="w-1/6 p-1">
        {/* Miniature version of the card */}
        <CardFlipMini item={card} />
      </div>
      <div className="">
        {ifEditable ? (
          <>
            <input
              type="text"
              className="p-1 mb-2 w-full text-black"
              value={cardData.frontTitle}
              onChange={(e) => setCardData({ ...cardData, frontTitle: e.target.value })}
              placeholder="Front Title"
            />
            <input
              type="text"
              className="p-1 mb-2 w-full text-black"
              value={cardData.frontText}
              onChange={(e) => setCardData({ ...cardData, frontText: e.target.value })}
              placeholder="Front Text"
            />
            <input
              type="text"
              className="p-1 mb-2 w-full text-black"
              value={cardData.frontImage}
              onChange={(e) => setCardData({ ...cardData, frontImage: e.target.value })}
              placeholder="Front Image URL"
            />
            <input
              type="text"
              className="p-1 mb-2 w-full text-black"
              value={cardData.backTitle}
              onChange={(e) => setCardData({ ...cardData, backTitle: e.target.value })}
              placeholder="Back Title"
            />
            <input
              type="text"
              className="p-1 mb-2 w-full text-black"
              value={cardData.backText}
              onChange={(e) => setCardData({ ...cardData, backText: e.target.value })}
              placeholder="Back Text"
            />
            <input
              type="text"
              className="p-1 mb-2 w-full text-black"
              value={cardData.backImage}
              onChange={(e) => setCardData({ ...cardData, backImage: e.target.value })}
              placeholder="Back Image URL"
            />
          </>
        ) : (
          <div className="text-left">
            <p><strong>Front Title:</strong> {card.frontTitle}</p>
            <p><strong>Front Text:</strong> {card.frontText}</p>
            <p><strong>Back Title:</strong> {card.backTitle}</p>
            <p><strong>Back Text:</strong> {card.backText}</p>
          </div>
        )}
      </div>
      <button
        className="bg-blue-700 hover:bg-blue-600 rounded-md w-10 p-1 ml-2"
        onClick={() => {
          if (ifEditable) {
            editCard();
          } else {
            setIfEditable((prev) => !prev);
          }
        }}
      >
        {ifEditable ? "Set" : "Edit"}
      </button>
      <button
        className="bg-red-700 hover:bg-red-600 rounded-md p-1 ml-2"
        onClick={() => deleteCard(card.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default CardItem;
