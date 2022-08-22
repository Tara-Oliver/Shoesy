import { connect } from "react-redux";
import { fetchProducts } from "../../actions/product_actions";
import ProductIndex from "./product_index";

const mSTP = (state) => ({
    prods: Object.values(state.entities)
})

const mDTP = (dispatch) => ({
    fetchProducts: () => dispatch(fetchProducts())
})

export default connect(mSTP, mDTP)(ProductIndex)