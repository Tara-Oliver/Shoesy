import { combineReducers } from "redux";
import ProductsReducer from "./products_reducer";

const EntitiesReducer = combineReducers({
    products: ProductsReducer
})

export default EntitiesReducer;