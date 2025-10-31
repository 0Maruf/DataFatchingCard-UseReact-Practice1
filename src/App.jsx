
import { useState } from 'react'
import './App.css'
import Products from './Component/Products'
import ProductCard from './Component/ProductCard'

function App() {
  const [card, setcard] = useState([])


  const handleCardUpdate = (product) => {
    setcard(prev => [...prev, product])

  }
  console.log(card);

  return (
   <div className="flex flex-col md:flex-row">

  <div className="w-full md:w-[70%]">
    <Products handleCardUpdate={handleCardUpdate} />
  </div>


  <div className="w-full md:w-[30%]">
    <ProductCard card={card} />
  </div>
</div>

  )
}

export default App
