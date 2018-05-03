import { combineReducers } from "redux";
import SampleReducer from "./sample_reducer";
import notificationsReducer from "./notifications";

import { reducer as form } from "redux-form";
import { loadingBarReducer } from 'react-redux-loading-bar';
import { dialogReducer } from 'redux-reactstrap-modal';

const rootReducer = combineReducers({
    data: SampleReducer,
    loadingBar: loadingBarReducer,
    form,
    dialogReducer,
    notifications: notificationsReducer

});

export default rootReducer;
