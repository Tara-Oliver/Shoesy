import { combineReducers } from "redux";
import ProductsReducer from "./products_reducer";
import CartItemsReducer from "./cartitem_reducer";

const EntitiesReducer = combineReducers({
    products: ProductsReducer,
    cartitem: CartItemsReducer
});

export default EntitiesReducer;