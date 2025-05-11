// THIS FILE ISN'T USED, SO IT'S UNNECESSARY, I'M JUST A BIT TOO LAZY TO DELETE IT.

import React from 'react';
import styles from './components-css/Loading.module.css';
import loadingGif from '../assets/loading.gif';

const LoadingScreen = () => {
    return (
        <div className={styles['loading']}>
            <img src={loadingGif} alt="Loading..." className={styles['loading-spinner']} />
        </div>
    );
};

export default LoadingScreen;
