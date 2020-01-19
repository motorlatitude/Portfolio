import * as React from 'react';
import { useSpring, animated } from 'react-spring';
import { ParallaxLayer } from '@react-spring/parallax';

import MasonryGrid from './MasonryGrid';

import './../assets/css/Banner.css';

import frontEndIcon from './../assets/img/front-end.png';
import backEndIcon from './../assets/img/back-end.png';

import a from './../assets/img/ProjectShots/a.png';
import b from './../assets/img/ProjectShots/b.png';
import c from './../assets/img/ProjectShots/c.png';
import d from './../assets/img/ProjectShots/d.png';
import e from './../assets/img/ProjectShots/e.gif';
import f from './../assets/img/ProjectShots/f.png';

const Banner: React.FC = () => {
    const props = useSpring({
        from: { opacity: 0, transform: 'translate3d(0, -150px, 0)' },
        to: { opacity: 1, transform: 'translate3d(0, 40px, 0)' },
    });

    const mainProjectsLeft = [
        {
            title: 'Multi-Button',
            icon: 'codepen',
            link: 'https://codepen.io/motorlatitude/pen/eYmyQLr',
            img: a,
        },
        {
            title: 'Calculator',
            icon: 'codepen',
            link: 'https://codepen.io/motorlatitude/pen/oNgpLYV',
            img: c,
        },
        {
            title: 'jQuery Hex Plugin',
            icon: 'github',
            link: 'https://github.com/motorlatitude/Hex',
            img: f,
        },
    ];

    const mainProjectsRight = [
        {
            title: 'Full-Page Nav',
            icon: 'codepen',
            link: 'https://codepen.io/motorlatitude/pen/JjoBGYO',
            img: b,
        },
        {
            title: 'MotorBot',
            icon: 'github',
            link: 'https://github.com/motorlatitude/MotorBot/tree/develop',
            img: d,
        },
        {
            title: 'CSS Animated Weather Icons',
            icon: 'codepen',
            link: 'https://codepen.io/motorlatitude/pen/CyqDf',
            img: e,
        },
    ];

    return (
        <div className="banner">
            <div className="banner-text">
                <h5>Hi, I am a</h5>
                <br />
                <div className="banner-title">
                    <h1>Web Developer</h1>
                </div>
                <ParallaxLayer offset={0} speed={0.1} style={{ height: '200px' }}>
                    <animated.div className="banner-description" style={props}>
                        <div className="banner-icons">
                            <img src={frontEndIcon} alt="Front-End Icon" />
                            <img src={backEndIcon} alt="Back-End Icon" />
                        </div>
                        <div className="banner-description-text">
                            <p>
                                <b>Large Skill Set & Eager To Learn</b>
                                <br />
                                Experienced in various front-end and back-end languages, libraries and frameworks
                            </p>
                        </div>
                    </animated.div>
                </ParallaxLayer>
            </div>
            <MasonryGrid projectsLeft={mainProjectsLeft} projectsRight={mainProjectsRight} />
        </div>
    );
};

export default Banner;
