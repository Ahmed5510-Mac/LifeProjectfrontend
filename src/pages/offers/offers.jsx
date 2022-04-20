import * as React from "react";
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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function SeeAllOffers() {
  const { oneDiscount, productsInDiscount } = useSelector(
    (state) => state.discounts
  );
  const dispatch = useDispatch();
  const navigate =useNavigate();


  const { pathname } = useLocation();
  const cart = useSelector((state) => state.cart);

  React.useEffect(() => {
    dispatch(getProductsInDiscount(oneDiscount));
    dispatch(getTotals());
  }, [cart]);
  
  React.useEffect(()=>{
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
        offerTime={"Time Left: 08h : 36m : 50s"}
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
