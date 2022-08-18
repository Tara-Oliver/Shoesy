import React from "react";
import { Link } from 'react-router-dom';
import { openModal } from "../../actions/modal_actions";

class Signin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleModal = this.handleModal.bind(this)
        this.handleGuest = this.handleGuest.bind(this)
    }

    update(type) {
        return e => {
            this.setState({ [type]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        debugger
        this.props.login(user)
        .then(() => (this.props.closeModal));
    }

    handleModal(e){
        e.preventDefault();
        this.props.openModal('signup')
    }

    handleGuest(e) {
        e.preventDefault();
        const { login, closeModal } = this.props;
        const guestUser = {
            email: 'test',
            username: '',
            password: '123456'
        };
        login(guestUser).then(closeModal);
    }


    render() {
        return (
            <div className="signin-form">
                <form >
                    <h3>Sign in</h3>
                    <button className="signup-btn" onClick={this.handleModal}>Register</button>
                    {this.props.
                    otherForm}
                    <div onClick={this.props.closeModal} className="close-btn">X</div>
                    <label>Email address*
                        <input
                            type='text'
                            value={this.state.email}
                            onChange={this.update('email')}
                        />
                    </label>

                    <label>Password*
                        <input
                            type='password'
                            value={this.state.password}
                            onChange={this.update('password')}
                        />
                    </label>
                    <button onClick={this.handleSubmit} className="signin-btn">Sign in</button>
                  
                    <button className="signin-btn" onClick={this.handleGuest}>Guest Demo</button>
                </form>
            </div>
        )
    }

}

export default Signin;