import axios from "axios";

import {
    registerRequest, registerSuccess, registerFailure, loginRequest, loginSuccess, loginFailure, profileRequest, profileSuccess, profileFailure, viewHouseRequest, viewHouseSuccess, viewHouseFailure, updateProfileRequest, updateProfileSuccess, updateProfileFailure, viewhousedetailsRequest, viewhousedetailsSuccess, viewhousedetailsFailure, bookHouseRequest, bookHouseSuccess, bookHouseFailure, viewBookingRequest, viewBookingSuccess, viewBookingFailure, logoutRequest, logoutSuccess, logoutFailure,
    changepasswordFailure, changepasswordRequest, changepasswordSuccess,searchFailure,searchRequest,searchSuccess

} from '../Slice/Customer';

import { Dispatch } from "redux";

import { toast } from "react-toastify";




export const register = (data:FormData) =>async(dispatch:Dispatch)=>{
    try{
        dispatch(registerRequest())
        const res = await axios.post('/api/customer/register',data)
        dispatch(registerSuccess(res.data))
        res.data.message.forEach((mes:any) => toast.success(mes));

    }catch(error:any){
        dispatch(registerFailure(error))
        error.response.data.message.forEach((err:any)=>toast.error(err));
    }
};



export const customerlogin = (email:string,password:string) =>async(dispatch:Dispatch)=>{
    try{
        dispatch(loginRequest())
        const res = await axios.post('/api/customer/login',{email,password})
        dispatch(loginSuccess(res.data))
        res.data.message.forEach((mes:any) => toast.success(mes));
        sessionStorage.setItem('customer',JSON.stringify(res.data))
        window.location.href = '/homepage'

    }catch(error:any){
        dispatch(loginFailure(error))
        error.response.data.message.forEach((err:any)=>toast.error(err));
    }
};



export const Profile = (id:string) =>async(dispatch:Dispatch)=>{
    try{
        dispatch(profileRequest())
        const res = await axios.get(`/api/customer/profile/${id}`)
        dispatch(profileSuccess(res.data))
        res.data.message.forEach((mes:any) => toast.success(mes));
    }catch(error:any){
        dispatch(profileFailure(error))
        error.response.data.message.forEach((err:any)=>toast.error(err));
    }
};


export const UpdateProfile = (data:FormData,id:string) =>async(dispatch:Dispatch)=>{
    try{
        dispatch(updateProfileRequest())
        const res = await axios.put(`/api/customer/updateprofile/${id}`,data)
        dispatch(updateProfileSuccess(res.data))
        res.data.message.forEach((mes:any) => toast.success(mes));
    }catch(error:any){
        dispatch(updateProfileFailure(error))
        error.response.data.message.forEach((err:any)=>toast.error(err));
    }
};



export const ViewHouse = () =>async(dispatch:Dispatch)=>{
    try{
        dispatch(viewHouseRequest())
        const res = await axios.get(`/api/customer/gethouse`)
        console.log(res.data,"res")
        dispatch(viewHouseSuccess(res.data))
        // res.data.message.forEach((mes:any) => toast.success(mes));
    }catch(error:any){
        console.log(error.response,"error")
        dispatch(viewHouseFailure(error))
        // error.response.data.message.forEach((err:any)=>toast.error(err));
    }
};



export const ViewHouseDetails = (id:string) =>async(dispatch:Dispatch)=>{
    try{
        dispatch(viewhousedetailsRequest())
        const res = await axios.get(`/api/customer/viewhousedetails/${id}`)
        dispatch(viewhousedetailsSuccess(res.data))
        res.data.message.forEach((mes:any) => toast.success(mes));
    }catch(error:any){
        dispatch(viewhousedetailsFailure(error))
        error.response.data.message.forEach((err:any)=>toast.error(err));
    }
};



export const BookHouse = (id:string,data:Object) =>async(dispatch:Dispatch)=>{
    try{
        dispatch(bookHouseRequest())
        const res = await axios.post(`/api/customer/bookhouse/${id}`,{
            ...data
        })
        dispatch(bookHouseSuccess(res.data))
        res.data.message.forEach((mes:any) => toast.success(mes));
    }catch(error:any){
        dispatch(bookHouseFailure(error))
        error.response.data.message.forEach((err:any)=>toast.error(err));
    }
};




export const changepassword = (id:string,data:object) =>async(dispatch:Dispatch)=>{
    try{
        dispatch(changepasswordRequest())
        const res = await axios.put(`/api/customer/changepassword/${id}`,data)
        dispatch(changepasswordSuccess(res.data))
        toast.success(res.data.message)
        res.data.message.forEach((mes:any) => toast.success(mes));
    }catch(error:any){
        dispatch(changepasswordFailure(error))
        error.response.data.message.forEach((err:any)=>toast.error(err));
    }
};




export const ViewBooking = (id:string) =>async(dispatch:Dispatch)=>{
    try{
        dispatch(viewBookingRequest())
        const res = await axios.get(`/api/customer/viewbooking/${id}`)
        dispatch(viewBookingSuccess(res.data))
        res.data.message.forEach((mes:any) => toast.success(mes));
    }catch(error:any){
        dispatch(viewBookingFailure(error))
        error.response.data.message.forEach((err:any)=>toast.error(err));
    }
};




export const searchHousess = (city:string,startprice:number,endprice:number,bedrooms:string,facilities:string) =>async(dispatch:Dispatch)=>{
    try{
        console.log(city,startprice,endprice,bedrooms,facilities)
        dispatch(searchRequest())
        const res = await axios.get(`/api/customer/housesss?city=${city}&startprice=${startprice}&endprice=${endprice}&bedrooms=${bedrooms}&facilities=${facilities}`)
       
        dispatch(searchSuccess(res.data))
        // res.data.message.forEach((mes:any) => toast.success(mes));
    }catch(error:any){
        dispatch(searchFailure(error))
        // error.response.data.message.forEach((err:any)=>toast.error(err));
    }
};



export const logout = () =>async(dispatch:Dispatch)=>{
    try{
        dispatch(logoutRequest())
        const res = await axios.delete('/api/customer/logout')
        dispatch(logoutSuccess(res.data))
        res.data.message.forEach((mes:any) => toast.success(mes));
        sessionStorage.removeItem('customer')
        window.location.href = '/'

    }catch(error:any){
        dispatch(logoutFailure(error))
        error.response.data.message.forEach((err:any)=>toast.error(err));
    }
}
