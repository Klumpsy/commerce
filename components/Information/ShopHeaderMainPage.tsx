import React from 'react';
import { MdCrisisAlert } from 'react-icons/md';

const ShopHeaderMainPage: React.FC = () => {
  return (
    <div className="mx-auto mb-4 w-full max-w-screen-2xl rounded">
      <div className="w-full rounded bg-black px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto ml-0 flex max-w-screen-xl pl-0">
          <MdCrisisAlert color="#F9A8D4" size={'2rem'} />
          <h2 className="ml-2 text-3xl font-bold text-pink-300">Nieuw in de shop</h2>
        </div>
      </div>
    </div>
  );
};

export default ShopHeaderMainPage;
