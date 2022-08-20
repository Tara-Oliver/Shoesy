import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import SessionForm from './session_form'
import { clearErrors } from '../../actions/session_actions';


const mSTP = ({ errors }) => ({
  errors: errors.session,
  formType: 'Sign in'
})

const mDTP = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
  login: guest => dispatch(login(guest)),
  otherForm: (
    <button onClick={() => dispatch(openModal('signup'))} className="register-btn">
      Register
    </button>
  ),
  clearErrors: () => dispatch(clearErrors()),
})

export default connect(mSTP, mDTP)(SessionForm);
