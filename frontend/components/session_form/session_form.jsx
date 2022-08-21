import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleGuest = this.handleGuest.bind(this);
        this.handleModal = this.handleModal.bind(this)
    }
    componentDidMount() {
        this.props.clearErrors();
        this.setState({
            email: '',
            username: '',
            password: '',
        })
    }
    componentWillUnmount() {
        this.props.clearErrors();
        this.setState({
            email: '',
            username: '',
            password: '',
        })

    }
   

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { processForm, closeModal, history } = this.props;
        const user = Object.assign({}, this.state);
        processForm(user)
            .then(closeModal())
            .then(() => history.push(`/users/${user.id}`))
    }

    handleModal(e) {
        e.preventDefault();
        this.props.openModal('signup')
    }

    handleGuest(e) {
        e.preventDefault();
        const { login, closeModal } = this.props;
        const guestUser = {
            id: 1,
            email: 'guest@gmail.com',
            username: 'Demo User',
            password: '123456'
        };
        login(guestUser)
            .then(closeModal())
            .then(() => this.props.history.push(`/users/${guestUser.id}`));
    }

    render() {
        const { formType, errors, otherForm } = this.props;
        const title = formType === 'Sign in' ? "Sign in" : "Create your account";
        const subtitle = formType === 'Sign in' ? "" : "Registration is easy.";
        const clssNam = formType === 'Sign in' ? "login-form-container" : "signup-form-container";
        const err1 = errors[0];
        const err2 = errors[1];
        const err3 = formType === 'Sign in' ? errors[0] : errors[2];
        const inptClsNam = errors.length === 0 ? "login-input" : "errored-input";
        const userName = formType === 'Register' ? (
            <label>Username
                <div>
                    <input type="text" value={this.state.username}
                        onChange={this.update('username')}
                        className={inptClsNam} />

                </div>
            </label>
        ) : ("");

        return (
            <div className={clssNam}>
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <div className="login-form-header">
                        <h2>{title}</h2>
                        {otherForm}
                    </div>
                    <h3>{subtitle}</h3>
                    
                    <div className="login-form">
                        <div>
                            <label>Email address
                                <div>
                                    <input type="text"
                                        value={this.state.email}
                                        onChange={this.update('email')}
                                        className={inptClsNam}
                                        autoFocus="autofocus"
                                    />
                                </div>
                            </label>
                        </div>
                        <p>{err1}</p>
                        <div>
                            {userName}
                        </div>
                        <p>{err2}</p>
                        <div>
                            <label>Password
                                <div>
                                    <input type="password"
                                        value={this.state.password}
                                        onChange={this.update('password')}
                                        className={inptClsNam}
                                    />

                                </div>
                            </label>
                        </div>
                        <p>{err3}</p>
                        <div>
                            <button type="submit" className="session-submit" value={formType}>{formType}</button>
                        </div>
                        <div>
                            <span>OR</span>
                            <button type="button" onClick={this.handleGuest} className="guest-submit">Guest Demo</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SessionForm);
