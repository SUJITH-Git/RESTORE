import { Product } from "../../app/models/Product";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Avatar, Button, CardActionArea, List,ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import Igua from '../../Static/images/image1.jpeg';
import ProductList from "./ProductList";
import { useEffect, useState } from "react";


export default function Catalog(){

    const [Products,setProducts]=useState<Product[]>([]);
    useEffect(()=>{
      fetch('http://localhost:5000/api/products')
      .then(response=>response.json())
      .then(data=>setProducts(data))
    },[])
    return(
     <> 
      <ProductList Products={Products}></ProductList>  
     </>
    )
}