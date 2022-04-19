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
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router";
import OfferCard from "../offersCard/offersCard";
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


  const categoryCard =
  products &&
  products.map((item, index) => {
    return (
      <Grid key={index} item xs={6} md={3} sm={6}>
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
  });
  return (
    <Box sx={{ flexGrow: 1 }} my={"6%"}>
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 6, sm: 6, md: 12 }}
    >
      {categoryCard}
    </Grid>
  </Box>
  );
};
export default ProductCard;
