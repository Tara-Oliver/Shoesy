import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import Signup from './signup';

const mSTP = (state) => ({
  formType: 'signup'
})

const mDTP = (dispatch) => ({
  processForm: (user) => dispatch(signup(user)),
  otherForm: (
    <button onClick={() => dispatch(openModal('login'))}>
      Login
    </button>
  ),
  closeModal: () => dispatch(closeModal())
})




export default connect(mSTP, mDTP)(Signup);
