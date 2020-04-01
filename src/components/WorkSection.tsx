import * as React from 'react';
import MasonryGrid from './MasonryGrid';

import './../assets/css/WorkSection.css';

import g from './../assets/img/ProjectShots/g.png';
import h from './../assets/img/ProjectShots/h.png';
import i from './../assets/img/ProjectShots/i.png';
import j from './../assets/img/ProjectShots/j.png';

const WorkSection: React.FC = () => {
    const workProjectsLeft = [
        {
            title: 'Canvas Progress',
            icon: 'codepen',
            link: 'https://codepen.io/motorlatitude/pen/Aybmz',
            img: g,
        },
        {
            title: 'Canvas Polar Clock',
            icon: 'codepen',
            link: 'https://codepen.io/motorlatitude/pen/uevDx',
            img: h,
        },
    ];

    const workProjectsRight = [
        {
            title: 'd3 Data Visualization',
            icon: 'codepen',
            link: 'https://codepen.io/motorlatitude/pen/LYEQJBV',
            img: i,
        },
        {
            title: 'Drop',
            icon: 'github',
            link: 'https://github.com/motorlatitude/Drop',
            img: j,
        },
    ];

    return (
        <>
            <div className="work-title" id="Work">
                <h1>MY WORK</h1>
                <h5>
                    Most of my work is available on CodePen and GitHub, here is a small preview of some of the work I
                    have done in the past
                </h5>
            </div>
            <MasonryGrid isWork={true} projectsLeft={workProjectsLeft} projectsRight={workProjectsRight} />
        </>
    );
};

export default WorkSection;
