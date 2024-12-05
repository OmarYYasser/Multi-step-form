import { configureStore } from "@reduxjs/toolkit";
import stepFormReducer from "./components/stepFormSlice";

const store = configureStore({ reducer: { stepForm: stepFormReducer } });

export default store;
