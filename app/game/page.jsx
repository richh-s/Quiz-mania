'use client';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import {
  selectAnswer,
  startQuestionTimer,
  decrementQuestionTimer,
  nextQuestion,
} from '../redux/actions';

const QuizPage = () => {
  const dispatch = useDispatch();
  const questionNumber = useSelector((state) => state.quiz.questionNumber);
  const questionTimer = useSelector((state) => state.quiz.questionTimer);
  const selectedAnswer = useSelector((state) => state.quiz.selectedAnswer);

  const [isAnswered, setIsAnswered] = useState(false);
  const handleAnswerClick = (answer) => {
    if (!isAnswered && questionTimer !== '00:00') {
      dispatch(selectAnswer(answer));
      setIsAnswered(true);
  
      setTimeout(() => {
        if (questionNumber === 10) {
          // For the last question (question number 10)
          if (!selectedAnswer || questionTimer === '00:00') {
            // If the user didn't answer or the timer is '00:00', navigate to the result page
            window.location.href = '/result';
          } else {
            // If the user answers before the timer reaches '00:00', continue to the next question
            dispatch(nextQuestion());
            dispatch(startQuestionTimer());
            setIsAnswered(false);
          }
        } else {
          // For other questions
          if (questionTimer === '00:00' && !selectedAnswer) {
            // If the user didn't answer and the timer is '00:00', navigate to the result page
            window.location.href = '/result';
          } else {
            // If the user answers before the timer reaches '00:00' or the timer is '00:00', continue to the next question
            dispatch(nextQuestion());
            dispatch(startQuestionTimer());
            setIsAnswered(false);
          }
        }
      }, 100);
    }
  };
  
  
  
  useEffect(() => {
    dispatch(startQuestionTimer());
  }, [dispatch]);

  useEffect(() => {
    let timerInterval;

    if (questionTimer !== '00:00') {
      timerInterval = setInterval(() => {
        dispatch(decrementQuestionTimer());
      }, 1000);
    }

    return () => clearInterval(timerInterval);
  }, [dispatch, questionTimer]);

  useEffect(() => {
    if (questionTimer === '00:00' && !isAnswered) {
      dispatch(nextQuestion());
      dispatch(startQuestionTimer());
    }
  }, [questionTimer, dispatch, isAnswered]);

  const questionCardAnimation = {
    initial: { opacity: 0, y: -20, scale: 0.8 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -20, scale: 0.8 },
    transition: { duration: 1 },
  };

  const buttonAnimation = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
    transition: { duration: 0.5 },
  };

  const hoverButtonAnimation = {
    scale: 1.1,
    transition: { duration: 0.3 },
  };

  const questionCardAnimationKey = `questionCard-${questionNumber}`;

  return (
    <div className="relative flex flex-col items-center justify-center h-screen p-4 bg-gradient-to-b from-[#006C54] via-[#007359] to-[#024B3B]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 w-full h-full bg-[url('/assets/pattern.png')] bg-cover opacity-50"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 flex flex-col items-center text-white"
      >
        <img src="/assets/logo.png" alt="Quiz Mania" className="mb-6" />

        <div className="text-lg mb-6 text-center">
          <span>{questionTimer}</span>
          <h4>{`Question ${questionNumber} of 10`}</h4>
        </div>

        <AnimatePresence key={questionCardAnimationKey}>
          <motion.div
            key={questionCardAnimationKey}
            {...questionCardAnimation}
            className="bg-[#FFC00B] p-8 rounded-[15px] shadow-[0_2px_#521B03] border-[3px] border-[#521B03] mb-6 flex flex-col items-center"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full flex justify-center mb-4"
            >
              <img src="/assets/card.png" alt="Question" className="rounded-[2px] w-[250px]" />
            </motion.div>
            <motion.p
              className="text-[#521B03] font-bold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              What Year did Xxxtentacion die?
            </motion.p>
          </motion.div>
        </AnimatePresence>

        <motion.div
          {...buttonAnimation}
          className="grid grid-cols-2 gap-4 w-full max-w-md mt-8"
        >
          {['Eiffel Tower', 'Moai', 'Taj Mahal', 'Kaaba'].map((answer) => (
            <motion.button
              key={answer}
              onClick={() => handleAnswerClick(answer)}
              style={{
                borderRadius: '10px',
                border: '3px solid #FFC10A',
                background: selectedAnswer === answer ? '#521B03' : 'linear-gradient(180deg, #FC830E 0%, #D24E02 100%)',
                boxShadow: '0px 1px 0px 3px #521B03',
                color: selectedAnswer === answer ? 'white' : 'black',
                padding: '6px',
                margin: '2px',
                cursor: isAnswered ? 'not-allowed' : 'pointer',
              }}
              whileHover={hoverButtonAnimation}
            >
              {answer}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default QuizPage;
