/**
 * Created by william on 2019/7/1 18:16
 * Develop by william on 2019/7/1 18:16
 */

import { createStore } from 'redux';

import rootReducers from './rootReducers';

const storeConfigure = (initState = {}) => createStore(rootReducers, initState);

export default storeConfigure();
