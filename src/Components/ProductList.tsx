import React from 'react';
import Card from './Card.tsx';

const ProductList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-10 p-10">
      <Card />
    </div>
  );
};

export default ProductList;
