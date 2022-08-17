import React from "react";
import { Link } from 'react-router-dom';

class Signin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(type) {
        return e => {
            this.setState({ [type]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.login(user)
        .then(this.props.closeModal);
    }

    render() {
        return (
            <div className="signin-form">
                <form>
                    <h3>Sign in</h3>
                    <button className="signup-btn" onClick={this.props.openModal}>Register</button>
                    <div onClick={this.props.closeModal} className="close-x">X</div>
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
                    <button className="signin-btn" onClick={this.handleSubmit}>Sign in</button>
                </form>
            </div>
        )
    }




}

export default Signin;