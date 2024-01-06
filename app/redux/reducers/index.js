// reducers.js
const countdownInitialState = {
    countdown: 3,
  };
  
  export const countdownReducer = (state = countdownInitialState, action) => {
    switch (action.type) {
      case 'SET_COUNTDOWN':
        return {
          ...state,
          countdown: action.payload,
        };
      default:
        return state;
    }
  };
  
  const quizInitialState = {
    selectedAnswer: null,
    questionNumber: 1,
    questionTimer: '00:03',
  };
  
  export const quizReducer = (state = quizInitialState, action) => {
    switch (action.type) {
      case 'SELECT_ANSWER':
        return {
          ...state,
          selectedAnswer: action.payload,
        };
      case 'NEXT_QUESTION':
        return {
          ...state,
          selectedAnswer: null,
          questionNumber: state.questionNumber + 1,
          questionTimer: '01:00',
        };
      case 'START_QUESTION_TIMER':
        return {
          ...state,
          questionTimer: '00:03',
        };
      case 'DECREMENT_QUESTION_TIMER':
        const [minutes, seconds] = state.questionTimer.split(':').map(Number);
        const totalSeconds = minutes * 60 + seconds - 1;
  
        const newMinutes = Math.floor(totalSeconds / 60);
        const newSeconds = totalSeconds % 60;
  
        return {
          ...state,
          questionTimer: `${String(newMinutes).padStart(2, '0')}:${String(newSeconds).padStart(2, '0')}`,
        };
      default:
        return state;
    }
  };
  