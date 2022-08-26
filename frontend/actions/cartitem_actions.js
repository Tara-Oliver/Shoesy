import * as CartItemAPIUtil from '../util/cartitem_api_util';


export const RECEIVE_CARTITEMS = 'RECEIVE_CARTITEMS';
export const RECEIVE_CARTITEM = 'RECEIVE_CARTITEM';
export const REMOVE_CARTITEM = 'REMOVE_CARTITEM';


const receiveCartItems = (cartitems) => ({
    type: RECEIVE_CARTITEMS,
    cartitems
});

const receiveCartItem = (cartitem) => ({
    type: RECEIVE_CARTITEM,
    cartitem
});

const removeCartItem = (cartitemId) => ({
    type: REMOVE_CARTITEM,
    cartitemId
})


export const fetchCartItems = () => dispatch => {
    return CartItemAPIUtil.fetchCartItems()
        .then(cartitems => dispatch(receiveCartItems(cartitems)));
};

export const createCartItem = (cartitem) => dispatch => {
    return CartItemAPIUtil.createCartItem(cartitem)
        .then(cartitem => dispatch(receiveCartItem(cartitem)));
};

export const updateCartItem = (cartitem) => dispatch => {
    return CartItemAPIUtil.updateCartItem(cartitem)
        .then(cartitem => dispatch(receiveCartItem(cartitem)));
};

export const deleteCartItem = (cartitemId) => dispatch => {
    return CartItemAPIUtil.deleteCartItem(cartitemId)
        .then(() => dispatch(removeCartItem(cartitemId)));
};


