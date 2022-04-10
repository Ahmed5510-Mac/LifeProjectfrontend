import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import SkillsProgress from './offersCardProgress';
import tooth from "../../assets/tooth.jpg";
import { useNavigate } from 'react-router-dom';


export default function OffersCard({productName,maxNumOfProducts,numOfProductsThatReduced,priceBefore,discountPersentatge}) {
 let priceAfter=(priceBefore*discountPersentatge)/100
 const navigate= useNavigate()

 const onClick=()=>{
  navigate('/details')
}

    return (
    <Card sx={{ maxWidth: 300 ,maxHeight:330 ,marginLeft:"2%"}}>
      <CardActionArea onClick={onClick}>
        <CardMedia
          sx={{
            display: "block",
            marginTop:"1%",
            marginLeft: "auto",
            marginRight: "auto",
            width: "50%"
        }}
          component="img"
          height="120"
          image={tooth}
          alt="green iguana"
        />
        <CardContent>
          <Typography sx={{marginBottom:"0%"}}  gutterBottom variant="h8" component="div">
           {productName}
          </Typography>
          <Typography sx={{fontWeight:"bold" , marginBottom:"0"}} gutterBottom variant="h5" component="div">
           {`EGP ${priceAfter}`}
          </Typography>
          <Typography sx={{textDecoration: "line-through"}} gutterBottom variant="h8" component="div">
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

