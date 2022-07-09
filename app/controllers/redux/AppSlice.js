import { combineReducers } from "redux"
import HomeSlice from "../../modules/home/HomeSlice"
import LoginSlice from '../../modules/auth/login/LoginScreen'
import RegisterSlice from '../../modules/auth/register/RegisterSlice'

const reducers = combineReducers({
    home: HomeSlice,
    login: LoginSlice,
    register: RegisterSlice
})

const rootReducer = (state, action) => {
    return reducers(state, action)
}

export default rootReducer
