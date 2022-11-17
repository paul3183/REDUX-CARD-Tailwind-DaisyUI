import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const userSlice = createSlice({
  name: 'user',
  initialState: 'paul',
  reducers: {
    change: (state, action) => {
      const valueI = (action.payload);
      return valueI;
    }
  }
})

export const { change } = userSlice.actions;

export default userSlice.reducer;
