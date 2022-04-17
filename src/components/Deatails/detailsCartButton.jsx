import * as React from 'react';
import Button from '@mui/material/Button';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

export default function CartButtons() {
  return (
    
      <Button  sx={{color:"white",fontWeight:"bold",width:"100%",marginTop:"3%",bgcolor: 'warning.main'}} variant="contained" disableElevation startIcon={<AddShoppingCartOutlinedIcon />}>
        Add To Cart 
      </Button>
  );
}
