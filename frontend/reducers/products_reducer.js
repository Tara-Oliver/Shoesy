import { RECEIVE_PRODUCTS, RECEIVE_PRODUCT, RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/product_actions';




const ProductsReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return action.products;
        case RECEIVE_PRODUCT:
            const newProduct = { [action.product.id]: action.product };
            return Object.assign({}, state, newProduct);
        default:
            return state;
    }
};

export default ProductsReducer;