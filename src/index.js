import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import thunk from "redux-thunk";
import { loadingBarMiddleware } from 'react-redux-loading-bar';

import './styles/css/main.css';

import reducers from './reducers';

import Menu from './components/Menu';
import NotificationBar from './containers/NotificationBar';
import Footer from './components/Footer';
import LoginModal from './containers/LoginModal';
import Page from './containers/Page';
import Home from './components/Home';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(
            thunk,
            loadingBarMiddleware()
        )
    )
);

store.subscribe(() => {
    localStorage.setItem('TOKEN', store.getState().token);
});

ReactDOM.render(<Provider store={store}>
    <Router>
        <div className="container-fluid pt-5">
            <Menu />
            <NotificationBar />
            <Switch>
                <Route path="/page" component={Page} />
                <Route path="/" component={Home} />
            </Switch>
            <Footer />
            <LoginModal />
        </div>
    </Router>
</Provider>, document.getElementById('root'));
