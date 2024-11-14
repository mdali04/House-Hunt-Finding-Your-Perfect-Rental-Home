import {   configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import { thunk } from "redux-thunk";
import  RentalSlice  from "./Component/Slice/Rental";
import  CustomerSlice  from "./Component/Slice/Customer";
import admin from "./Component/Slice/Admin";


const rootReducer = combineReducers({
    Rental: RentalSlice,
    Customer: CustomerSlice,
    Admin: admin,
});



const store = configureStore({
   reducer:rootReducer,
    //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
    });


export default store;