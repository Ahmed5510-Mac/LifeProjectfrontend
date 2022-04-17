import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, CardActions, Rating } from "@mui/material";
import SkillsProgress from "../offers/offersCardProgress";
import CartButtons from "../Deatails/detailsCartButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectProduct } from "../../store/offers/offersSlice";
import styles from '../Draft/draft.module.css'


export default function OfferCard({
  productName,
  maxNumOfProducts,
  numOfProductsThatReduced,
  priceBefore,
  discountPersentatge,
  ratingValue,
  image,
  productId,
  description
}) {
  
  let priceAfter = (priceBefore * discountPersentatge) / 100;
  const navigate= useNavigate()
  const dispatch=useDispatch()

  const onClick=()=>{
   dispatch(selectProduct(productId))
   navigate('/details')
 }
  return (
    <Card className={styles.draft} sx={{ maxWidth: 300,  marginY: 1 ,flexWrap: 'wrap' }}>
      <CardActionArea onClick={onClick}>
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
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            sx={{ marginBottom: "0%",fontWeight: "bold" }}
            gutterBottom
            variant="h8"
            component="div"
          >
            {productName}
          </Typography>
          <Typography
            sx={{ marginBottom: "0%" }}
            gutterBottom
            variant="h8"
            component="div"
          >
            {description}
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
              value={ratingValue =='undefined' || ratingValue == null ?0:ratingValue}
              readOnly
              size="small"
            />
            <Typography variant="body2" component="p" marginLeft={1}>
              <a style={{color:"blue"}}>{`(${ratingValue =='undefined' || ratingValue == null ?0:ratingValue})`}</a>
            </Typography>
          </Box>

          <SkillsProgress
            maxNumOfProducts={maxNumOfProducts}
            numOfProductsThatReduced={numOfProductsThatReduced}
          />
        </CardContent>
      </CardActionArea>
      <CardActions style={{justifyContent: 'center'}} >
      <CartButtons />
      </CardActions>
      
      
    </Card>
  );
}
