/**
 * Created by william on 2019/7/2 10:39
 * Develop by william on 2019/7/2 10:39
 */
// const Index = () => import('../page/index/Index');
import Index from '../page/index/Index';

const router = () => (
  [
    {
      path: '/',
      component: Index,
      children: [],
    },
  ]);

export default router();
