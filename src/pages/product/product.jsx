import { Container, Grid } from "@mui/material";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import ProductCard from "../../components/ProductCard/ProductCard";
import img7 from "../../assets/img7.jpg";


const Product = () => {
    return ( <>
     <Container sx={{ marginY: 5 }}>
   <CategoryCard image={img7} />
        <Grid container sx={{mb:"10px",mt:"5px" }} spacing={5}>
          <ProductCard
            name="tool in category"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
            price="10$"
          />
           <ProductCard
            name="tool in category"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
            price="10$"
          />
           <ProductCard
            name="tool in category"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
            price="10$"
          />
            <ProductCard
            name="tool in category"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
            price="10$"
          />
           <ProductCard
            name="tool in category"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
            price="10$"
          />
           <ProductCard
            name="tool in category"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
            price="10$"
          />
           <ProductCard
            name="tool in category"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
            price="10$"
          />
            <ProductCard
            name="tool in category"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
            price="10$"
          />
             <ProductCard
            name="tool in category"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
            price="10$"
          />
           <ProductCard
            name="tool in category"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
            price="10$"
          />
           <ProductCard
            name="tool in category"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
            price="10$"
          />
            <ProductCard
            name="tool in category"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
            price="10$"
          />
        </Grid>
       
      </Container>
      </> );
}
 
export default Product;

