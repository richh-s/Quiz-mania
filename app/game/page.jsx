'use client'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { selectAnswer, startQuestionTimer, decrementQuestionTimer, nextQuestion } from '../redux/actions';
import Link from 'next/link';

const QuizPage = () => {
  const dispatch = useDispatch();
  const selectedAnswer = useSelector((state) => state.quiz.selectedAnswer);
  const questionNumber = useSelector((state) => state.quiz.questionNumber);
  const questionTimer = useSelector((state) => state.quiz.questionTimer);

  const handleAnswerClick = (answer) => {
    dispatch(selectAnswer(answer));

    if (questionTimer !== '00:00' && questionNumber < 10) {
      dispatch(nextQuestion());
    }
  };

  const buttonStyle = (answer) => {
    const defaultStyle = {
      borderRadius: '10px',
      border: '3px solid #FFC10A',
      background: 'linear-gradient(180deg, #FC830E 0%, #D24E02 100%)',
      boxShadow: '0px 1px 0px 3px #521B03',
      color: 'white',
      padding: '6px',
      margin: '2px',
    };

    const selectedStyle = {
      borderRadius: '15px',
      border: '3px solid #DF5E06',
      background: '#521B03',
    };

    return selectedAnswer === answer ? selectedStyle : defaultStyle;
  };

  useEffect(() => {
    dispatch(startQuestionTimer());
  }, [dispatch]);

  let timerInterval;  

  useEffect(() => {
    timerInterval = setInterval(() => {
      dispatch(decrementQuestionTimer());
    }, 1000);

    return () => clearInterval(timerInterval);  
  }, [dispatch]);

  useEffect(() => {
    if (questionTimer === '00:00' && questionNumber < 10) {
      clearInterval(timerInterval);  
      dispatch(nextQuestion());
    } else if (questionTimer === '00:00' && questionNumber === 10) {
      window.location.href = '/result';
    }
  }, [questionTimer, questionNumber, dispatch, timerInterval]);

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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-[#FFC00B] p-8 rounded-[15px] shadow-[0_2px_#521B03] border-[3px] border-[#521B03] mb-6 flex flex-col items-center"
          >
            <div className="w-full flex justify-center mb-4">
              <img src="/assets/card.png" alt="Question" className="rounded-[2px] w-[250px]" />
            </div>
            <p className="text-[#521B03] font-bold mb-6">What Year did Xxxtentacion die?</p>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-2 gap-4 w-full max-w-md mt-8"
        >
          {['Eiffel Tower', 'Moai', 'Taj Mahal', 'Kaaba'].map((answer) => (
            <motion.button
              key={answer}
              onClick={() => handleAnswerClick(answer)}
              style={buttonStyle(answer)}
              whileTap={{ scale: 0.95 }}
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

