import { getInitialData } from "../utils/api";
import { receiveUsers } from "../actions/users";
import { receivePolls } from "../actions/polls";
import { setAuthedUser } from "../actions/authedUser";

import { showLoading, hideLoading } from "react-redux-loading";

const AUTHER_ID = "tylermcginnis";

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    return getInitialData().then(({ users, polls }) => {
      dispatch(hideLoading());
      dispatch(receiveUsers(users));
      dispatch(receivePolls(polls));
      dispatch(setAuthedUser(AUTHER_ID));
    });
  };
}
