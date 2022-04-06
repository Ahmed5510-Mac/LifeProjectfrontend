import ProductCard from "../../components/ProductCard/ProductCard";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const Home = () => {
    return (
        <>
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