import * as APIUtil from '../util/product_api_util';


export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

const receiveProducts = (products) => ({
    type: RECEIVE_PRODUCTS,
    products
})

const receiveProduct = (product, reviews) => ({
    type: RECEIVE_PRODUCT,
    product,
    reviews
})

const removeReview = (reviewId) => ({
    type: REMOVE_REVIEW,
    reviewId
})

export const fetchProducts = () => dispatch => {
    return APIUtil.fetchProducts()
        .then(products => dispatch(receiveProducts(products)))
}

export const fetchProduct = (productId) => dispatch => {
    return APIUtil.fetchProduct(productId)
        .then(payload => dispatch(receiveProduct(payload)))
}


export const createReview = (review) => dispatch => {
    return APIUtil.createReview(review)
        .then(review => dispatch(receiveReview(review)))
}


export const updateReview = (review) => dispatch => {
    return APIUtil.createReview(review)
        .then(review => dispatch(receiveReview(review)))
}

export const deleteReview = (reviewId) => dispatch => {
    return APIUtil.deleteReview(reviewId)
        .then(() => dispatch(removeReview(reviewId)))
}