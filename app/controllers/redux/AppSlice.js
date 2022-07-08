import { combineReducers } from "redux"
import HomeSlice from "../../modules/home/HomeSlice"
import LoginSlice from '../../modules/login/LoginSlice'

const reducers = combineReducers({
    home: HomeSlice,
    login: LoginSlice
})

const rootReducer = (state, action) => {
    return reducers(state, action)
}

export default rootReducer
