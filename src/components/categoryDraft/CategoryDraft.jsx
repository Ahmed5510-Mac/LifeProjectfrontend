import img from "../../assets/img03.jpg";
import styles from './categoryDraft.module.css'

import Grid from "@mui/material/Grid";

import Box from "@mui/material/Box";
import { Button, IconButton, ImageList, ImageListItem, ImageListItemBar, ListSubheader, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../store/category/categorySlice";
import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
const CategoryDraft = () => {
    const { categories } = useSelector((state) => state.categories);
console.log(categories);
const disptach=useDispatch();
const navigate=useNavigate();
    useEffect(() => {
        disptach(getCategories());
      }, [disptach]);
    

  return (
    <>
  
        <Grid container spacing={1}>
        {categories&&categories.map((item) => (
                    <Grid
                      item
                      xs={6} 
                      >
                         <div className={styles.grow}>
                  <div className="card-body position-relative " >
                     <img
                    src={`${item.image}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.name}
                    loading="lazy"
                    width="500px"
                    height="400px"
                    
                  />
                  <div className={styles.movingdiv}>
                  <Typography >This is {item.name} You Can See more Product By Clicking Here</Typography>
               
                      <Button variant="contained"  onClick={() =>
                            navigate(`/${item.name}`)}>View All</Button>
                     
                     </div>

                  </div>
                
             
                  
  </div>
                 
               </Grid>
      ))}
        </Grid>

                
        
     {/* <Box
                      sx={{
                        backgroundColor: "primary.dark",
                        "&:hover": {
                          backgroundColor: "primary.main",
                          opacity: [0.9, 0.8, 0.7],
                        },
                      }}
                    > </Box> */}



    
    
    </>
  );
};

export default CategoryDraft;
