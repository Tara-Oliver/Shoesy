import React from "react";
import { connect } from "react-redux";
import CartShow from "./cart_show";

const mSTP = (state) => ({
    currentUser: state.session.currentUser
})




export default connect(mSTP, null)(CartShow)