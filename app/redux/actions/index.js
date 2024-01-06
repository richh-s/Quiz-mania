// actions.js// actions/countdownActions.js
export const setCountdown = (count) => ({
    type: 'SET_COUNTDOWN',
    payload: count,
  });
  
  // quizActions.js
export const selectAnswer = (answer) => {
    return {
      type: 'SELECT_ANSWER',
      payload: answer,
    };
  };
  
  export const nextQuestion = () => {
    return {
      type: 'NEXT_QUESTION',
    };
  };
  
  export const startQuestionTimer = () => {
    return {
      type: 'START_QUESTION_TIMER',
    };
  };
  
  export const decrementQuestionTimer = () => {
    return {
      type: 'DECREMENT_QUESTION_TIMER',
    };
  };
  