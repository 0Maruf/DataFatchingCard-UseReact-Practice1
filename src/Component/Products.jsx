import { useEffect, useState } from 'react';
import Product from './Product';

const Products = ({handleCardUpdate}) => {
  const [products, setProducts] = useState([]);
 
  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='grid grid-cols-3 gap-5 justify-items-center'>
      {products.map((product) => (
        <Product 
          key={product.id} 
          handleCardUpdate={handleCardUpdate}  
          products={product} 
        />
      ))}
    </div>
  );
};

export default Products;