import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'effector-react';
import { ConfigProvider } from 'antd';
import App from './App';
import './styles/index.css';
import 'antd/dist/reset.css';

const root = createRoot(document.getElementById('root'));

root.render(
    <ConfigProvider>
      <App />
    </ConfigProvider>
);



