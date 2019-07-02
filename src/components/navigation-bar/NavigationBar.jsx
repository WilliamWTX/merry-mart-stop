/**
 * Created by william on 2019/7/2 11:21
 * Develop by william on 2019/7/2 11:21
 */
import React from 'react';
import NavigationBarList from '../../util/NavigationBarUtil';
import './NavigationBar.scss';

class NavigationBar extends React.PureComponent {
  renderNabBarItem = ({ item, index }) => {
    const key = `key_${index}}`;
    return (
      <div key={key} className="navigation__item">
        <img src={item.icon} alt="" />
      </div>
    );
  };

  renderNavBarList = () => NavigationBarList.map(
    (item, index) => this.renderNabBarItem({ item, index }),
  );


  render() {
    return (
      <div className="navigation">
        {this.renderNavBarList()}
      </div>
    );
  }
}

export default NavigationBar;
