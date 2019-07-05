/**
 * Created by william on 2019/7/5 17:48
 * Develop by william on 2019/7/5 17:48
 */
import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Toast.scss';

const Toast = (props) => {
  const { message } = props;
  return (
    <div className={Styles.root}>
      <div className={Styles.root__content}>
        <div className={Styles.root__content__msg}>{message}</div>
      </div>
    </div>
  );
};

Toast.propTypes = {
  message: PropTypes.string,
};
Toast.defaultProps = {
  message: '发生错误',
};

export default Toast;
