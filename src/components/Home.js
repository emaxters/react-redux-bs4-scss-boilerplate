import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="mt-5 p-5">
                <h1>Home</h1>
                <p>React Boilerplate with Redux, with Bootstrap 4 for UI with SCSS and Social Logins. Most commonly used utility libraries such as Moment and Lodash are included. Axios is used to access REST APIs and Thunk used as the Middleware.</p>
                <a href="#page">Go to Sub Page</a>
            </div>
        );
    }
}

export default Home;
