import React, { useEffect, useState } from 'react';
import CardFlip from '../components/CardFlip';
import { Link } from 'react-router-dom';

const Home = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const storedCards = localStorage.getItem('cards');
    if (storedCards) {
      setCards(JSON.parse(storedCards));
    }
  }, []);

  return (
    <div className="flex flex-col gap-10 bg-slate-800 min-h-screen text-white items-center">
        <Link className='absolute top-0 right-0 bg-slate-700 rounded-md m-5 p-1 hover:bg-slate-500' to='./dashboard'>Admin</Link>
      <div className="mt-14 text-center">
        <h1 className="font-bold text-3xl m-2 text-green-500">Flash Cards!!!</h1>
        <p>Accelarate your learning and revise like a champ with Flash Cards</p>
        <p>Think of the answer in your mind and flip to see if you're right!!</p>
      </div>
      <div className="flex gap-5">
        {cards.length > 0 ? (
          cards.map((item) => (
            <CardFlip key={item.id} item={item} />
          ))
        ) : (
          <p>No cards available</p>
        )}
      </div>
    </div>
  );
};

export default Home;
