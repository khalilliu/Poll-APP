import { savePollAnswer } from "../utils/api";

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
    savePollAnswer(answerData).then(() => dispatch(addAnswer(answerData)));
  };
}
