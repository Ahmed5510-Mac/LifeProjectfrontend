import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Delivery from "../../components/delivery/delivery";
import ImageGallaryComponent from "../../components/Deatails/detailsScrollerCarasol";
import { Rating, Typography } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import DiscountCard from "../../components/Deatails/detailsDiscountCard";
import CartButtons from "../../components/Deatails/detailsCartButton";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),

  color: theme.palette.text.secondary,
}));

export default function Deatails2() {
  const [value, setValue] = React.useState(2);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>
            <Grid container spacing={2}>

              <Grid item xs={6} md={6} sm={12}>
                <ImageGallaryComponent />
              </Grid>
              <Grid item xs={6} md={6} sm={12}>
                <Grid container spacing={5}>
                  <Grid item xs={10}>
                    <Typography sx={{ fontSize: 20 }} color="text.primary">
                      Casual -woman Solid Tall Shirt
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
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    size="small"
                  />
                  <Typography variant="body2" component="p" marginLeft={1}>
                    <a href="#">{`(${value} verified ratings)`}</a>
                  </Typography>
                </Box>

                <DiscountCard
                  productName="Tooth Paste"
                  maxNumOfProducts={20}
                  numOfProductsThatReduced={16}
                  priceBefore={100.0}
                  discountPersentatge={5}
                />
                <Box sx={{ flexGrow: 1 }}>
                  <CartButtons />
                </Box>
              </Grid>
            </Grid>
          </Item>
        </Grid>

        <Grid item xs={4}>
          <Delivery />
        </Grid>
      
      </Grid>
      
    </Box>
  );
}
