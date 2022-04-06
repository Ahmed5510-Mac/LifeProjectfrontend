import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import img1 from "../../assets/img1.jpg";
import styles from './ProductCard.module.css'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import Rating from '@mui/material/Rating';

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

const ProductCard = () => {
    const [value, setValue] = useState(2);
    return (
        <Grid item xs={3} >
            <ThemeProvider theme={theme}>
                <Paper elvation={3}>
                    <img src={img1} alt="" className={styles.img} />
                    <Box paddingX={1}>
                        <Typography variant="subtitle1" component="h2">
                            product1
                        </Typography>
                        <Box>
                            <Typography variant="body3" component="p">100$</Typography>
                        </Box>
                        <DeleteIcon sx={{ width: 12.5 }} />
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
                    </Box>
                </Paper>
            </ThemeProvider>
        </Grid>
    );
}
export default ProductCard;