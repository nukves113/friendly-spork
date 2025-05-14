import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { RouterProvider } from 'react-router-dom';
import routes from './AppRoutes.jsx';
import { Provider } from 'react-redux';
import { store } from './store.js';
import { InitialAnimation } from '../shared/components/InitialAnimation/InitialAnimation.jsx';
import '../shared/uiXeny/style.css';
import { ThemeProvider } from '../shared/uiXeny/components/ThemeProvider/ThemeProvider';

const customTheme = {
  name: 'cvConstructorTheme',
  mainColor: '#131644',
  activeColor: '#1c178c',
  shadowFloatColorActive: '#9fa6ec',
  boxShadowEventAround5px: '#2644ce',
  hoverColor: '#2746a6',
  textColor: '#1f1f1f',
  textSubduedColor: '#42376e',
  backgroundColorBody: 'white',
  borderRadius: '1px',
  selectedColor: '#788cee',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider initialTheme={customTheme}>
    <Provider store={store}>
      <InitialAnimation />
      <RouterProvider router={routes} />
    </Provider>
  </ThemeProvider>,
);
