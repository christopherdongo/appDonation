import { createSlice } from "@reduxjs/toolkit";


export type CategoriesType = {
    categoryId: number,
    name: string
}


interface Initial {
categories: CategoriesType[];
  selectedCategoryId: number;
}

const InitialState: Initial = {
  categories:[
    {
      categoryId: 1,
      name: 'Highlight',
    },
    {
      categoryId: 2,
      name: 'Environment',
    },
    {
      categoryId: 3,
      name: 'Education',
    },
    {
      categoryId: 4,
      name: 'Clothing and Accessories',
    },
    {
      categoryId: 5,
      name: 'Household goods',
    },
    {
      categoryId: 6,
      name: 'Electronics',
    },
    {
      categoryId: 7,
      name: 'Toys and Games',
    },
    {
      categoryId: 8,
      name: 'Sports Equipment',
    },
    {
      categoryId: 9,
      name: 'Books and Media',
    },
    {
      categoryId: 10,
      name: 'Health and Beauty Products',
    },
    {
      categoryId: 11,
      name: 'Office supplies',
    },
    {
      categoryId: 12,
      name: 'Tools and Hardware',
    },
    {
      categoryId: 13,
      name: 'Art and Craft Supplies',
    },
  ],
    selectedCategoryId: 1
}

export const Categories = createSlice({
    name: 'categories',
    initialState: InitialState,
    reducers: {
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