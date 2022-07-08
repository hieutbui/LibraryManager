import { combineReducers } from "redux"
import HomeSlice from "../../modules/home/HomeSlice"

const reducers = combineReducers({
    home: HomeSlice,
})

const rootReducer = (state, action) => {
    return reducers(state, action)
}

export default rootReducer
