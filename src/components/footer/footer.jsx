import React from 'react';
import styles from './footer.module.css';

const Footer = (props) => {
    const goToLogin = () =>{
        console.log('router로 로그인 페이지 연결하기');
    }
    return (
        <footer className={styles.footer}>
            <ul className={styles.list}>
                <li>
                    <button className={styles.button}>
                    <i className="fas fa-home"></i>
                    </button>
                </li>
                <li>
                    <button  className={styles.button}>
                        <i className="fas fa-search"></i>
                    </button>
                </li>
                <li>
                    <button className={styles.button}>
                        <i className="far fa-plus-square"></i>
                    </button>
                </li>
                <li>
                    <button className={styles.button} onClick={goToLogin}>
                        <i className="fas fa-user"></i>
                    </button>
                </li>
            </ul>
        </footer>
    )
};

export default Footer ;