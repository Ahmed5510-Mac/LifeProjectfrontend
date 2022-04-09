import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[{id:1,name:"panadol",price:10,discount:20,quantity:1},{id:2,name:"Adol"},{id:3,name:"Apimol"}],
        counterValue:0
    },

    reducers:{
        removeItem:function(state,{payload})
        {
            state.items = state.items.filter((item)=>item.id != payload.id)
        },
        discount:function(state,{payload})
        {

        },
        increment: (state) => {
            state.counterValue += 1;
        },
          decrement: (state) => {
            state.counterValue -= 1;
        },
          incrementByAmount: (state, action) => {
            state.counterValue += action.payload;
        },
    }
})
export const {removeItem,increment,decrement,incrementByAmount} = cartSlice.actions
export default cartSlice.reducer;