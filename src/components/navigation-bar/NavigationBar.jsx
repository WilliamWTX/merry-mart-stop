/**
 * Created by william on 2019/7/2 11:21
 * Develop by william on 2019/7/2 11:21
 */
import React from 'react';
import NavigationBarList from '../../util/NavigationBarUtil';
import Styles from './NavigationBar.scss';

class NavigationBar extends React.PureComponent {
  renderNabBarItem = ({ item, index }) => {
    const key = `key_${index}}`;
    return (
      <div key={key} className={Styles.navigation__item}>
        <img src={item.icon} alt="" />
      </div>
    );
  };

  renderNavBarList = () => NavigationBarList.map(
    (item, index) => this.renderNabBarItem({ item, index }),
  );


  render() {
    return (
      <div className={Styles.navigation}>
        {this.renderNavBarList()}
      </div>
    );
  }
}

export default NavigationBar;
