import { CircularProgress } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/product/productSlice";
import OfferCard from "../offersCard/offersCard";

const ProductCard = () => {
  const { products,isLoading } = useSelector((state) => state.products);

  const dispach = useDispatch();
  useEffect(() => {
    dispach(getProducts());
    
  }, [dispach]);

  return (
    <>
     {isLoading ?
    <div height="400px" style={{ display: 'flex',justifyContent: "center",alignItems: "center",margin:"auto"}}>
  <CircularProgress />  loading...</div>
  : 
  <>
      {products &&
        products.map((product, index) => (
          <Grid
            item
            lg={3}
            md={4}
            sm={6}
            xs={6}
            key={index}
            
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
        ))}
        </>
}
    </>
  );
};
export default ProductCard;
