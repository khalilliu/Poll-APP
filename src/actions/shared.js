import { getInitialData } from "../utils/api";
import { receiveUsers } from "../actions/users";
import { receivePolls } from "../actions/polls";
import { setAuthedUser } from "../actions/authedUser";

const AUTHER_ID = "tylermcginnis";

export function handleInitialData() {
  return dispatch => {
    return getInitialData().then(({ users, polls }) => {
      dispatch(receiveUsers(users));
      dispatch(receivePolls(polls));
      dispatch(setAuthedUser(AUTHER_ID));
    });
  };
}
