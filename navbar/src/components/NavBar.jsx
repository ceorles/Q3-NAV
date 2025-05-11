import React, { useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './components-css/NavBar.module.css';

import pokeballVideo from '../assets/pokeball.webm';

const navItems = [
    { label: 'HOME', path: '/' },
    { label: 'ABOUT', path: '/about' },
    { label: 'PROJECTS', path: '/projects' },
    { label: 'CONTACT', path: '/contact' },
];

const Angela = () => {
    const location = useLocation();
    const videoRefs = useRef([]);

    const resetPokeballState = () => {
        videoRefs.current.forEach((vid) => {
            if (vid) {
                vid.pause();
                vid.currentTime = 0;
            }
        });
    };

    useEffect(() => {
        resetPokeballState();

        const activeIndex = navItems.findIndex((item) => item.path === location.pathname);

        if (activeIndex >= 0) {
            const activeVideo = videoRefs.current[activeIndex];
            if (activeVideo) {
                activeVideo.currentTime = 0;
                activeVideo.play();
            }
        }
    }, [location.pathname]);

    return (
        <nav className={styles['pokeball-nav']}>
            {navItems.map((item, index) => {
            const isActive = location.pathname === item.path;

            return (
                <Link to={item.path} key={item.label} className={styles['pokeball-link']}>
                    <div className={styles['pokeball-wrapper']}>
                        <video
                            ref={(el) => (videoRefs.current[index] = el)}
                            className={`${styles['pokeball-video']} ${isActive ? styles['active'] : ''}`}
                            src={pokeballVideo}
                            muted
                            preload="auto"
                            playsInline
                            controls={false}
                            disablePictureInPicture
                            onContextMenu={(e) => e.preventDefault()}
                        // onMouseEnter={() => {
                        //     if (!isActive) {
                        //     videoRefs.current[index].play();
                        //     }
                        // }}
                        // onMouseLeave={() => {
                        //     if (!isActive) {
                        //     videoRefs.current[index].pause();
                        //     videoRefs.current[index].currentTime = 0;
                        //     }
                        // }}
                        />
                        <span className={styles['nav-text']}>{item.label}</span>
                    </div>
                </Link>
            );
            })}
        </nav>
    );
};

export default Angela;
