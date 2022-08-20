import React from "react";

class Signup extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            email: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(type) {
        return e => {
            this.setState({ [type]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="session-form">
                <form>
                <h3>Create your account</h3>
                <p>Registration is easy.</p>
                    <div onClick={this.props.closeModal} className="close-btn">X</div>
                    <label>Email address*
                        <input
                        type='text'
                        value={this.state.email}
                        onChange={this.handleInput('email')}
                        />
                    </label>

                    <label>Username*
                        <input
                            type='text'
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                        />
                    </label>

                    <label>Password*
                        <input
                            type='password'
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                    </label>
                    <button onClick={this.handleSubmit}>Register</button>
                    {this.renderErrors()}
                </form>
            </div>
        )
    }




}

export default Signup;