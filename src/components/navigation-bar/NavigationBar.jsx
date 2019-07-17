/**
 * Created by william on 2019/7/2 11:21
 * Develop by william on 2019/7/2 11:21
 */
import React from 'react';
import PropTypes from 'prop-types';
import NavigationBarList from '../../util/NavigationBarUtil';
import Styles from './NavigationBar.scss';

class NavigationBar extends React.PureComponent {
  handleChangeTabClick = (index) => {
    const { onChangeTab } = this.props;
    onChangeTab(index);
  };

  renderNabBarItem = ({ item, index, tabIndex }) => {
    const key = `key_${index}}`;
    return (
      <div
        key={key}
        role="none"
        onClick={() => (this.handleChangeTabClick(index))}
        className={Styles.navigation__item}
      >
        <img src={(tabIndex === index && index !== 2) ? item.active_icon : item.icon} alt="" />
      </div>
    );
  };

  renderNavBarList = tabIndex => NavigationBarList.map(
    (item, index) => this.renderNabBarItem({ item, index, tabIndex }),
  );


  render() {
    const { tabIndex } = this.props;
    return (
      <div className={Styles.navigation}>
        {this.renderNavBarList(tabIndex)}
      </div>
    );
  }
}

NavigationBar.propTypes = {
  onChangeTab: PropTypes.func.isRequired,
  tabIndex: PropTypes.number.isRequired,
};

export default NavigationBar;
