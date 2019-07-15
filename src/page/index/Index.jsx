/**
 * Created by william on 2019/7/2 10:42
 * Develop by william on 2019/7/2 10:42
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import IndexLayout from './layout/IndexLayout';

const IndexComponent = (props) => {
  const [pageScrollHeight, setPageScrollHeight] = useState(null);
  const handleLogin = () => {
    const { history } = props;
    history.push('/login');
  };

  const handleScrollData = (elem) => {
    setPageScrollHeight(elem.scrollTop);
  };

  const renderIndexLayout = () => (
    <IndexLayout
      onLogin={handleLogin}
      onScrollData={handleScrollData}
      pageScrollHeight={pageScrollHeight}
    />
  );

  return (
    <React.Fragment>
      {renderIndexLayout()}
    </React.Fragment>
  );
};

IndexComponent.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default withRouter(IndexComponent);
