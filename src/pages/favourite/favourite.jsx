import { Button, Container, Alert, Box, Paper, Grid } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useDispatch, useSelector } from "react-redux";
import img1 from "../../assets/brufen.jpg";
import CloseIcon from "@mui/icons-material/Close";
import { removeItem } from "../../store/favourite/favouriteSlice";
const Favourite = () => {
  const favourite = useSelector((state) => state.favourite.favourite);
  const dispatch = useDispatch();
  return (
    <>
     <Container>
      {favourite <= 0 ? (
          <Box height="400px" style={{ display: 'flex',justifyContent: "center",alignItems: "center"}}>
          <Alert variant="filled" severity="info" style={{ width:"1000px",justifyContent: "center"}} >You don't have any favourites</Alert>
          </Box>
       
      ) : (
        <Box sx={{ flexGrow: 1 }} my={3}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 6, sm: 6, md: 12 }} >
        {favourite.map((item, i) => {
          return (
            <Grid item xs={2} sm={4} md={4} key={item._id}>
            <Paper elevation={3}  >
                <CardMedia
                  component="img"
                  height="140"
                  image={img1}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.productName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{display:"flex", justifyContent: "space-between",textAlign: "center" }}>
                  <Button variant="contained" sx={{m:1}}>
                    add to cart
                  </Button>
                  <CloseIcon sx={{m:1}}
                    onClick={() => dispatch(removeItem(item._id))}
                    cursor="pointer"
                  />
                </CardActions>
             
          
            </Paper>
         </Grid>
              
          );
          
        })
      }
      </Grid>
      </Box>
      )}
       
       </Container>
    </>
  );
};

export default Favourite;
