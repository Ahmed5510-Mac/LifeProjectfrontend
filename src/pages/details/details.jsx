import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Delivery from "../../components/delivery/delivery";
import ImageGallaryComponent from "../../components/Deatails/detailsScrollerCarasol";
import { CardActions, Container, Rating, Typography } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import DiscountCard from "../../components/Deatails/detailsDiscountCard";
import CartButtons from "../../components/Deatails/detailsCartButton";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

export default function Deatails2() {
  const { selectedOfferProduct } = useSelector((state) => state.discounts);
  const [value, setValue] = React.useState(2);
  const { pathname } = useLocation();

  React.useEffect(() => {
    console.log(selectedOfferProduct);
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    selectedOfferProduct && (
      <Container sx={{ marginY: "4%" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8} sm={12}>
              <Item>
                <Grid container >
                  <Grid item xs={12} md={6} sm={12}>
                    <div style={{maxWidth:"80%"}}>
                    <ImageGallaryComponent 
                    title={selectedOfferProduct.productName}
                    image={selectedOfferProduct.image}/>
                    </div>
                  </Grid>
                  <Grid item xs={12} md={6} sm={12}>
                    <Grid container item spacing={3}>
                      <Grid item xs={10}>
                        <Typography sx={{ fontSize: 20 }} color="text.primary">
                          {selectedOfferProduct.productName}
                        </Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <FavoriteBorderOutlinedIcon sx={{ color: "#d90429" }} />
                      </Grid>
                    </Grid>

                    <Box sx={{ display: "center", alignItems: "center" }}>
                      <Rating
                        sx={{ paddingTop: "3%" }}
                        name="simple-controlled"
                        readOnly
                        value={
                          selectedOfferProduct.rating == "undefined" ||
                          selectedOfferProduct.rating == null
                            ? 0
                            : selectedOfferProduct.rating
                        }
                        size="small"
                      />
                      <Typography variant="body2" component="p" marginLeft={1}>
                        <a href="#">{`(${
                          selectedOfferProduct.rating == "undefined" ||
                          selectedOfferProduct.rating == null
                            ? 0
                            : selectedOfferProduct.rating
                        } verified ratings)`}</a>
                      </Typography>
                    </Box>

                    <DiscountCard
                      productName={selectedOfferProduct.productName}
                      maxNumOfProducts={selectedOfferProduct.quantity}
                      numOfProductsThatReduced={3}
                      priceBefore={selectedOfferProduct.price}
                      discountPersentatge={selectedOfferProduct.discount.discountAmount}
                    />
                    <CardActions style={{ justifyContent: "center" }}>
                      <CartButtons />
                    </CardActions>
                  </Grid>
                </Grid>
              </Item>
            </Grid>

            <Grid item xs={12} md={4} sm={12}>
              <Delivery />
            </Grid>
          </Grid>
        </Box>
      </Container>
    )
  );
}
