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
                    <i class="fas fa-home"></i>
                    </button>
                </li>
                <li className={styles.button}>
                    <buton>
                        <i class="fas fa-search"></i>
                    </buton>
                </li>
                <li>
                    <buton className={styles.button}>
                        <i class="far fa-plus-square"></i>
                    </buton>
                </li>
                <li>
                    <buton className={styles.button} onClick={goToLogin}>
                        <i class="fas fa-user"></i>
                    </buton>
                </li>
            </ul>
        </footer>
    )
};

export default Footer ;