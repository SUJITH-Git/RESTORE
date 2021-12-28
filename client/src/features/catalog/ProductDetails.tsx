import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { idText } from "typescript";
import { Product } from "../../app/models/Product";

export default function ProductDetails(){
    const {id}=useParams<{id:string}>();
    const [Product,SetProduct]=useState<Product | null>(null);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        axios.get(`http://localhost:5000/api/Products/${id}`)
             .then(response=>SetProduct(response.data))
             .catch(error=>console.log(error))
             .finally(()=>setLoading(false))

    },[id])
    if(loading)return<h3>Loading......</h3>
    if(!Product)return <h3>Product Not Found!</h3>
    return(
         <Grid container spacing={6}>
               <Grid item xs={6}>
                   <img src={Product.pictureUrl} alt={Product.name} style={{width:'100%'}}></img>
               </Grid>
               <Grid item xs={6}>
                    <Typography variant='h3'>{Product.name}</Typography>
                    <Divider sx={{mb:2}}></Divider>
                    <Typography variant='h4' color='secondary'>${(Product.price/100).toFixed(2)}</Typography>
                    <TableContainer>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>{Product.name}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Description</TableCell>
                                    <TableCell>{Product.name}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Type</TableCell>
                                    <TableCell>{Product.type}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Brand</TableCell>
                                    <TableCell>{Product.brand}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Quandity</TableCell>
                                    <TableCell>{Product.quandityInStock}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
               </Grid>
         </Grid>
    );
}