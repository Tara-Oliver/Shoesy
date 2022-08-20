import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { login } from '../../actions/session_actions';
import { clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({ errors }) => ({
  errors: errors.session,
  formType: 'Register',
})

const mDTP = (dispatch) => ({
  processForm: (user) => dispatch(signup(user)),
  login: guest => dispatch(login(guest)),
  otherForm: (""),
  clearErrors: () => dispatch(clearErrors()),
})




export default connect(mSTP, mDTP)(SessionForm);
