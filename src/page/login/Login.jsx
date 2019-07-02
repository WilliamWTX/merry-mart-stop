/**
 * Created by william on 2019/7/1 19:22
 * Develop by william on 2019/7/1 19:22
 */
import React from 'react';
import './Login.scss';

class Login extends React.PureComponent {
  renderSubmitBtn = () => {
  };

  renderPhoneInPut = () => (
    <div>
      <input type="" />
      <button>获取验证码</button>
    </div>
  );

  renderVerifyCodeInput = () => (
    <div>
      <input type="text" />
    </div>
  );

  renderFormContent = () => (
    <div className="login">
      {this.renderPhoneInPut()}
      {this.renderVerifyCodeInput()}
      {this.renderSubmitBtn()}
    </div>
  );

  render() {
    return this.renderFormContent();
  }
}

export default Login;
