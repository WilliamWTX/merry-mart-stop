/**
 * Created by william on 2019/7/9 10:22
 * Develop by william on 2019/7/9 10:22
 */
import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Register.scss';
import * as Images from '../../images';
import IntegerKeyBoard from '../../components/integer-keyboard/IntegerKeyBoard';
import Toast from '../../components/toast/Toast';

class Register extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '',
      verifyCode: '',
      visibleKeyboard: false,
      timers: 60,
      isDisabledGetCodeBtn: false,
      isInputCode: false,
      isShowToast: false,
      message: '',
      isClickVerifyBtn: false,
      isDisabledSubmitBtn: false,
    };
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  onShowToast = (message) => {
    this.setState({
      isShowToast: true,
      message,
    });
    setTimeout(() => {
      this.setState({
        isShowToast: false,
      });
    }, 2000);
  };

  setTimeCount = () => {
    const { timers } = this.state;
    const newTimes = timers - 1;
    this.setState({
      timers: newTimes,
    });

    if (newTimes === 0) {
      clearInterval(this.timer);
      this.timer = null;
      this.setState({
        timers: 60,
        isDisabledGetCodeBtn: false,
      });
    }
  };

  handleChangeNumber = (number) => {
    const { isInputCode } = this.state;
    if (!isInputCode) {
      if (number.length === 11) {
        this.setState({
          visibleKeyboard: false,
        });
      }
      this.setState({
        phoneNumber: number,
      });
    } else {
      if (number.length === 4) {
        this.setState({
          visibleKeyboard: false,
        });
      }
      this.setState({
        verifyCode: number,
      });
    }
  };

  handleOpenKeyboardClick = () => {
    this.setState({
      isInputCode: false,
      visibleKeyboard: true,
    });
  };

  handleSubmitNumber = (number) => {
    const { isInputCode } = this.state;
    if (!isInputCode) {
      this.setState({
        phoneNumber: number,
        visibleKeyboard: false,
      });
    } else {
      this.setState({
        verifyCode: number,
        visibleKeyboard: false,
      });
    }
  };

  handleGetVerifyCodeClick = () => {
    if (this.getVerifyCodeBtnRef) {
      this.getVerifyCodeBtnRef.disabled = true;
    }
    this.setState({
      isDisabledGetCodeBtn: true,
      isClickVerifyBtn: true,
    });
    this.timer = setInterval(this.setTimeCount, 1000);
  };

  handleChangeVerifyCodeClick = () => {
    const { phoneNumber } = this.state;
    if (phoneNumber.length === 11) {
      this.setState({
        isInputCode: true,
        visibleKeyboard: true,
      });
    } else {
      this.onShowToast('请输入正确的手机号');
    }
  };

  handleLoginClick = () => {
    const { isClickVerifyBtn } = this.state;
    if (!isClickVerifyBtn) {
      this.onShowToast('请先获取验证码哦');
      return;
    }
    this.setState({
      visibleKeyboard: false,
      isDisabledSubmitBtn: true,
    });
  };

  handleToggleLogin = () => {
    const { history } = this.props;
    history.push('/login');
  };

  renderSubmitBtn = () => {
    const { phoneNumber, verifyCode, isDisabledSubmitBtn } = this.state;
    return (
      <button
        className={`${Styles.login__btn} ${((phoneNumber.length !== 11 || verifyCode.length < 4) || isDisabledSubmitBtn) ? Styles['login__btn-disabled'] : ''}`}
        type="button"
        disabled={(phoneNumber.length !== 11 || verifyCode.length < 4) || isDisabledSubmitBtn}
        onClick={this.handleLoginClick}
      >
        立即登录
      </button>
    );
  };

  renderPhoneInPut = () => {
    const { phoneNumber, isDisabledGetCodeBtn, timers } = this.state;
    let newTimes;
    if (timers < 10) {
      newTimes = `0${timers}`;
    } else {
      newTimes = timers;
    }
    return (
      <div className={Styles.login__phone}>
        <div role="none" onClick={this.handleOpenKeyboardClick}>
          {phoneNumber || '请输入手机号'}
          <span className={(phoneNumber && phoneNumber.length < 11) ? Styles.phone__cursor : ''} />
        </div>
        <button
          type="button"
          ref={(el) => {
            this.getVerifyCodeBtnRef = el;
          }}
          onClick={this.handleGetVerifyCodeClick}
          disabled={isDisabledGetCodeBtn || phoneNumber.length !== 11}
        >
          {isDisabledGetCodeBtn ? `重发${newTimes}s` : '获取验证码'}
        </button>
      </div>
    );
  };

  renderVerifyCodeInput = () => {
    const { verifyCode } = this.state;
    return (
      <div className={Styles.login__code}>
        <div
          role="none"
          onClick={this.handleChangeVerifyCodeClick}
        >
          {verifyCode || '请输入验证码'}
          <span className={verifyCode && verifyCode.length < 4 ? Styles.code__cursor : ''} />
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

  renderLoginFooter = () => (
    <div className={Styles.login__footer}>
      <div className={Styles.login__footer__way}>
        <button
          className={Styles.login__footer__way__pwd}
          type="button"
          onClick={this.handleToggleLogin}
        >
          已有账号，去登录？
        </button>
      </div>
    </div>
  );

  renderFormContent = () => (
    <div className={Styles.login}>
      <div className={Styles.login__content}>
        {this.renderShopLogo()}
        {this.renderPhoneInPut()}
        {this.renderVerifyCodeInput()}
        {this.renderSubmitBtn()}
        {this.renderLoginFooter()}
      </div>
    </div>
  );

  renderToast = () => {
    const { message } = this.state;
    return (
      <Toast message={message} />
    );
  };

  render() {
    const {
      visibleKeyboard, phoneNumber, isInputCode, verifyCode, isShowToast,
    } = this.state;
    return (
      <React.Fragment>
        {this.renderFormContent()}
        {
          visibleKeyboard
            ? (
              <IntegerKeyBoard
                numbers={isInputCode ? verifyCode : phoneNumber}
                numberLength={isInputCode ? null : 11}
                onChangeNumber={this.handleChangeNumber}
                onSubmitNumber={this.handleSubmitNumber}
              />
            )
            : null
        }
        {isShowToast ? this.renderToast() : null}
      </React.Fragment>
    );
  }
}

Register.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default Register;
