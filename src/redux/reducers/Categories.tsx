import { createSlice } from "@reduxjs/toolkit";


interface Objects {
    categoriId: number,
    name: string
}


interface Initial {
categories: Objects[];
  selectedCategoryId: number;
}

const InitialState: Initial = {
    categories: [
          {
            categoriId: 1,
            name:"Highlight"
          },
          {
            categoriId: 2,
            name:"Environment"
          },
          {
            categoriId: 3,
            name:"Education"
          },
{
    categoriId: 4,
    name:"Cloathing and Accessories"
},
{
    categoriId: 5,
    name:"Household goods"
}
    ],
    selectedCategoryId: 1
}

export const Categories = createSlice({
    name: 'categories',
    initialState: InitialState,
    reducers:{
     resetCategories: () => {
        return InitialState
     },
     updateSelectedCategoryId: (state, action) => {
        state.selectedCategoryId = action.payload;
     }
    }
})


export const {resetCategories, updateSelectedCategoryId} = Categories.actions;

export default Categories.reducer