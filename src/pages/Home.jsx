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
        <Link to='./dashboard'>Admin</Link>
      <div className="mt-14">
        <h1 className="font-bold text-3xl">Heading</h1>
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
