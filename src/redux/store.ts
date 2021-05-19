import { createStore } from 'redux';
import sampleReducer from './sample/reducer';

const store = createStore(sampleReducer);

export default store;
