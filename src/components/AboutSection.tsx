import * as React from 'react';
import { useTrail, animated } from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';

import './../assets/css/AboutSection.css';

const AboutSection: React.FC = () => {
    const [isVisible, setIsVisible] = React.useState(false);

    const onVisibilityChange = (isVisible: boolean): void => {
        setIsVisible(isVisible);
    };

    const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'NodeJS', 'Electron', 'SQL & NoSQL', 'MongoDB'];

    const trailAnimation = useTrail(skills.length, {
        to: {
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translate3d(0px, 0, 0)' : 'translate3d(-140px,0,0)',
        },
    });

    return (
        <div className="about-title" id="About">
            <h1>ABOUT ME</h1>
            <p>
                I am a Web Developer with extensive experience in HTML, CSS and JavaScript. Primarily use NodeJS in
                combination with Typescript to create web apps or desktop applications in combination with Electron.
                Also knowledgeable in React as well as a large number of other front-end and back-end frameworks and
                libraries. Additionally, I have some experience with PHP, SQL, MongoDB, APIs (inc. GraphQL) and more...
            </p>
            <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
                <ul>
                    {trailAnimation.map(({ ...rest }, index) => (
                        <animated.li style={rest} key={index + '-skill-list'}>
                            <i className="fad fa-check-circle"></i> {skills[index]}
                        </animated.li>
                    ))}
                </ul>
            </VisibilitySensor>
        </div>
    );
};

export default AboutSection;
