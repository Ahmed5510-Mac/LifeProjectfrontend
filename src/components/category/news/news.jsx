

import Grid from "@mui/material/Grid";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {  CircularProgress, Container } from "@mui/material";

import { getProducts } from "../../../store/product/productSlice";
import CategoryCard from "../../CategoryCard/CategoryCard";
import OfferCard from "../../offersCard/offersCard";


const News = () => {

  const { products,isLoading } = useSelector((state) => state.products);

  const dispach = useDispatch();

  useEffect(() => {
    dispach(getProducts());
  }, [dispach]);


  const result =products&&products.find( ( {category} ) => category.name==="news" )
  return (
    <>
       {isLoading ?
    <div height="400px" style={{ display: 'flex',justifyContent: "center",alignItems: "center",margin:"auto"}}>
  <CircularProgress /> </div>
  : 
  <>
     <CategoryCard image={result.category.image}  />
      <Container >
        <Grid container  spacing={5}>
      {products &&
      products.filter((product)=>{
        console.log(product);
          return product.category.name==="news"
      })
       .map((product, index) => {
           return(
            <Grid
            item
            lg={3}
            md={4}
            sm={6}
            xs={6}
            key={index}
            my={1}
          >
            <OfferCard
              productId={product._id}
              productName={product.productName}
              maxNumOfProducts={product.quantity}
              numOfProductsThatReduced={2}
              priceBefore={product.price}
              image={product.image}
              discountPersentatge={product.discount.discountAmount}
              ratingValue={product.rating}
              description={product.description}
            />
          </Grid>
        )})}
         </Grid>
       
      </Container>
      </>
}
    </>
  );
};
export default News;
