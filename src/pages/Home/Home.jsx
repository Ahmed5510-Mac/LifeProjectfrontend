// import ProductCard from "../../components/ProductCard/ProductCard";
// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
import Slider from "../../components/Slider/Slider";
import { useSelector } from "react-redux";
const Home = () => {
  return (
    <>
      <Slider />
      {/* <Container sx={{ marginY: 5 }}>
        <Grid container spacing={5}>
          <ProductCard
            name="tool in category"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
            price="10$"
          />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Grid>
      </Container> */}
    </>
  );
};

export default Home;
