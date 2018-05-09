import { RECEIVE_POLLS } from "../actions/polls";
import { ADD_ANSWER } from "../actions/answers";

export default function polls(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POLLS:
      return {
        ...state,
        ...action.polls
      };
    case ADD_ANSWER:
      const { answer, pollId, authedUser } = action;
      const poll = state[pollId];
      const votesKey = answer + "Votes";

      return {
        ...state,
        [action.pollId]: {
          ...poll,
          [votesKey]: poll[votesKey].concat([authedUser])
        }
      };

    default:
      return state;
  }
}
