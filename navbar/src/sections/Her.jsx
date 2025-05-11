import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import style from './sections-css/Her.module.css';

const Her = () => {
    const location = useLocation();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (location.hash === '#home' || location.pathname === '/') {
            setVisible(false);
            setTimeout(() => setVisible(true), 20);
        }
    }, [location]);

    return (
        <div className={`${style.container} ${visible ? style.fadeIn : ''}`} id="home">
            <h1>If all else fails, take a nap and try again.</h1>
        </div>
    );
};

export default Her;
