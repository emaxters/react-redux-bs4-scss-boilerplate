import React, { Component } from 'react';
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import { login } from "../actions/index";

class LoginForm extends Component {
    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? "has-danger" : ""}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control" type={field.type || "text"} {...field.input} />
                <div className="text-help">
                    {touched ? error : ""}
                </div>
            </div>
        );
    }

    onSubmit(values) {
        this.props.login(values);
    }

    render() {
        const { handleSubmit } = this.props;

        console.log(this.props);
        return (
            <form onSubmit={handleSubmit(this.props.login)}>
                <Field
                    label="Username"
                    name="username"
                    component={this.renderField}
                />
                <Field
                    label="Password"
                    name="password"
                    component={this.renderField}
                    type="password"
                />
                

                <button type="submit" className="btn btn-primary btn-block">Login</button>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    // Validate the inputs from 'values'
    if (!values.username) {
        errors.username = "Enter the Username";
    }
    if (!values.password) {
        errors.password = "Enter the Password";
    }
    return errors;
}

export default reduxForm({
    validate,
    form: "LoginForm"
})(connect(null, { login })(LoginForm));
