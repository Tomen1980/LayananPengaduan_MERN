import {
    TANGGAPAN_LIST_REQUEST,
    TANGGAPAN_LIST_SUCCESS,
    TANGGAPAN_LIST_FAIL,
    TANGGAPAN_LIST_RESET,
    TANGGAPAN_LIST_USER_REQUEST,
    TANGGAPAN_LIST_USER_SUCCESS,
    TANGGAPAN_LIST_USER_FAIL,
    TANGGAPAN_LIST_USER_RESET,
    TANGGAPAN_DELETE_REQUEST,
    TANGGAPAN_DELETE_SUCCESS,
    TANGGAPAN_DELETE_FAIL,
    TANGGAPAN_DETAILS_REQUEST,
    TANGGAPAN_DETAILS_SUCCESS,
    TANGGAPAN_DETAILS_FAIL,
    TANGGAPAN_DETAILS_RESET,
    TANGGAPAN_ADD_REQUEST,
    TANGGAPAN_ADD_SUCCESS,
    TANGGAPAN_ADD_FAIL,
    TANGGAPAN_ADD_RESET,
    TANGGAPAN_STATUS_REQUEST,
    TANGGAPAN_STATUS_SUCCESS,
    TANGGAPAN_STATUS_FAIL,
    TANGGAPAN_STATUS_RESET,
     } from '../constants/tanggapanConstants'

export const pengaduanListReducer = (state = { tanggapans:[] },action)=>{
    switch(action.type){
        case TANGGAPAN_LIST_REQUEST:
            return {loading: true}
        case TANGGAPAN_LIST_SUCCESS:
            return {loading:false,tanggapans:action.payload}
        case TANGGAPAN_LIST_FAIL:
            return {loading:false, error:action.payload}
        case TANGGAPAN_LIST_RESET:
            return { tanggapans:[] }
        default:
            return state
    }
}
export const tanggapanListReducer = (state = { tanggapans:[] },action)=>{
    switch(action.type){
        case TANGGAPAN_LIST_REQUEST:
            return {loading: true}
        case TANGGAPAN_LIST_SUCCESS:
            return {loading:false,tanggapans:action.payload}
        case TANGGAPAN_LIST_FAIL:
            return {loading:false, error:action.payload}
        case TANGGAPAN_LIST_RESET:
            return { tanggapans:[] }
        default:
            return state
    }
}

export const pengaduanDeleteAdminReducer = (state = { },action)=>{
    switch(action.type){
        case TANGGAPAN_DELETE_REQUEST:
            return {loading: true}
        case TANGGAPAN_DELETE_SUCCESS:
            return {loading:false,success:true}
        case TANGGAPAN_DELETE_FAIL:
            return {loading:false, error:action.payload}
        default:
            return state
    }
}

export const tanggapanDeleteReducer = (state = { },action)=>{
    switch(action.type){
        case TANGGAPAN_DELETE_REQUEST:
            return {loading: true}
        case TANGGAPAN_DELETE_SUCCESS:
            return {loading:false,success:true}
        case TANGGAPAN_DELETE_FAIL:
            return {loading:false, error:action.payload}
        default:
            return state
    }
}

export const pengaduanDetailsAdminReducer = (state = { pengaduans:{} },action)=>{
    switch(action.type){
        case TANGGAPAN_DETAILS_REQUEST:
            return {...state,loading: true}
        case TANGGAPAN_DETAILS_SUCCESS:
            return {loading:false, pengaduans:action.payload}
        case TANGGAPAN_DETAILS_FAIL:
            return {loading:false, error:action.payload}
        case TANGGAPAN_DETAILS_RESET:
            return {pengaduans: {}}
        default:
            return state
    }
}

export const tanggapanStatusReducer = (state = { tanggapans:{} },action)=>{
    switch(action.type){
        case TANGGAPAN_STATUS_REQUEST:
            return {loading: true}
        case TANGGAPAN_STATUS_SUCCESS:
            return {loading:false,success:true}
        case TANGGAPAN_STATUS_FAIL:
            return {loading:false, error:action.payload}
        case TANGGAPAN_STATUS_RESET:
            return{
                tanggapans:{}
            }
        default:
            return state
    }
}

export const tanggapanAddReducer = (state={},action)=>{
    switch(action.type){
        case TANGGAPAN_ADD_REQUEST:
            return {loading: true}
        case TANGGAPAN_ADD_SUCCESS:
            return {loading:false, success:true, tanggapan:action.payload}
        case TANGGAPAN_ADD_FAIL:
            return {loading:false, error:action.payload}
        case TANGGAPAN_ADD_RESET:
            return {}
        default:
            return state
    }
}

export const tanggapanUserListReducer = (state = { tanggapans:[] },action)=>{
    switch(action.type){
        case TANGGAPAN_LIST_USER_REQUEST:
            return {loading: true}
        case TANGGAPAN_LIST_USER_SUCCESS:
            return {loading:false,tanggapans:action.payload}
        case TANGGAPAN_LIST_USER_FAIL:
            return {loading:false, error:action.payload}
        case TANGGAPAN_LIST_USER_RESET:
            return { tanggapans:[] }
        default:
            return state
    }
}