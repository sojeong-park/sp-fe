import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import KakaoMapApi from './service/kakao_map_api';
import Person from './service/persion';

const kakao = new KakaoMapApi();
const person = new Person('박소정', 30);

ReactDOM.render(
  <React.StrictMode>
    <App kakao={kakao} person={person}/>
  </React.StrictMode>,
  document.getElementById('root')
);