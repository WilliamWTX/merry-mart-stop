/**
 * Created by william on 2019/7/2 10:39
 * Develop by william on 2019/7/2 10:39
 */
// const Index = () => import('../page/index/Index');
import Index from '../page/index/Index';
import Login from '../page/login/Login';
import Register from '../page/register/Register';
import AccountPassword from '../page/account-password/AccountPassword';
import Category from '../page/category/Category';

const router = () => (
  [
    {
      path: '/login',
      component: Login,
      children: [],
    },
    {
      path: '/register',
      component: Register,
      children: [],
    },
    {
      path: '/account_password',
      component: AccountPassword,
      children: [],
    },
    {
      path: '/',
      component: Index,
      children: [],
    },
    {
      path: '/category',
      component: Category,
      children: [],
    },
  ]);

export default router();
