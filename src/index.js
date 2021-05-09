import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import KakaoMapApi from './service/kakao_map_api';
import '@fortawesome/fontawesome-free/js/all.js';

const kakao = new KakaoMapApi();

ReactDOM.render(
  <React.StrictMode>
    <App kakao={kakao}/>
  </React.StrictMode>,
  document.getElementById('root')
);