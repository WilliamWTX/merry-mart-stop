/**
 * Created by william on 2019/7/2 10:42
 * Develop by william on 2019/7/2 10:42
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import IndexLayout from './layout/IndexLayout';
import RecommendList from '../../mock/index/RecommendList';

const IndexComponent = (props) => {
  const [recommendListData] = useState(RecommendList());
  const [tabIndex, setTabIndex] = useState(0);
  const [pageScrollHeight, setPageScrollHeight] = useState(null);
  const handleLogin = () => {
    const { history } = props;
    history.push('/login');
  };

  const handleChangeTab = (index) => {
    setTabIndex(index);
    const { history } = props;
    if (index === 0) {
      history.push('/');
    } else if (index === 1) {
      history.push('/category?from=home');
    }
  };

  const handleScrollData = (elem) => {
    setPageScrollHeight(elem.scrollTop);
  };

  const renderIndexLayout = () => (
    <IndexLayout
      onLogin={handleLogin}
      recommendListData={recommendListData}
      onScrollData={handleScrollData}
      pageScrollHeight={pageScrollHeight}
      onChangeTab={handleChangeTab}
      tabIndex={tabIndex}
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
