/**
 * Created by william on 2019/7/1 18:22
 * Develop by william on 2019/7/1 18:22
 */
import Constants from '../Constants';

const showUserLoginPage = payload => ({
  type: Constants.USER_LOGIN,
  payload,
});

const showUserRegisterPage = payload => ({
  type: Constants.USER_REGISTER,
  payload,
});


export default {
  showUserLoginPage,
  showUserRegisterPage,
};
