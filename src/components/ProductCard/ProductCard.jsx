import { useState } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import img1 from "../../assets/brufen.jpg";
import styles from "./ProductCard.module.css";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/product/productSlice";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router";
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

  return (
    <>
      {products &&
        products.map((product, index) => (
          <Grid item lg={3} md={4}sm={6} xs={6} key={index} className={styles.cardSadow} my={1}>
              <CardActionArea onClick={() => handleSelect(product._id)}>
                <ThemeProvider theme={theme}>
                  <Paper elvation={3} className={styles.show}>
                    <img src={img1} alt="" className={styles.img} />
                    <Box paddingX={1} sx={{ borderRadius: 1 }}>
                      <Typography variant="h5" component="h1">
                        {product.productName}
                      </Typography>
                      <Typography variant="subtitle1" component="p">
                        {product.description}
                      </Typography>
                      <Box>
                        <Typography variant="body3" component="p">
                          EGP:{product.price}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box
                          sx={{ display: "center", alignItems: "center" }}
                          marginTop={1}
                        >
                          <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                              setValue(newValue);
                            }}
                            size="small"
                          />
                      
                        </Box>
                      </Box>

                      <Box sx={{ textAlign: "center" }}>
                        <Button
                          className={styles.showButton}
                          variant="contained"
                          sx={{ mb: "10px" }}
                        >
                          Add To Cart
                        </Button>
                      </Box>
                    </Box>
                  </Paper>
                </ThemeProvider>
              </CardActionArea>
          </Grid>
        ))}
    </>
  );
};
export default ProductCard;
