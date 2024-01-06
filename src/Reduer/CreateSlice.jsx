// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   additem: [],
//   cartCount: 0,
//   favoriteItems:[]
// };

// const Slice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addtoCart: (state, action) => {
//       state.additem.push(action.payload);
//       state.cartCount += 1;
//     },
//     deleteToCart: (state, action) => {
//       state.additem = state.additem.filter(
//         (item) => item.id !== action.payload
//       );
//       state.cartCount -= 1;
//     },

//     favoriteItem: (state, action) => {
//       return {
//         ...state,
//         favoriteItems: [...state.favoriteItems, action.payload],
//       };
//     },
  
//   },
// });

// export const { addtoCart, deleteToCart,favoriteItem} = Slice.actions;

// export default Slice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  additem: [],
  cartCount: 0,
  favoriteItems: [], // Correct capitalization for 'favoriteItems'
};

const Slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      state.additem.push(action.payload);
      state.cartCount += 1;
    },
    deleteToCart: (state, action) => {
      state.additem = state.additem.filter(
        (item) => item.id !== action.payload
      );
      state.cartCount -= 1;
    },
    favoriteItem: (state, action) => {
      state.favoriteItems.push(action.payload); // Mutate the state directly
    },
  },
});

export const { addtoCart, deleteToCart, favoriteItem } = Slice.actions;

export default Slice.reducer
