import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import img1 from "../../assets/img1.jpg";
import styles from './ProductCard.module.css'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: "body2"
                    },
                    style: {
                        fontSize: 12,
                        backgroundColor:"blue"
                    }
                },
                {
                    props: {
                        variant: "body3"
                    },
                    style: {
                        fontSize: 15,
                    }
                }
            ]
        }
    }
});

const ProductCard = (props) => {
    const [value, setValue] = useState(2);
    return (
        <Grid item xs={3} >
            <ThemeProvider theme={theme} >
                <Paper elvation={3} className={styles.show}>
                    
                    <img src={img1} alt="" className={styles.img} />
                    <Box paddingX={1}>
                        <Typography variant="h5" component="h1">
                            {props.name}
                        </Typography>
                        <Typography variant="subtitle1" component="p">
                            {props.description}
                        </Typography>
                        <Box>
                            
                            <Typography variant="body3" component="p">{props.price}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex',justifyContent: 'space-between' }}>
                        
                        <Box sx={{ display: "center", alignItems: "center" }} marginTop={1}>
                            <Rating
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                                size="small"
                            />
                            <Typography variant="body2" component="p" marginLeft={0.5}>{value}</Typography>
                        </Box>
                        <DeleteIcon  />
                        </Box>
                   
                        <Box sx={{textAlign: 'center'}}>
                            <Button className={styles.showButton} variant="contained" sx={{mb:"10px" }}>Add To Cart</Button>
                        </Box>
                    </Box>
                </Paper>
            </ThemeProvider>
        </Grid>
    );
}
export default ProductCard;