/**
 * Created by william on 2019/7/1 18:05
 * Develop by william on 2019/7/1 18:05
 */
import Constants from '../Constants';

const initState = {
  userLogin: false,
  userRegister: false,
};

const commonReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case Constants.USER_LOGIN:
      return { ...state, userLogin: true, userLoginState: payload };
    case Constants.USER_REGISTER:
      return { ...state, userRegister: true, userRegisterState: payload };
    default:
      return { ...state };
  }
};

export default commonReducer;
