import {createSlice} from '@reduxjs/toolkit';


type Initial =  {
    firstName: string,
    lastName: string,
    userId: number,
    profileImage: string
} 


const initialState : Initial = {
  firstName: 'Christopher',
  lastName: 'Dongo',
  userId: 1,
  profileImage:'https://cdn.dribbble.com/users/228053/screenshots/6089293/1.png'
};

export const User = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
   updateFirstName: (state, action) => {
    state.firstName = action.payload.firstName
   },
   updateLastName: (state, action) => {
    state.lastName = action.payload.lastName
   },
   resetTopInitialState: () => {
    return initialState;
   }
  }
});

export const { updateFirstName, updateLastName, resetTopInitialState } = User.actions

export default User.reducer