import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { clearNotification } from "../actions/index";

class NotificationBar extends Component {

    componentDidUpdate() {
        const { clearNotification, notifications } = this.props;
        if (notifications.message) {
            setTimeout(function () {
                clearNotification();
            }, 10000);
        }
    }

    renderNotification() {
        const { type, message } = this.props.notifications;
        return (
            <div className="py-1">
                <div className={`mb-0 alert alert-${type}`} >{message} </div>
            </div>
        );
    }

    render() {
        const { type, message } = this.props.notifications;
        return (
            <div>
                {type ? this.renderNotification() : ""}
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ clearNotification }, dispatch);
}

function mapStateToProps({ notifications }) {
    return { notifications };
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationBar);
