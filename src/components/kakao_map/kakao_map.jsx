import React from 'react';
import styles from './kakao_map.module.css';

const KakaoMap = (props) => {
    return(
        <ul className={styles.container}>
            <div id="kakaoMap" className={styles.kakaoMap}/>
        </ul>
    );
}

export default KakaoMap;