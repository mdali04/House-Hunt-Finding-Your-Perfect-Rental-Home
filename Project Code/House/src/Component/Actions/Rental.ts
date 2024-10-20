import axios from 'axios';
import { Dispatch } from 'redux';
import {
    registerRequest,
        registerSuccess,
        registerFailure,
        loginRequest,
        loginSuccess,
        loginFailure,
        profileRequest,
        profileSuccess,
        profileFailure,
        updateProfileRequest,
        updateProfileSuccess,
        updateProfileFailure,
        houseRequest,
        houseSuccess,
        houseFailure,
        houseDetailRequest,
        houseDetailSuccess,
        houseDetailFailure,
        addhouseRequest,
        addhouseSuccess,
        addhouseFailure,
        updatehouseRequest,
        updatehouseSuccess,
        updatehouseFailure,
        deletehouseRequest,
        deletehouseSuccess,
        deletehouseFailure,
       
        bookhouseRequest,
        bookhouseSuccess,
        bookhouseFailure,
        changepasswordFailure,
        changepasswordRequest,
        changepasswordSuccess,
        logoutFailure,
        logoutRequest,
        logoutSuccess,
        dashboardFailure,
        dashboardRequest,
        dashboardSuccess
} from '../Slice/Rental';
import {toast} from 'react-toastify'





export const register = (data: FormData) => async (dispatch: Dispatch) => {
    try {
        dispatch(registerRequest());
        const response = await axios.post('http://localhost:4000/api/rental/register', data);
        dispatch(registerSuccess(response.data));
        response.data.message.forEach((mes:any) => toast.success(mes));
        window.location.href = '/rent/login';
    } catch (error:any) {
        dispatch(registerFailure(error.message));
        error.response.data.message.forEach((err:any)=>toast.error(err));
    }
};



export const Login = (email:string,password:string) => async (dispatch: Dispatch) => {
    try{
        dispatch(loginRequest());
        const response = await axios.post('/api/rental/login',{email,password});
        console.log(response,'response');
        dispatch(loginSuccess(response.data));
       sessionStorage.setItem('rentals',JSON.stringify(response.data.data));
        response.data.message.forEach((mes:any) => toast.success(mes));
        window.location.href = '/rents/dashboard';


    }catch(error:any){
        console.log(error.response.data.message);
        dispatch(loginFailure(error.message));
        error.response.data.message.forEach((err:any)=>toast.error(err));
    }
}



export const Profile = (id:string) => async (dispatch: Dispatch) => {
    try{
        dispatch(profileRequest());
        const response = await axios.get(`/api/rental/profile/${id}`);
        dispatch(profileSuccess(response.data));
    }catch(error:any){
        dispatch(profileFailure(error.message));
        error.response.data.message.forEach((err:any)=>toast.error(err));
    }
};



export const UpdateProfile = (data: FormData,id:string) => async (dispatch: Dispatch) => {
    try {
        dispatch(updateProfileRequest());
        const response = await axios.put(`/api/rental/updateprofile/${id}`, data);
        dispatch(updateProfileSuccess(response.data));
        toast.success(response.data.message);
        window.location.href = '/rent/dashboard';
    } catch (error:any) {
        dispatch(updateProfileFailure(error.message));
        toast.error(error.message);
        error.response.data.message.forEach((err:any)=>toast.error(err));
    }
};



export const AddHouse = (data:FormData,id:string)=>async(dispatch:Dispatch)=>{
    try{
        dispatch(addhouseRequest());
        const response = await axios.post(`/api/rental/addhouse/${id}`,data);
        dispatch(addhouseSuccess(response.data));
        toast.success(response.data.message);
        window.location.href = '/rents/dashboard';
        

    }catch(error:any){
        dispatch(addhouseFailure(error.message));
        console.log(error.response.data.message.map((err:any)=>err));
        error.response.data.message.forEach((err:any)=>toast.error(err));
    }

};




export const GetHouse = (id:string)=>async(dispatch:Dispatch)=>{
    try{
        dispatch(houseRequest());
        const response = await axios.get(`/api/rental/houses/${id}`);
        dispatch(houseSuccess(response.data));
    }catch(error:any){
        dispatch(houseFailure(error.message));
        error.response.data.message.forEach((err:any)=>toast.error(err));
    }
};



export const HouseDetail = (id:string)=>async(dispatch:Dispatch)=>{
    try{
        dispatch(houseDetailRequest());
        const response = await axios.get(`/api/rental/housedetail/${id}`);
        dispatch(houseDetailSuccess(response.data));
    }catch(error:any){
        dispatch(houseDetailFailure(error.message));
        error.response.data.message.forEach((err:any)=>toast.error(err));
    }
};



export const UpdateHouse = (data:FormData,id:string)=>async(dispatch:Dispatch)=>{
    try{
        dispatch(updatehouseRequest());
        const response = await axios.put(`/api/rental/house/${id}`,data);
        dispatch(updatehouseSuccess(response.data));
        toast.success(response.data.message);
        window.location.href = '/rents/dashboard';
    }catch(error:any){
        dispatch(updatehouseFailure(error.message));
        toast.error(error.message);
        error.response.data.message.forEach((err:any)=>toast.error(err));
    }
};



export const DeleteHouse = (id:string)=>async(dispatch:Dispatch)=>{
    try{
        dispatch(deletehouseRequest());
        const response = await axios.delete(`/api/rental/deletehouse/${id}`);
        dispatch(deletehouseSuccess(response.data));
        toast.success(response.data.message);
        window.location.href = '/rents/viewhouse';
    }catch(error:any){
        dispatch(deletehouseFailure(error.message));
        error.response.data.message.forEach((err:any)=>toast.error(err));
    }
};



export const bookHouse = (id:string) => async (dispatch: Dispatch) => {
    try {
        dispatch(bookhouseRequest());
        const response = await axios.get(`/api/rental/booking/${id}`);
        dispatch(bookhouseSuccess(response.data));
        toast.success(response.data.message);
    } catch (error:any) {
        dispatch(bookhouseFailure(error.message));
        error.response.data.message.forEach((err:any)=>toast.error(err));
    }
}



export const ChangePassword = (id:string,data:object) => async (dispatch: Dispatch) => {
    try {
        dispatch(changepasswordRequest());
        const response = await axios.put(`/api/rental/changepassword/${id}`,data);
        dispatch(changepasswordSuccess(response.data));
        toast.success(response.data.message);
        window.location.href = '/rents/dashboard';
    } catch (error:any) {
        dispatch(changepasswordFailure(error.message));
        error.response.data.message.forEach((err:any)=>toast.error(err));
    }
}



export const logout = () => async (dispatch: Dispatch) => {
    try {
        dispatch(logoutRequest());
        const response = await axios.delete('/api/rental/logout');
        dispatch(logoutSuccess(response.data));
        console.log(response.data.message,'message');
        response.data.message.forEach((mes:any) => {
            toast.success(mes);
        });
        // toast.success(response.data.message);
        sessionStorage.removeItem('rentals');
        window.location.href = '/';
    } catch (error:any) {
        console.log(error.message);
        dispatch(logoutFailure(error.message));
        error.response.data.message.forEach((err:any)=>toast.error(err));
    }
}



export const dashboardss = (id:string) => async (dispatch: Dispatch) => {
    try {
        dispatch(dashboardRequest());
        const response = await axios.get(`/api/rental/dashboard/${id}`);
        dispatch(dashboardSuccess(response.data));
    } catch (error:any) {
        dispatch(dashboardFailure(error.message));
        error.response.data.message.forEach((err:any)=>toast.error(err));
    }
}










