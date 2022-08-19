import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { openModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';

const mSTP = (state) => ({
  currentUser: state.session.currentUser
});

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal))
});




export default connect(mSTP, mDTP)(NavBar);
