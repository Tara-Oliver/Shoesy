import { connect } from 'react-redux';
import { fetchProduct } from '../../actions/product_actions';
import { createCartItem } from '../../actions/cartitem_actions';
import ProductShow from './product_show';
import { openModal } from '../../actions/modal_actions';
import React from 'react';


const mSTP = (state, ownProps) => ({
    product: state.entities.products[ownProps.match.params.productId],
    currentUser: state.session.currentUser
});


const mDTP = (dispatch) => ({
    fetchProduct: productId => dispatch(fetchProduct(productId)),
    createCartItem: cartitem => dispatch(createCartItem(cartitem)),
    openModal: modal => dispatch(openModal(modal))
});

export default connect(mSTP, mDTP)(ProductShow);