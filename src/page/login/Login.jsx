/**
 * Created by william on 2019/7/1 19:22
 * Develop by william on 2019/7/1 19:22
 */
import React from 'react';
import Styles from './Login.scss';
import * as Images from '../../images';
import IntegerKeyBoard from '../../components/integer-keyboard/IntegerKeyBoard';

class Login extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '',
      verifyCode: '',
      visibleKeyboard: false,
    };
  }

  handleChangeNumber = (phoneNumber) => {
    if (phoneNumber.length === 11) {
      this.setState({
        visibleKeyboard: false,
      });
    }
    this.setState({
      phoneNumber,
    });
  };

  handleOpenKeyboardClick = () => {
    this.setState({
      visibleKeyboard: true,
    });
  };

  handleSubmitNumber = (phoneNumber) => {
    this.setState({
      phoneNumber,
      visibleKeyboard: false,
    });
  };

  renderSubmitBtn = () => (
    <button className={Styles.login__btn} type="button">立即登录</button>
  );

  renderPhoneInPut = () => {
    const { phoneNumber } = this.state;
    return (
      <div className={Styles.login__phone}>
        <div role="none" onClick={this.handleOpenKeyboardClick}>
          {phoneNumber || '请输入手机号'}
          <span className={(phoneNumber && phoneNumber.length < 11) ? Styles.phone__cursor : ''} />
        </div>
        <button type="button">获取验证码</button>
      </div>
    );
  };

  renderVerifyCodeInput = () => {
    const { verifyCode } = this.state;
    return (
      <div className={Styles.login__code}>
        <div>
          {verifyCode || '请输入验证码'}
        </div>
      </div>
    );
  };

  renderShopLogo = () => (
    <div className={Styles.login__logo}>
      <img src={Images.ICON_LOGO} alt="" />
      <div>欢迎登录美廉美商城</div>
    </div>
  );

  renderFormContent = () => (
    <div className={Styles.login}>
      <div className={Styles.login__content}>
        {this.renderShopLogo()}
        {this.renderPhoneInPut()}
        {this.renderVerifyCodeInput()}
        {this.renderSubmitBtn()}
      </div>
    </div>
  );

  render() {
    const { visibleKeyboard, phoneNumber } = this.state;
    return (
      <React.Fragment>
        {this.renderFormContent()}
        {
          visibleKeyboard
            ? (
              <IntegerKeyBoard
                numbers={phoneNumber}
                numberLength={11}
                onChangeNumber={this.handleChangeNumber}
                onSubmitNumber={this.handleSubmitNumber}
              />
            )
            : null
        }
      </React.Fragment>
    );
  }
}

export default Login;
