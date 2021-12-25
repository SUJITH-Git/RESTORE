import React, { useEffect } from 'react';
import { useState } from 'react';
import { Product } from '../models/Product';
import '../../App.css'
import Catalog from '../../features/catalog/Catalog';
import { Container, CssBaseline} from '@mui/material';
import Header from './Header';




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
      <CssBaseline></CssBaseline>
      <Header></Header>
      <Container>
      <Catalog Products={Products} addProduct={addProduct}></Catalog> 
      </Container>
    </div>
  );
}

export default App;
