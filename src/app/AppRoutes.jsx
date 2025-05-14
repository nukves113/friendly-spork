import { createBrowserRouter, redirect } from 'react-router-dom';
import { InitialConfigPage } from '../pages';
import { ConstructorPage } from '../pages/ConstructorPage/index.js';
import { CvListPage } from '../pages/CvListPage/index.js';
import { AuthPage } from '../pages/authPages/Auth/index.js';
import { userApi } from '../entities/user/index.js';
import { store } from './store.js';
import { baseApi } from './base.api.js';
import Layout from '/src/shared/components/Layout/Layout';

const routes = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      {
        index: true,
        loader: () => {
          return redirect('/cvs');
        },
        errorElement: <span style={{ color: 'red' }}>Error Element!</span>,
      },
      {
        path: 'register',
        element: <div>Register</div>, // Обновите на правильный компонент
      },
      {
        path: 'auth',
        element: <AuthPage />,
        loader: async () => {
          const request = store.dispatch(userApi.endpoints.getMe.initiate());
          try {
            const response = await request.unwrap();
            if (response?.id) {
              return redirect('/cvs');
            }
            return null;
          } catch (e) {
            return null;
          } finally {
            request.unsubscribe();
          }
        },
      },
      {
        path: 'init-constructor',
        element: <InitialConfigPage />,
        loader: async () => {
          try {
            const request = await store.dispatch(baseApi.endpoints.getMe.initiate()).unwrap();
            return request;
          } catch (e) {
            return redirect('/auth');
          }
        },
      },
      {
        path: 'cvs',
        element: <CvListPage />,
        loader: async () => {
          try {
            const request = await store.dispatch(baseApi.endpoints.getCvList.initiate()).unwrap();
            if (request.length) {
              return request;
            }
            return redirect('/init-constructor');
          } catch (e) {
            return redirect('/auth');
          }
        },
      },
    ],
  },
  {
    path: 'constructor',
    element: <ConstructorPage />,
    children: [
      {
        path: ':cv_id',
        element: <ConstructorPage />,
      },
    ],
  },
]);

export default routes;
