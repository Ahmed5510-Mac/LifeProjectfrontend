import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import OfferCard from "../../components/offersCard/offersCard";
import OffersContainer from "../../components/offersContainer/offersContainer";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function SeeAllOffers() {
  return (
    <>
      <OffersContainer
        offerTime={"Time Left: 08h : 36m : 50s"}
        containerColor="#e61601"
        textColor="white"
      />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <OfferCard
              productName="Tooth Paste"
              maxNumOfProducts={20}
              numOfProductsThatReduced={10}
              priceBefore={100.0}
              discountPersentatge={5}
              ratingValue={3}
            />
          </Grid>
          <Grid item xs={3}>
            <OfferCard
              productName="Tooth Paste"
              maxNumOfProducts={20}
              numOfProductsThatReduced={10}
              priceBefore={100.0}
              discountPersentatge={5}
              ratingValue={3}
            />
          </Grid>
          <Grid item xs={3}>
            <OfferCard
              productName="Tooth Paste"
              maxNumOfProducts={20}
              numOfProductsThatReduced={10}
              priceBefore={100.0}
              discountPersentatge={5}
              ratingValue={3}
            />
          </Grid>
          <Grid item xs={3}>
            <OfferCard
              productName="Tooth Paste"
              maxNumOfProducts={20}
              numOfProductsThatReduced={10}
              priceBefore={100.0}
              discountPersentatge={5}
              ratingValue={3}
            />
          </Grid>

          <Grid item xs={3}>
            <OfferCard
              productName="Tooth Paste"
              maxNumOfProducts={20}
              numOfProductsThatReduced={10}
              priceBefore={100.0}
              discountPersentatge={5}
              ratingValue={3}
            />
          </Grid>
          <Grid item xs={3}>
            <OfferCard
              productName="Tooth Paste"
              maxNumOfProducts={20}
              numOfProductsThatReduced={10}
              priceBefore={100.0}
              discountPersentatge={5}
              ratingValue={3}
            />
          </Grid>
          <Grid item xs={3}>
            <OfferCard
              productName="Tooth Paste"
              maxNumOfProducts={20}
              numOfProductsThatReduced={10}
              priceBefore={100.0}
              discountPersentatge={5}
              ratingValue={3}
            />
          </Grid>
          <Grid item xs={3}>
            <OfferCard
              productName="Tooth Paste"
              maxNumOfProducts={20}
              numOfProductsThatReduced={10}
              priceBefore={100.0}
              discountPersentatge={5}
              ratingValue={3}
            />
          </Grid>


          <Grid item xs={3}>
            <OfferCard
              productName="Tooth Paste"
              maxNumOfProducts={20}
              numOfProductsThatReduced={10}
              priceBefore={100.0}
              discountPersentatge={5}
              ratingValue={3}
            />
          </Grid>
          <Grid item xs={3}>
            <OfferCard
              productName="Tooth Paste"
              maxNumOfProducts={20}
              numOfProductsThatReduced={10}
              priceBefore={100.0}
              discountPersentatge={5}
              ratingValue={3}
            />
          </Grid>
          <Grid item xs={3}>
            <OfferCard
              productName="Tooth Paste"
              maxNumOfProducts={20}
              numOfProductsThatReduced={10}
              priceBefore={100.0}
              discountPersentatge={5}
              ratingValue={3}
            />
          </Grid>
          <Grid item xs={3}>
            <OfferCard
              productName="Tooth Paste"
              maxNumOfProducts={20}
              numOfProductsThatReduced={10}
              priceBefore={100.0}
              discountPersentatge={5}
              ratingValue={3}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
