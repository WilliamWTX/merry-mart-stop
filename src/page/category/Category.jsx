/**
 * Created by william on 2019/7/17 14:29
 * Develop by william on 2019/7/17 14:29
 */
import React from 'react';
import CategoryLayout from './layout/CategoryLayout';

class Category extends React.PureComponent {
  renderCategoryLayout = () => (
    <CategoryLayout />
  );

  render() {
    return this.renderCategoryLayout();
  }
}

export default Category;
