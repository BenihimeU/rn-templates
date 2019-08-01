import { createStore } from 'redux';
import SongReducer from './reducers';

const Store = createStore(SongReducer);

export default Store;