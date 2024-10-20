import axios from "axios";
import { Dispatch } from "redux";
import { toast } from "react-toastify";
import {
    loginRequest, loginSuccess, loginFailure, viewrentalRequest, viewrentalSuccess, viewrentalFailure, updaterentalRequest, updaterentalSuccess, updaterentalFailure, viewcustomerRequest, viewcustomerSuccess, viewcustomerFailure, logoutrequest, logoutsuccess, logoutfailure,
    viewHouseFailure,viewHouseRequest,viewHouseSuccess,dashboardFailure,dashboardRequest,dashboardSuccess
} from "../Slice/Admin";





export const login = (email:string,password:string) =>async(dispatch:Dispatch)=>{
    try{
        dispatch(loginRequest())
        const res = await axios.post('/api/admin/login',{email,password})
        dispatch(loginSuccess(res.data))
        res.data.message.forEach((mes:any) => toast.success(mes));
        window.location.href = '/admin/dashboard'

    }catch(error:any){
        dispatch(loginFailure(error))
        error.response.data.message.forEach((err:any)=>toast.error(err));
    }
};



export const ViewRental = (name:string) =>async(dispatch:Dispatch)=>{
    try{
        dispatch(viewrentalRequest())
        const res = await axios.get(`/api/admin/rentals?name=${name}`)
        dispatch(viewrentalSuccess(res.data))
        res.data.message.forEach((mes:any) => toast.success(mes));
    }catch(error:any){
        dispatch(viewrentalFailure(error))
        error.response.data.message.forEach((err:any)=>toast.error(err));
    }
};



export const UpdateRental = (data:string,id:number) =>async(dispatch:Dispatch)=>{
    try{
        dispatch(updaterentalRequest())
        const res = await axios.put(`/api/admin/rental/${id}`,{
            status:data
        })
        dispatch(updaterentalSuccess(res.data))
        res.data.message.forEach((mes:any) => toast.success(mes));
    }catch(error:any){
        dispatch(updaterentalFailure(error))
        error.response.data.message.forEach((err:any)=>toast.error(err));
    }
};



export const ViewCustomer = (name:string) =>async(dispatch:Dispatch)=>{
    try{
        dispatch(viewcustomerRequest())
        const res = await axios.get(`/api/admin/customers?name=${name}`)
        dispatch(viewcustomerSuccess(res.data))
        res.data.message.forEach((mes:any) => toast.success(mes));
    }catch(error:any){
        dispatch(viewcustomerFailure(error))
        error.response.data.message.forEach((err:any)=>toast.error(err));
    }
};


export const logout = () =>async(dispatch:Dispatch)=>{
    try{
        dispatch(logoutrequest())
        const res = await axios.post('/api/admin/logout')
        dispatch(logoutsuccess(res.data))
        res.data.message.forEach((mes:any) => toast.success(mes));
        window.location.href = '/'
    }catch(error:any){
        dispatch(logoutfailure(error))
        error.response.data.message.forEach((err:any)=>toast.error(err));
    }
};




export const ViewHouse = () =>async(dispatch:Dispatch)=>{
    try{
        dispatch(viewHouseRequest())
        const res = await axios.get('/api/admin/apartments')
        dispatch(viewHouseSuccess(res.data))
        res.data.message.forEach((mes:any) => toast.success(mes));
    }catch(error:any){
        dispatch(viewHouseFailure(error))
        error.response.data.message.forEach((err:any)=>toast.error(err));
    }
}


export const UpdateHouse = (status:string,id:string) =>async(dispatch:Dispatch)=>{
    try{
        dispatch(viewHouseRequest())
        const res = await axios.put(`/api/admin/apartment/${id}`,{status})
        dispatch(viewHouseSuccess(res.data))
        res.data.message.forEach((mes:any) => toast.success(mes));
    }catch(error:any){
        dispatch(viewHouseFailure(error))
        error.response.data.message.forEach((err:any)=>toast.error(err));
    }
}



export const dashboards = () =>async(dispatch:Dispatch)=>{
    console.log('dashboard')
    try{
        dispatch(dashboardRequest())
        const res = await axios.get('/api/admin/dashboard')
        dispatch(dashboardSuccess(res.data))
        console.log(res);
        
        res.data.message.forEach((mes:any) => toast.success(mes));
    }catch(error:any){
        dispatch(dashboardFailure(error))
        error.response.data.message.forEach((err:any)=>toast.error(err));
    }
}