import {createStore, combineReducers, applyMiddleware} from "redux"
import thunk from 'redux-thunk'
import  {composeWithDevTools} from "redux-devtools-extension"

import {
    userLoginReducer,
    userRegisterReducer,
    userDetailsReducer,
    userUpdateProfileReducer,
    userListReducer,
    userDeleteReducer
} from './reducers/masyarakatReducers'

import {
   pengaduanListReducer,
   pengaduanDeleteAdminReducer,
   pengaduanDetailsAdminReducer,
   tanggapanStatusReducer,
   tanggapanAddReducer,
   tanggapanUserListReducer,
   tanggapanDeleteReducer,
   tanggapanListReducer
} from './reducers/tanggapanReducers'
import {
    pengaduanUserListReducer,
    pengaduanDeleteReducer,
    pengaduanCreateReducer,
} from './reducers/pengaduanReducers'

import {
    adminLoginReducer,
    adminRegisterReducer,
    adminDetailsReducer,
    adminUpdateProfileReducer,
    adminListReducer,
    adminDeleteReducer,
    adminUpdateLevelReducer
} from './reducers/petugasReducers'

const reducer = combineReducers({
    userLogin : userLoginReducer,
    userDetails : userDetailsReducer,
    userRegister : userRegisterReducer,
    userList : userListReducer,
    userDelete : userDeleteReducer,
    userUpdateProfile : userUpdateProfileReducer,
    pengaduanCreate : pengaduanCreateReducer,
    pengaduanList : pengaduanListReducer,
    pengaduanDelete : pengaduanDeleteReducer,
    pengaduanDeleteAdmin : pengaduanDeleteAdminReducer,
    pengaduanDetailsAdmin : pengaduanDetailsAdminReducer,
    pengaduanUserList : pengaduanUserListReducer,
    tanggapanStatus : tanggapanStatusReducer,
    tanggapanAdd : tanggapanAddReducer,
    tanggapanDelete : tanggapanDeleteReducer,
    tanggapanUserList : tanggapanUserListReducer,
    adminLogin : adminLoginReducer,
    adminRegister : adminRegisterReducer,
    adminDetails :  adminDetailsReducer,
    adminUpdateProfile : adminUpdateProfileReducer,
    adminList : adminListReducer,
    adminDelete : adminDeleteReducer,
    adminUpdateLevel : adminUpdateLevelReducer,
    tanggapanList : tanggapanListReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse
(localStorage.getItem('userInfo')) : null
const adminInfoFromStorage = localStorage.getItem('adminInfo') ? JSON.parse
(localStorage.getItem('adminInfo')) : null

// const pengaduanInfoFromStorage = localStorage.getItem('pengaduan') ? JSON.parse
// (localStorage.getItem('pengaduan')) : {}

const initialState = {
    userLogin: {userInfo:userInfoFromStorage},
    adminLogin: {adminInfo:adminInfoFromStorage},
    // pengaduan: {pengaduan:pengaduanInfoFromStorage}
}

const middleware = [thunk]

const store = createStore(
reducer, 
initialState, 
composeWithDevTools(applyMiddleware(...middleware)))

export default store