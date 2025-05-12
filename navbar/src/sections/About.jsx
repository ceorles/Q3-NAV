import React from 'react';
import style from './sections-css/About.module.css';

const About = () => {
    return (
        <div className={`${style.container} ${style.fadeIn}`}>
            <div className={style.row}>
                <h1 className={style.header}>ABOUT</h1>
                <div className={style.col}>
                    <p>
                        I like Pokémon, but I like <span className={style.tooltip}>
                            Her
                            <span className={style.tooltipText}>Mary Angela M. Remojo</span>
                        </span> more.
                    </p>
                </div>
                <div className={style.col}>
                    <img src="torchic.jpg" alt="POKEMON" className={style.image} />
                </div>
            </div>
        </div>
    );
};

export default About;
