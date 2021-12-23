import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Product } from './Product';

function App() {
  const [Products,setProducts]=useState<Product[]>([]);
  useEffect(()=>{
    fetch('http://localhost:5000/api/products')
    .then(response=>response.json())
    .then(data=>setProducts(data))
  },[])
  function addProduct(){
    setProducts(prevState=>[...prevState,
      {
        id:prevState.length+101,
        name:'product' + (prevState.length+1),
        price:(prevState.length*100),
        brand:'Some_String',
        type:5,
        quandityInStock:2,
        pictureUrl:'http://picsum.photos/200'       
      }
  ])
  }
  return (
    <div className='App'>
      <h1>Restore</h1>
      <ul>
        {Products.map((product)=>(
          <li key={product.id}>{product.name}------{product.price}</li>
        ))}
      </ul>
      <button onClick={addProduct}>AddProduct</button>
    </div>
  );
}

export default App;
