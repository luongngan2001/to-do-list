import { legacy_createStore as createStore, combineReducers} from "redux";

const rootReducer = combineReducers({

})

export const configureStore = () => {
    return createStore(rootReducer);
}