import ProductCard from "../../components/ProductCard/ProductCard";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Slider from "../../components/Slider/Slider";

const Home = () => {
    return (
        <>
            <Slider/>
            <Container sx={{ marginY: 5 }}>
                <Grid container spacing={5}>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </Grid>
            </Container>
        </>);
}


export default Home;