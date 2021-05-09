import styles from './app.module.css';
import React from 'react';
import KakaoMap from './components/kakao_map/kakao_map';
import Header from './components/header/header';
import Footer from './components/footer/footer';


function App({kakao}) {
  return (
    <div>
      <Header className={styles.main}/>
      <KakaoMap className={styles.main}/>
      <Footer className={styles.main}/>
    </div>
  );
}

export default App;
