import {
    RECEIVE_CARTITEMS,
    RECEIVE_CARTITEM,
    REMOVE_CARTITEM
} from '../actions/cartitem_actions';


const CartItemsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_CARTITEMS:
            return action.cartitems;
        case RECEIVE_CARTITEM:
            newState[action.cartitem.id] = action.cartitem;
            return newState;
        case REMOVE_CARTITEM:
            delete newState[action.cartitemId];
            return newState;
        default:
            return oldState;
    }
};

export default CartItemsReducer;