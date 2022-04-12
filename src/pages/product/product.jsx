import { Box, Container, Grid } from "@mui/material";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import ProductCard from "../../components/ProductCard/ProductCard";
import img7 from "../../assets/img7.jpg";

const Product = () => {

  return (
    <>
      <Container >
        <Box mt={10}>
        <CategoryCard image={img7}  />
        <Grid container  spacing={5} >
            <ProductCard />
        </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Product;
