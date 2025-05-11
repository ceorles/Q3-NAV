import React, { useEffect, useState } from 'react';
import style from './sections-css/Contact.module.css';

const Contact = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    return (
        <section
            id="contact"
            className={`${style.contactSection} ${animate ? style.fadeInUp : ''}`}
        >
            <h1>CONTACTS</h1>
            <ul className={style.contactIcons}>
                <li>
                    <a href="mailto:berchescharles@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img src="gmail.png" alt="GMAIL" />
                    </a>
                </li>
                <li>
                    <a href="https://wa.me/9073775492" target="_blank" rel="noopener noreferrer">
                        <img src="whatsapp.png" alt="WHATSAPP" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/ceorles?igsh=bmpxbXlobzJwb3Vj" target="_blank" rel="noopener noreferrer">
                        <img src="instagram.png" alt="INSTAGRAM" />
                    </a>
                </li>
                <li>
                    <a href="https://x.com/ceorles" target="_blank" rel="noopener noreferrer">
                        <img src="twitter.png" alt="X" />
                    </a>
                </li>
            </ul>
        </section>
    );
};

export default Contact;
