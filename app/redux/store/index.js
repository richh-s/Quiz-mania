import { createStore, combineReducers } from 'redux';
import { countdownReducer, quizReducer } from '../reducers';

const rootReducer = combineReducers({
  countdown: countdownReducer,
  quiz: quizReducer,
});

const store = createStore(rootReducer);

export default store;
