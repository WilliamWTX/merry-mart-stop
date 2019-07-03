/**
 * Created by william on 2019/7/1 19:22
 * Develop by william on 2019/7/1 19:22
 */
import React from 'react';
import './Login.scss';
import * as Images from '../../images';
import IntegerKeyBoard from '../../components/integer-keyboard/IntegerKeyBoard';

class Login extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '',
      verifyCode: '',
    };
  }

  handleChangePhoneNumber = (e) => {
    this.setState({
      phoneNumber: e.target.value,
    });
  };

  handleChangeVerifyCode = () => {

  };

  renderSubmitBtn = () => (
    <button className="login__btn" type="button">立即登录</button>
  );

  renderPhoneInPut = () => {
    const { phoneNumber } = this.state;
    return (
      <div className="login__phone">
        <input onChange={this.handleChangePhoneNumber} value={phoneNumber} placeholder="请输入手机号" type="" />
        <button type="button">获取验证码</button>
      </div>
    );
  };

  renderVerifyCodeInput = () => {
    const { verifyCode } = this.state;
    return (
      <div className="login__code">
        <input onChange={this.handleChangeVerifyCode} value={verifyCode} placeholder="请输入验证码" type="text" />
      </div>
    );
  };

  renderShopLogo = () => (
    <div className="login__logo">
      <img src={Images.ICON_LOGO} alt="" />
      <div>欢迎登录美廉美商城</div>
    </div>
  );

  renderFormContent = () => (
    <div className="login">
      <div className="login__content">
        {this.renderShopLogo()}
        {this.renderPhoneInPut()}
        {this.renderVerifyCodeInput()}
        {this.renderSubmitBtn()}
      </div>
    </div>
  );

  render() {
    return (
      <React.Fragment>
        {this.renderFormContent()}
        <IntegerKeyBoard />
      </React.Fragment>
    );
  }
}

export default Login;
