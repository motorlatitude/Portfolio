import * as React from 'react';

import './../assets/css/Header.css';
import logo from './../assets/img/logo.png';
import { useTrail, animated } from 'react-spring';

const Header: React.FC = () => {
    const navItems = [
        {
            name: 'Home',
            link: '#Home',
        },
        {
            name: 'Work',
            link: '#Work',
        },
        {
            name: 'About',
            link: '#About',
        },
        {
            name: 'Contact',
            link: '#',
        },
    ];
    const trailAnimation = useTrail(navItems.length, {
        from: { opacity: 0, transform: 'translate3d(0px, -10px, 0)' },
        to: { opacity: 1, transform: 'translate3d(0px, 0px, 0)' },
    });

    return (
        <header>
            <div className="Logo">
                <img src={logo} alt="Site Logo" />
                <div className="Logo-Name">
                    Lennart Hase
                    <br />
                    <span>Portfolio</span>
                </div>
            </div>
            <div className="middle-filler"></div>
            <nav>
                <ul>
                    {trailAnimation.map(({ ...rest }, index) => (
                        <animated.li style={rest} key={index + '-navigation-item'}>
                            {navItems[index].name}
                        </animated.li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
