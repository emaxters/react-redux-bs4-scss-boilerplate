import React, { Component } from 'react';
import reduxDialog, { closeDialog, openDialog } from 'redux-reactstrap-modal';
import { connect } from "react-redux";
import { compose } from 'recompose';
import { bindActionCreators } from "redux";

import { FacebookLogin } from 'react-facebook-login-component';
import { GoogleLogin } from 'react-google-login-component';

import { login, fbLogin, googleLogin } from "../actions/index";
import LoginForm from './LoginForm';

class LoginModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        }
    }

    login() {
        this.props.login(this.state.username, this.state.password);        
    }

    render() {
        return (
            <div className="p-2">
                <div className="modal-header">
                    <h5 className="modal-title">Login</h5>
                    <button type="button" className="close" onClick={() => this.props.closeDialog('MODAL_LOGIN')}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <LoginForm />
                    <div className="row py-3 border-top mt-3">
                        <div className="col-6 pr-1">
                            <FacebookLogin socialId="189330161821065"
                                language="en_US"
                                scope="public_profile,email"
                                responseHandler={this.props.fbLogin}
                                xfbml={true}
                                fields="id,email,name"
                                version="v2.5"
                                className="facebook-login btn btn-facebook btn-block"
                                buttonText="Login with Facebook" />
                        </div>
                        <div className="col-6 pl-1">
                            <GoogleLogin socialId="407723343598-i9gnako98f76l3b64a059fo4ouaifap2.apps.googleusercontent.com"
                                className="google-login btn btn-google btn-block"
                                scope="profile"
                                fetchBasicProfile={false}
                                responseHandler={this.props.googleLogin}
                                buttonText="Login with Google" />
                        </div>
                    </div>
                    <div className="bg-light rounded p-3 text-center">
                        <div> Don't have an account?</div>
                        <div className="pt-3"><button type="submit" className="btn btn-primary btn-block" onClick={() => this.goToSignUp()}>Create an Account</button></div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ login, fbLogin, googleLogin, closeDialog, openDialog }, dispatch);
}

export default compose(reduxDialog({ name: 'MODAL_LOGIN', centered: true }), connect(null, mapDispatchToProps))(LoginModal);
