import { Product } from "../../app/models/Product";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Avatar, Button, CardActionArea, List,ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import Igua from '../../Static/images/image1.jpeg';
import ProductList from "./ProductList";


interface Props{
    Products : Product[];
    addProduct : () => void;
}
export default function Catalog({Products,addProduct}:Props){
    return(
     <> 
      <ProductList Products={Products}></ProductList>
      <Button variant='contained' onClick={addProduct}>AddProduct</Button>
     </>
    )
}