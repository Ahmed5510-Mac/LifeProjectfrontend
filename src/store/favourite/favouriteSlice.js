import {  createSlice } from "@reduxjs/toolkit";

  

export const favouriteSlice = createSlice({
    name:"favourite",
    initialState:{
        favourite:[],
    },
    reducers: {
        addItem:function(state,action){
                        // state.favourite.push(action.payload);
                        return{
                            ...state,
                            favourite:[
                                ...state.favourite,
                                action.payload
                            ]
                        }
    },
    removeItem:function(state,{payload})
    
        {
            return{
                ...state,
                favourite:state.favourite.filter((item)=>item._id !== payload)
                   
                
            }
      
        },
 }
}
)
export const {removeItem,addItem} = favouriteSlice.actions
export default favouriteSlice.reducer;
