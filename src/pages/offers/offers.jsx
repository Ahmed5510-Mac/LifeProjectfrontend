import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import OfferCard from "../../components/offersCard/offersCard";
import OffersContainer from "../../components/offersContainer/offersContainer";
import { Container } from "@mui/material";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductsInDiscount } from "../../store/offers/offersSlice";
import { getTotals } from "../../store/cart/cartSlice";
import { useEffect, useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function SeeAllOffers() {
  const [hours, sethours] = useState(1);
  const [minutes, setminutes] = useState(60);
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);
    return ( () => clearInterval(interval));
  }, []);
  const { oneDiscount, productsInDiscount } = useSelector(
    (state) => state.discounts
  );
  const dispatch = useDispatch();
  const navigate =useNavigate();


  const { pathname } = useLocation();
  const cart = useSelector((state) => state.cart);

 useEffect(() => {
    dispatch(getProductsInDiscount(oneDiscount));
    dispatch(getTotals());
  }, [cart]);
  
useEffect(()=>{
    window.scrollTo(0, 0);
  },[pathname])

  const offerCard =
    productsInDiscount &&
    productsInDiscount.map((item, index) => {
      return (
        <Grid key={index} item xs={6} md={3} sm={6}>
          <OfferCard
            product={item}
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
    <Container sx={{ marginY: "5%" }}>
      <OffersContainer
        offerTime={`${hours} : ${minutes}:${seconds}`}
        containerColor="#e61601"
        textColor="white"
      />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          {offerCard}
        </Grid>
      </Box>
    </Container>
  );
}
