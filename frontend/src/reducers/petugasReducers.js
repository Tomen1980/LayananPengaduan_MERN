import {
    ADMIN_LOGIN_REQUEST,
    ADMIN_LOGIN_SUCCESS,
    ADMIN_LOGIN_FAIL,
    ADMIN_LOGOUT,
    ADMIN_REGISTER_REQUEST,
    ADMIN_REGISTER_SUCCESS,
    ADMIN_REGISTER_FAIL,
    ADMIN_DETAILS_REQUEST,
    ADMIN_DETAILS_SUCCESS,
    ADMIN_DETAILS_FAIL,
    ADMIN_DETAILS_RESET,
    ADMIN_UPDATE_PROFILE_REQUEST,
    ADMIN_UPDATE_PROFILE_SUCCESS,
    ADMIN_UPDATE_PROFILE_FAIL,
    ADMIN_UPDATE_PROFILE_RESET,
    ADMIN_UPDATE_LEVEL_REQUEST,
    ADMIN_UPDATE_LEVEL_SUCCESS,
    ADMIN_UPDATE_LEVEL_FAIL,
    ADMIN_UPDATE_LEVEL_RESET,
    ADMIN_LIST_REQUEST,
    ADMIN_LIST_SUCCESS,
    ADMIN_LIST_FAIL,
    ADMIN_LIST_RESET,
    ADMIN_DELETE_REQUEST,
    ADMIN_DELETE_SUCCESS,
    ADMIN_DELETE_FAIL,
    
     } from '../constants/petugasConstants'
 
 
     export const adminLoginReducer = (state = { },action)=>{
         switch(action.type){
             case ADMIN_LOGIN_REQUEST:
                 return {loading: true}
             case ADMIN_LOGIN_SUCCESS:
                 return {loading:false, adminInfo:action.payload}
             case ADMIN_LOGIN_FAIL:
                 return {loading:false, error:action.payload}
             case ADMIN_LOGOUT:
                 return {}
             default:
                 return state
         }
     }

     export const adminRegisterReducer = (state = { },action)=>{
        switch(action.type){
            case ADMIN_REGISTER_REQUEST:
                return {loading: true}
            case ADMIN_REGISTER_SUCCESS:
                return {loading:false, adminInfo:action.payload}
            case ADMIN_REGISTER_FAIL:
                return {loading:false, error:action.payload}
            default:
                return state
        }
    }

    export const adminDetailsReducer = (state = { admins:{} },action)=>{
        switch(action.type){
            case ADMIN_DETAILS_REQUEST:
                return {...state,loading: true}
            case ADMIN_DETAILS_SUCCESS:
                return {loading:false, admins:action.payload}
            case ADMIN_DETAILS_FAIL:
                return {loading:false, error:action.payload}
            case ADMIN_DETAILS_RESET:
                return {admins: {}}
            default:
                return state
        }
    }

    export const adminUpdateProfileReducer = (state = {},action)=>{
        switch(action.type){
            case ADMIN_UPDATE_PROFILE_REQUEST:
                return {loading: true}
            case ADMIN_UPDATE_PROFILE_SUCCESS:
                return {loading:false,success:true, admins:action.payload}
            case ADMIN_UPDATE_PROFILE_FAIL:
                return {loading:false, error:action.payload}
            case ADMIN_UPDATE_PROFILE_RESET:
                return {}
            default:
                return state
        }
    }
    export const adminUpdateLevelReducer = (state = {},action)=>{
        switch(action.type){
            case ADMIN_UPDATE_LEVEL_REQUEST:
                return {loading: true}
            case ADMIN_UPDATE_LEVEL_SUCCESS:
                return {loading:false,success:true, admins:action.payload}
            case ADMIN_UPDATE_LEVEL_FAIL:
                return {loading:false, error:action.payload}
            case ADMIN_UPDATE_LEVEL_RESET:
                return {}
            default:
                return state
        }
    }

    export const adminListReducer = (state = { admins:[] },action)=>{
        switch(action.type){
            case ADMIN_LIST_REQUEST:
                return {loading: true}
            case ADMIN_LIST_SUCCESS:
                return {loading:false,admins:action.payload}
            case ADMIN_LIST_FAIL:
                return {loading:false, error:action.payload}
            case ADMIN_LIST_RESET:
                return { admins:[] }
            default:
                return state
        }
    }

    export const adminDeleteReducer = (state = { },action)=>{
        switch(action.type){
            case ADMIN_DELETE_REQUEST:
                return {loading: true}
            case ADMIN_DELETE_SUCCESS:
                return {loading:false,success:true}
            case ADMIN_DELETE_FAIL:
                return {loading:false, error:action.payload}
            default:
                return state
        }
    }