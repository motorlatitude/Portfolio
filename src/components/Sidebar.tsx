import * as React from 'react';
import { useTrail, animated } from 'react-spring';

import './../assets/css/Sidebar.css';

const Sidebar: React.FC = () => {
    const socialLinks = [
        {
            name: 'CodePen',
            icon: 'codepen',
            link: 'https://codepen.io/motorlatitude',
        },
        {
            name: 'GitHub',
            icon: 'github',
            link: 'https://github.com/motorlatitude',
        },
        {
            name: 'Twitter',
            icon: 'twitter',
            link: 'https://twitter.com/motorlatitude',
        },
        {
            name: 'LinkedIn',
            icon: 'linkedin-in',
            link: 'https://www.linkedin.com/in/lennart-h-829331144/',
        },
    ];

    // ISSUE: https://github.com/react-spring/react-spring/issues/867
    const trailAnimation = useTrail(socialLinks.length, {
        from: { opacity: 0, transform: 'translate3d(-50px, 0, 0)' },
        to: { opacity: 1, transform: 'translate3d(0px, 0, 0)' },
    });

    return (
        <div className="Sidebar">
            <ul>
                {trailAnimation.map(({ ...rest }, index) => (
                    <animated.li style={{ ...rest }} key={index + '-social-link'}>
                        <a
                            href={socialLinks[index].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={socialLinks[index].name}
                        >
                            <i className={'fab fa-' + socialLinks[index].icon}></i>
                        </a>
                    </animated.li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
