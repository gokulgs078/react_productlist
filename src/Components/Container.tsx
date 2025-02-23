import React from 'react'
import ReactDOM from 'react-dom/client'
import Carousel from './Carousel.tsx'
import ProductList from './ProductList.tsx';
import Header from './Header.tsx';


const Container: React.FC = () => {
  return (
    <div className="p-4">
      <Header/>
      <Carousel />
      <ProductList/>
    </div>
  );
};

export default Container;