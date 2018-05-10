import { savePollAnswer } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";

export const ADD_ANSWER = "ADD_ANSWER";

export function addAnswer(answerData) {
  return {
    type: ADD_ANSWER,
    pollId: answerData.pollId,
    authedUser: answerData.authedUser,
    answer: answerData.answer
  };
}

export function handleAddAnswer(answerData) {
  return dispatch => {
    dispatch(showLoading());
    savePollAnswer(answerData)
      .then(() => dispatch(addAnswer(answerData)))
      .then(() => dispatch(hideLoading()));
  };
}
