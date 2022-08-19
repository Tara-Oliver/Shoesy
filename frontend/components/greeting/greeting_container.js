import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

const mSTP = state => ({
  currentUser: state.session.currentUser
});


export default connect(mSTP,null)(Greeting);
