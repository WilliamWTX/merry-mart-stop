/**
 * Created by william on 2019/7/8 15:08
 * Develop by william on 2019/7/8 15:08
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Styles from './AccountPassword.scss';
import * as Images from '../../images';
import Keyboard from '../../components/keyboard/Keyboard';

const AccountPassword = (props) => {
  const [account, setAccount] = useState('');
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [password, setPassword] = useState('');
  const [isAccountKeyboard, setIsAccountKeyboard] = useState(true);
  const [cipher, setCipher] = useState('');
  const [isPreviewPassword, setViewPasswordState] = useState(false);

  const handleChangeKeyboardNumber = (data) => {
    if (isAccountKeyboard) {
      setAccount(data);
    } else {
      const cipherList = [];
      for (const key of data) {
        if (key) {
          cipherList.push('*');
        }
      }
      setPassword(data);
      setCipher(cipherList.join(''));
    }
  };

  const handleOpenKeyboardClick = () => {
    setIsAccountKeyboard(true);
    if (!isShowKeyboard) {
      setIsShowKeyboard(true);
    }
  };

  const handleOpenPasswordKeyboard = () => {
    setIsAccountKeyboard(false);
    if (!isShowKeyboard) {
      setIsShowKeyboard(true);
    }
  };

  const handleViewPassword = () => {
    if (!isPreviewPassword) {
      setViewPasswordState(true);
      setTimeout(() => {
        setViewPasswordState(false);
      }, 3000);
    }
  };

  const handleToggleLoginType = () => {
    const { history } = props;
    history.push('/login');
  };

  const handleRegisterClick = () => {
    const { history } = props;
    history.push('/register');
  };

  const handleCompleteInput = () => {
    setIsShowKeyboard(false);
  };

  const renderFormHeader = () => (
    <div className={Styles.root__logo}>
      <img src={Images.ICON_LOGO} alt="" />
      <div>欢迎登录美廉美商城</div>
    </div>
  );

  const renderFormAccountInput = () => (
    <div
      role="none"
      onClick={handleOpenKeyboardClick}
      className={Styles.root__account}
    >
      {account
        ? (<div className={Styles.root__account__number}>{account}</div>)
        : (<div className={Styles.root__account__text}>请输入您的账号</div>)
      }
      <span className={isAccountKeyboard && isShowKeyboard ? Styles.account__cursor : null} />
    </div>
  );

  const renderFormPasswordInput = () => (
    <div
      role="none"
      onClick={handleOpenPasswordKeyboard}
      className={Styles.root__password}
    >
      {password
        ? (
          <div className={Styles.root__account__number}>
            {isPreviewPassword ? password : cipher}
          </div>
        )
        : (<div className={Styles.root__account__text}>请输入您的密码</div>)
      }
      <span className={!isAccountKeyboard && isShowKeyboard ? Styles.password__cursor : null} />
      <img
        role="none"
        onClick={handleViewPassword}
        className={Styles.root__password__view}
        src={Images.ICON_VIEW}
        alt=""
      />
    </div>
  );

  const renderSubmitBtn = () => (
    <div className={Styles.root__submit}>
      <button
        type="button"
        className={!password.length || !account.length ? Styles.root__submit__disabled : null}
        disabled={!password.length || !account.length}
      >
        立即登录
      </button>
    </div>
  );

  const renderFormFooter = () => (
    <div className={Styles.root__footer}>
      <div className={Styles.root__footer__way}>
        <div
          role="none"
          onClick={handleToggleLoginType}
        >
          手机号码登录
        </div>
        <div
          role="none"
          onClick={handleRegisterClick}
        >
          注册
        </div>
      </div>
      <div className={Styles.root__footer__other}>
        <div className={Styles.root__footer__other__title}>
          <span />
          <span>其他登陆方式</span>
        </div>
        <div className={Styles.root__footer__other__qq} />
        <div className={Styles.root__footer__other__wechat} />
      </div>
    </div>
  );

  const renderKeyboard = () => (
    <Keyboard
      keyboardNumbers={isAccountKeyboard ? account : password}
      onChangeKeyboardNumber={handleChangeKeyboardNumber}
      onCompleteInput={handleCompleteInput}
    />
  );

  const renderFormContent = () => (
    <div className={Styles.root}>
      <div className={Styles.root__content}>
        {renderFormHeader()}
        {renderFormAccountInput()}
        {renderFormPasswordInput()}
        {renderSubmitBtn()}
        {renderFormFooter()}
        {isShowKeyboard ? renderKeyboard() : null}
      </div>
    </div>
  );
  return renderFormContent();
};

AccountPassword.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default withRouter(AccountPassword);
