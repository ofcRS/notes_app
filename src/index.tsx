import React from 'react';
import { createRoot } from 'react-dom';
import { Provider } from 'effector-react';
import { ConfigProvider } from 'antd';
import App from './App';
import './styles/index.css';
import 'antd/dist/antd.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider>
    <ConfigProvider>
      <App />
    </ConfigProvider>
  </Provider>
);



