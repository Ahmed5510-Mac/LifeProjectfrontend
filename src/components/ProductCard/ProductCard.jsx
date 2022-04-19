import { useState } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import img1 from "../../assets/brufen.jpg";
import styles from "./ProductCard.module.css";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/product/productSlice";
import { CardActionArea, Container } from "@mui/material";
import { useNavigate } from "react-router";
import OfferCard from "../offersCard/offersCard";
import SideBar from '../../components/sideBar/SideBar'
import { styled } from "@mui/material/styles"

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 12,
      
          },
        },
        {
          props: {
            variant: "body3",
          },
          style: {
            fontSize: 15,
          },
        },
      ],
    },
  },
});

const ProductCard = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { products } = useSelector((state) => state.products);
  const filteredCategoryProducts = useSelector((state)=>state.products.filteredCategoryProducts)
  const filteredPriceProducts = useSelector((state)=>state.products.filteredPriceProducts)

  let navigate = useNavigate();
  const dispach = useDispatch();
  const [value, setValue] = useState(2);
  useEffect(() => {
    dispach(getProducts());
  }, [dispach]);

  const handleSelect = (_id) => {
    const selectedProduct = products.find((item) => item._id === _id);
    setSelectedProduct((prev) => {
      return { ...prev, ...selectedProduct };
    });
    navigate(`/product/${selectedProduct._id}`, {
      state: { info: selectedProduct },
    });
  };

  const categoryCard = filteredCategoryProducts.length > 0 && filteredPriceProducts.length == 0  ? filteredCategoryProducts &&
  filteredCategoryProducts.map((item, index) => {
    return (
      <Grid key={index} item md={3} sm={12} xs={12}  >
          <OfferCard
            productId={item._id}
            productName={item.productName}
            maxNumOfProducts={item.quantity}
            numOfProductsThatReduced={2}
            priceBefore={item.price}
            image={item.image}
            discountPersentatge={item.discount.discountAmount}
            ratingValue={item.rating}
            description={item.description}
          />
      </Grid>
    );
  }):filteredCategoryProducts.length > 0 && filteredPriceProducts.length > 0 ? filteredPriceProducts&& 
  filteredPriceProducts.map((item, index) => {
    return (
      <Grid key={index} item  md={3} sm={12} xs={12}>
          <OfferCard
            productId={item._id}
            productName={item.productName}
            maxNumOfProducts={item.quantity}
            numOfProductsThatReduced={2}
            priceBefore={item.price}
            image={item.image}
            discountPersentatge={item.discount.discountAmount}
            ratingValue={item.rating}
            description={item.description}
          />
      </Grid>
    )
  }):products&&products.map((item, index) => {
    return (
      <Grid key={index} item  md={3} sm={12} xs={12}>
          <OfferCard
            productId={item._id}
            productName={item.productName}
            maxNumOfProducts={item.quantity}
            numOfProductsThatReduced={2}
            priceBefore={item.price}
            image={item.image}
            discountPersentatge={item.discount.discountAmount}
            ratingValue={item.rating}
            description={item.description}
          />
      </Grid>
    );
  })

  return (
<Container>
<Box  mt={9}>
      <Grid container spacing={1}>
        <Grid item  md={2} xs={3} style={{backgroundColor:"#ffffff4d",boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",borderRaduis:"15px",height:"60vh"}}>
          <SideBar array={products} filtred = {filteredCategoryProducts}/>
        </Grid>
        <Grid item container spacing={1} md={10} xs={9}>
        {categoryCard}
        </Grid>

      </Grid>
    </Box>
    </Container>
  );
};
export default ProductCard;
