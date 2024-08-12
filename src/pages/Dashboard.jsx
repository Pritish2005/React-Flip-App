import React, { useEffect, useState } from 'react';
import CardFlip from '../components/CardFlip.jsx';
import InputForm from '../components/InputForm.jsx';
import { CardProvider } from '../Context/CardContext.jsx';
import CardItem from '../components/CardItem.jsx';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [cards, setCards] = useState(() => {
    const storedCards = localStorage.getItem('cards');
    return storedCards ? JSON.parse(storedCards) : [];
  });
  const [isAdmin, setIsAdmin] = useState(() => {
    return JSON.parse(localStorage.getItem('isAdmin')) || false;
  });

  const addCard = (card) => {
    setCards((prev) => [{ id: Date.now(), ...card }, ...prev]);
  };

  const deleteCard = (id) => {
    setCards((prev) => prev.filter((card) => card.id !== id));
  };

  const updateCard = (updatedCard, id) => {
    setCards((prev) =>
      prev.map((prevCard) => (prevCard.id === id ? updatedCard : prevCard))
    );
  };

  const toggleAdmin = () => {
    setIsAdmin((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards));
  }, [cards]);

  useEffect(() => {
    localStorage.setItem('isAdmin', JSON.stringify(isAdmin));
  }, [isAdmin]);


  return (
    <CardProvider
      value={{ cards, addCard, updateCard, deleteCard, toggleAdmin, isAdmin }}
    >
        <Link className=' absolute top-0 bg-slate-700 rounded-md m-5 p-1 hover:bg-slate-500' to='/'>Back</Link>
      <div className="min-h-screen bg-slate-900 py-10">
        <div className="bg-slate-700 max-w-2xl w-full mx-auto p-3 flex justify-center rounded-lg text-white flex-col items-center mb-3">
          <h1 className="text-3xl font-bold my-4">Manage Your Cards</h1>
          <InputForm />
        </div>
        <div className="flex flex-wrap gap-y-1 bg-slate-800 w-1/2 mx-auto rounded-lg">
          {cards.map((card) => (
            <div key={card.id} className="w-full flex p-1">
              <CardItem card={card} />
            </div>
          ))}
        </div>
      </div>
    </CardProvider>
  );
}

export default Dashboard;
