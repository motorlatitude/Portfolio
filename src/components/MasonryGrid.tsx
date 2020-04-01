import * as React from 'react';
import { useTrail, animated } from 'react-spring';
import { ParallaxLayer } from '@react-spring/parallax';

import './../assets/css/MasonryGrid.css';

type ProjectElement = {
    title: string;
    icon: string;
    link: string;
    img: any;
};

type Props = {
    isWork?: boolean;
    projectsLeft: ProjectElement[];
    projectsRight: ProjectElement[];
};

const MasonryGrid: React.FC<Props> = (props: Props) => {
    const leftColumnTrail = useTrail(props.projectsLeft.length, {
        from: { opacity: 0, transform: 'translate3d(0, -150px, 0)' },
        to: { opacity: 1, transform: 'translate3d(0, 0px, 0)' },
        delay: 0,
    });

    const rightColumnTrail = useTrail(props.projectsRight.length, {
        from: { opacity: 0, transform: 'translate3d(0, -120px, 0)' },
        to: { opacity: 1, transform: 'translate3d(0, 0px, 0)' },
        delay: 0,
    });

    return (
        <div className={props.isWork === true ? 'masonry-grid work' : 'masonry-grid'}>
            <div className="masonry-wrapper">
                <div className="masonry-column">
                    <ParallaxLayer
                        offset={props.isWork === true ? 0.05 : 0.25}
                        speed={props.isWork === true ? -0.05 : -0.8}
                    >
                        {leftColumnTrail.map(({ ...rest }, index) => (
                            <animated.div className="brick" style={rest} key={index + '-brick-left-column'}>
                                <div className="brick-image">
                                    <a href={props.projectsLeft[index].link} target="_blank" rel="noopener noreferrer">
                                        <img
                                            src={props.projectsLeft[index].img}
                                            title={
                                                props.projectsLeft[index].title + ' - ' + props.projectsLeft[index].icon
                                            }
                                            alt={
                                                props.projectsLeft[index].title + ' - ' + props.projectsLeft[index].icon
                                            }
                                        />
                                    </a>
                                </div>
                                <div className="brick-title">
                                    {props.projectsLeft[index].title} &nbsp; &nbsp;
                                    <i className={'fab fa-' + props.projectsLeft[index].icon}></i>
                                </div>
                            </animated.div>
                        ))}
                    </ParallaxLayer>
                </div>
                <div className="masonry-column">
                    <ParallaxLayer
                        offset={props.isWork === true ? -0.05 : 0.35}
                        speed={props.isWork === true ? -0.1 : -0.9}
                    >
                        {rightColumnTrail.map(({ ...rest }, index) => (
                            <animated.div className="brick" style={rest} key={index + '-brick-right-column'}>
                                <div className="brick-image">
                                    <a href={props.projectsRight[index].link} target="_blank" rel="noopener noreferrer">
                                        <img
                                            src={props.projectsRight[index].img}
                                            title={
                                                props.projectsRight[index].title +
                                                ' - ' +
                                                props.projectsRight[index].icon
                                            }
                                            alt={
                                                props.projectsRight[index].title +
                                                ' - ' +
                                                props.projectsRight[index].icon
                                            }
                                        />
                                    </a>
                                </div>
                                <div className="brick-title">
                                    {props.projectsRight[index].title} &nbsp; &nbsp;
                                    <i className={'fab fa-' + props.projectsRight[index].icon}></i>
                                </div>
                            </animated.div>
                        ))}
                    </ParallaxLayer>
                </div>
            </div>
        </div>
    );
};

export default MasonryGrid;
