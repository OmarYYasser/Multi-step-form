import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  phone: "",
  email: "",
  plan: {
    type: "",
    sub: "",
    price: 0,
  },
  onlineService: { addonName: "online service", isActive: false, price: 1 },
  largeStorage: { addonName: "large storage", isActive: false, price: 2 },
  customizeTheme: { addonName: "customize Theme", isActive: false, price: 2 },
  index: 1,
};

const stepForm = createSlice({
  name: "stepForm",
  initialState,
  reducers: {
    reset(state) {
      state.index = 1;
    },
    prev(state) {
      state.index -= 1;
    },
    next(state) {
      state.index += 1;
    },
    formData: {
      prepare(username, phone, email) {
        return { payload: { username, phone, email } };
      },
      reducer(state, action) {
        state.username = action.payload.username;
        state.phone = action.payload.phone;
        state.email = action.payload.email;
      },
    },
    plan: {
      prepare(type, sub, price) {
        return { payload: { type, sub, price } };
      },
      reducer(state, action) {
        state.plan.type = action.payload.type;
        state.plan.sub = action.payload.sub;
        state.plan.price = action.payload.price;
      },
    },
    addons: {
      prepare(onlineService, largeStorage, customizeTheme) {
        return { payload: { onlineService, largeStorage, customizeTheme } };
      },
      reducer(state, action) {
        state.onlineService.isActive = action.payload.onlineService;
        state.largeStorage.isActive = action.payload.largeStorage;
        state.customizeTheme.isActive = action.payload.customizeTheme;
      },
    },
  },
});

export const { addons, plan, formData, next, prev, reset } = stepForm.actions;

export default stepForm.reducer;
