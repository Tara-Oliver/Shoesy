import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import UserShow from './user_show';

const mSTP = state => ({
  currentUser: state.session.currentUser
});


export default connect(mSTP,null)(UserShow);
