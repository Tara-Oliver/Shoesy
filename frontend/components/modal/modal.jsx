import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';

const Modal = ({modal, closeModal}) => {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-container">
        <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
        </div>
        <div onClick={closeModal} className="close-x"><span>X</span></div>
      </div>
    </div>
  );
}

const mSTP = (state) => {
  return {
    modal: state.ui.modal
  };
};

const mDTP = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mSTP, mDTP)(Modal);
