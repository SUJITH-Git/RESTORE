
import { Grid, List } from "@mui/material";
import { Product } from "../../app/models/Product";
import ProductCard from './ProductCard';


interface Props{
    Products : Product[];
}
export default  function ProductList({Products}:Props){
  
    return(
      <>
       <Grid container spacing={4}>
        {Products.map((product)=>(
            <Grid item xs={4} key={product.id}>
               <ProductCard  product={product}></ProductCard>
            </Grid>
        ))}
      </Grid>
      </>  
    )
}