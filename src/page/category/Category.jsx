/**
 * Created by william on 2019/7/17 14:29
 * Develop by william on 2019/7/17 14:29
 */
import React from 'react';
import CategoryLayout from './layout/CategoryLayout';
import CategoryData from '../../mock/category/Category';

class Category extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      categoryTypeList: CategoryData.CategoryList(),
      selectedCategoryIndex: 0,
      categoryItemHeight: 0.45,
      scrollTop: 0,
      scrollHeight: 0,
    };
  }

  handleChangeCategoryType = (index) => {
    const { categoryItemHeight, scrollHeight } = this.state;
    if (categoryItemHeight * index < scrollHeight / 100) {
      this.setState({
        selectedCategoryIndex: index,
        scrollTop: index !== 0 ? categoryItemHeight * index : categoryItemHeight,
      });
    } else {
      this.setState({
        selectedCategoryIndex: index,
      });
    }
  };

  handleSetCanScrollHeight = (scrollHeight) => {
    this.setState({
      scrollHeight,
    });
  };

  renderCategoryLayout = () => {
    const { categoryTypeList, selectedCategoryIndex, scrollTop } = this.state;
    return (
      <CategoryLayout
        onChangeCategoryType={this.handleChangeCategoryType}
        onSetCanScrollHeight={this.handleSetCanScrollHeight}
        {...{ scrollTop, categoryTypeList, selectedCategoryIndex }}
      />
    );
  };

  render() {
    return this.renderCategoryLayout();
  }
}

export default Category;
