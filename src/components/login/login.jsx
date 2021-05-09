import React from 'react';
import styles from './login.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';

const Login = (props) => {
    return (
        <section>
            <Header />
            <h1>Login</h1>
            <ul>
                <li><button>Login</button></li>
                <li><button>Join</button></li>
            </ul>
            <Footer />
        </section>
    )
};

export default Login;