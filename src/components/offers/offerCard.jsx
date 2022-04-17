import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import SkillsProgress from "./offersCardProgress";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectProduct } from "../../store/offers/offersSlice";
import styles from '../Draft/draft.module.css'
export default function OffersCard({
  image,
  productName,
  maxNumOfProducts,
  numOfProductsThatReduced,
  priceBefore,
  discountPersentatge,
  productId,
  description
}) {
  let priceAfter = (priceBefore * discountPersentatge) / 100;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(selectProduct(productId));
    navigate("/details");
  };

  return (
    <Card  className={styles.draft} sx={{ maxWidth: 300, maxHeight: 330, marginLeft: "2%" }}>
      <CardActionArea onClick={onClick}>
        <CardMedia 
          sx={{
            display: "block",
            marginTop: "1%",
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
          <SkillsProgress
            maxNumOfProducts={maxNumOfProducts}
            numOfProductsThatReduced={numOfProductsThatReduced}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
