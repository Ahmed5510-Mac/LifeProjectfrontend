import { useState } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import img1 from "../../../assets/tool.jpg";
import brufen from "../../../assets/brufen.jpg"
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CardActionArea, Container } from "@mui/material";
import { useNavigate } from "react-router";
import { getProducts } from "../../../store/product/productSlice";
import CategoryCard from "../../CategoryCard/CategoryCard";
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

const Units = () => {
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
      <Container >
        <Box mt={10}>
        <CategoryCard image={img1}  />
        <Grid container  spacing={5}>
      {products &&
      products.filter((product)=>{
          return product.category.name==="Units"
      })
       .map((product, index) => {
           return(
          <Grid item xs={3} columns={{  xs: 12, sm: 6, md: 4 }} key={index}my={1} >
              <CardActionArea onClick={() => handleSelect(product._id)}>
                <ThemeProvider theme={theme}>
                  <Paper elvation={3} >
                    <img src={brufen} alt="" style={{width:"100%",height:"10rem"}} />
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
        )})}
         </Grid>
        </Box>
      </Container>
    </>
  );
};
export default Units;
