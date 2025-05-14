import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cv: {
    post: '',
    salary: 0,
    currency: '',
    about: '',
    style: 'default',
    main_color: null,
  },
};

export const cvSlice = createSlice({
  name: 'cv_slice',
  initialState,
  reducers: {
    setPostName: (state, action) => {
      state.cv.post = action.payload;
    },
    setSalary: (state, action) => {
      state.cv.salary = action.payload;
    },
    setCurrency: (state, action) => {
      state.cv.currency = action.payload;
    },
    setAbout: (state, action) => {
      state.cv.about = action.payload;
    },
    setCv: (state, action) => {
      state.cv = action.payload;
    },
    setStyle: (state, action) => {
      state.cv.style = action.payload;
    },
    setMainColor: (state, action) => {
      state.cv.main_color = action.payload;
    },
  },
});

export const { setPostName, setCv, setMainColor, setAbout, setSalary, setStyle, setCurrency } =
  cvSlice.actions;

export default cvSlice.reducer;
