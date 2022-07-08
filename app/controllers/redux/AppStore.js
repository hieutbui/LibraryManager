import { createStore, applyMiddleware, compose, Store } from "redux"
import reducers from './AppSlice'
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2"
import thunk from 'redux-thunk'
import { persistReducer, persistStore, PersistConfig } from 'redux-persist'
import storage from '@react-native-async-storage/async-storage'
import { createBlacklistFilter, createWhitelistFilter } from 'redux-persist-transform-filter'
import _ from 'lodash'

function logger({ getState, dispatch }) {
    return next => action => {
        console.log('[Redux Logger Middleware-Update State]')
        console.log('[Action]', action.type, action.payload)

        // Call the next dispatch method in the middleware chain.
        const returnValue = next(action)

        // console.log('state after dispatch', getState())

        // This will likely be the action itself, unless
        // a middleware further in chain changed it.
        return returnValue
    }
}

const middleware = [thunk, logger]

const persistConfig: PersistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
    transforms: [
        // createWhitelistFilter là hàm dùng để filter những attribute cần lưu
        // vào presist
        //createWhitelistFilter('discover', ['members', 'lastTimeRefresh', 'tabItems', 'gender', 'country', 'bannerLink']),
        /* black list */
        //createBlacklistFilter('account', ['NetworkState']),
        //createBlacklistFilter('room', ['currentChatRoomId'])
    ],
    whitelist: [], //add which reducer to persist
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ({
        trace: true,
        traceLimit: 25,
    }) || compose

export const store: Store = createStore(
    persistReducer(persistConfig, reducers),
    composeEnhancers(
        applyMiddleware(...middleware),
    )
)

export const persistor = persistStore(store, {}, () => {})
