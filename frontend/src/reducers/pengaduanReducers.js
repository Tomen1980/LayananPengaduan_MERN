import {
    PENGADUAN_CREATE_REQUEST,
    PENGADUAN_CREATE_SUCCESS,
    PENGADUAN_CREATE_FAIL,
    PENGADUAN_CREATE_RESET,
    PENGADUAN_LIST_USER_REQUEST,
    PENGADUAN_LIST_USER_SUCCESS,
    PENGADUAN_LIST_USER_FAIL,
    PENGADUAN_LIST_USER_RESET,
    PENGADUAN_DELETE_REQUEST,
    PENGADUAN_DELETE_SUCCESS,
    PENGADUAN_DELETE_FAIL,
     } from '../constants/pengaduanConstants'

     export const pengaduanCreateReducer = (state={},action)=>{
        switch(action.type){
            case PENGADUAN_CREATE_REQUEST:
                return {loading: true}
            case PENGADUAN_CREATE_SUCCESS:
                return {loading:false, success:true, pengaduan:action.payload}
            case PENGADUAN_CREATE_FAIL:
                return {loading:false, error:action.payload}
            case PENGADUAN_CREATE_RESET:
                return {}
            default:
                return state
        }
    }
    
    export const pengaduanUserListReducer = (state = { pengaduans:[] },action)=>{
        switch(action.type){
            case PENGADUAN_LIST_USER_REQUEST:
                return {loading: true}
            case PENGADUAN_LIST_USER_SUCCESS:
                return {loading:false,pengaduans:action.payload}
            case PENGADUAN_LIST_USER_FAIL:
                return {loading:false, error:action.payload}
            case PENGADUAN_LIST_USER_RESET:
                return { pengaduans:[] }
            default:
                return state
        }
    }

    export const pengaduanDeleteReducer = (state = { },action)=>{
        switch(action.type){
            case PENGADUAN_DELETE_REQUEST:
                return {loading: true}
            case PENGADUAN_DELETE_SUCCESS:
                return {loading:false,success:true}
            case PENGADUAN_DELETE_FAIL:
                return {loading:false, error:action.payload}
            default:
                return state
        }
    }


 
 