import './app.css';
import React, { useEffect }from 'react';
import KakaoMap from './components/kakao_map/kakao_map';


function App({kakao, person}) {
  useEffect( () => {
    kakao.onLoadMainMap();
  }, []);

  return (
    <div>
      <KakaoMap />
    </div>
  );
}

export default App;
