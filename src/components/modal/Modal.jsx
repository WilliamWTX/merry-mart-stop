/**
 * Created by william on 2019/7/5 17:02
 * Develop by william on 2019/7/5 17:02
 */
import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Modal.scss';

const Modal = (props) => {
  const ModalFooter = (cancelText, onCancel, onOk) => (
    <div className={Styles.root__content__footer}>
      <button type="button" onClick={onCancel}>{cancelText}</button>
      <button
        className={Styles.root__content__footer__submit}
        type="button"
        onClick={onOk}
      >
      确定
      </button>
    </div>
  );

  const renderModalContent = (
    title, hasFooter, cancelText, message, onCancel, onOk,
  ) => (
    <div className={Styles.root}>
      <div className={Styles.root__content}>
        <div className={Styles.root__content__title}>{title}</div>
        <div className={Styles.root__content__msg}>{message}</div>
        {hasFooter ? ModalFooter(cancelText, onCancel, onOk) : null}
      </div>
    </div>
  );

  const {
    title,
    hasFooter,
    cancelText,
    message,
    visible,
    onCancel,
    onOk,
  } = props;
  return visible
    ? renderModalContent(
      title,
      hasFooter,
      cancelText,
      message,
      visible,
      onCancel,
      onOk,
    ) : null;
};

Modal.propTypes = {
  title: PropTypes.string,
  hasFooter: PropTypes.bool,
  cancelText: PropTypes.string,
  message: PropTypes.string,
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onOk: PropTypes.func.isRequired,
};
Modal.defaultProps = {
  title: '提示',
  hasFooter: true,
  cancelText: '取消',
  message: '发生错误',
  visible: false,
};

export default Modal;
