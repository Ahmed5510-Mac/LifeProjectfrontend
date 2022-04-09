import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Rating } from "@mui/material";
import SkillsProgress from "../offers/offersCardProgress";
import tooth from "../../assets/tooth.jpg";
import CartButtons from "../Deatails/detailsCartButton";

export default function OfferCard({
  productName,
  maxNumOfProducts,
  numOfProductsThatReduced,
  priceBefore,
  discountPersentatge,
  ratingValue
}) {
  
  let priceAfter = (priceBefore * discountPersentatge) / 100;

  return (
    <Card sx={{ maxWidth: 300,  marginY: 1 ,flexWrap: 'wrap' }}>
      <CardActionArea>
        <CardMedia
          sx={{
            display: "block",
            marginTop: "2%",
            marginLeft: "auto",
            marginRight: "auto",
            width: "50%",
          }}
          component="img"
          height="120"
          image={tooth}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            sx={{ marginBottom: "0%" }}
            gutterBottom
            variant="h8"
            component="div"
          >
            {productName}
          </Typography>
          <Typography
            sx={{ fontWeight: "bold", marginBottom: "0" }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {`EGP ${priceAfter}`}
          </Typography>
          <Typography
            sx={{ textDecoration: "line-through" }}
            gutterBottom
            variant="h8"
            component="div"
          >
            {`EGP ${priceBefore}`}
          </Typography>

          <Box sx={{ display: "center", alignItems: "center" }}>
            <Rating
              sx={{ paddingTop: "3%" }}
              name="read-only"
              value={ratingValue}
              readOnly
              size="small"
            />
            <Typography variant="body2" component="p" marginLeft={1}>
              <a style={{color:"blue"}}>{`(${ratingValue})`}</a>
            </Typography>
          </Box>


          <SkillsProgress
            maxNumOfProducts={maxNumOfProducts}
            numOfProductsThatReduced={numOfProductsThatReduced}
          />
          
          <CartButtons/>
          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
