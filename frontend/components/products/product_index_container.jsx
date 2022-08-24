import ProductIndex from "./product_index";
import { fetchProducts } from "../../actions/product_actions";
import { connect } from "react-redux";
import React from 'react';

const mSTP = (state) => ({
    prods: Object.values(state.entities.products)
});


const mDTP = (dispatch) => ({
    fetchProducts: () => dispatch(fetchProducts())
});



export default connect(mSTP, mDTP)(ProductIndex);