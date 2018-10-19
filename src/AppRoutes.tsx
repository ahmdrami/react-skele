import NotFound from './pages/404';
import Home from './pages/home/Home';

export const APP_ROUTES = [
  { path: '/', component: Home },
  { path: '**', component: NotFound },
];
