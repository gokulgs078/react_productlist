import React, { useEffect, useState } from 'react';

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}

const Card: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      {products.map((product) => (
        <div key={product.id} className="flex flex-col justify-between border rounded-lg p-4 shadow-md md:h-96">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-contain mb-4 rounded"
          />
          <div>
          <h2 className="text-lg font-semibold mb-2 truncate">{product.title}</h2>
          <p className="text-green-600 font-bold">${product.price.toFixed(2)}</p>
          </div>
          <button className="mt-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">Buy Now</button>
        </div>
      ))}
    </>
  );
};

export default Card;
