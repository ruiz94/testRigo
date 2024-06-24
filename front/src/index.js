import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import StoreProvider from './providers';
import { createRoot } from "react-dom/client";
import RouterStore from './router';

const container = document.getElementById("root");
const root = createRoot(container);



root.render(
  <React.StrictMode>
    <StoreProvider>
      <div className="main">
        <RouterStore />
      </div>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
