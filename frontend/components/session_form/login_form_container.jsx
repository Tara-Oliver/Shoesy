import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import Signin from './signin';

const mSTP = () => ({
  formType: 'login'
})

const mDTP = (dispatch) => ({
  login: (user) => dispatch(login(user)),
    openModal: () => dispatch(openModal('signup')),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(Signin);
