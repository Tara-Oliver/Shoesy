import * as ProductAPIUtil from '../util/product_api_util';


export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';


const receiveProducts = (products) => ({
    type: RECEIVE_PRODUCTS,
    products
})

const receiveProduct = (product, reviews) => ({
    type: RECEIVE_PRODUCT,
    product,
    reviews
})


export const fetchProducts = () => dispatch => {
    return ProductAPIUtil.fetchProducts()
        .then(products => dispatch(receiveProducts(products)))
}

export const fetchProduct = (productId) => dispatch => {
    return ProductAPIUtil.fetchProduct(productId)
        .then(payload => dispatch(receiveProduct(payload)))
}


