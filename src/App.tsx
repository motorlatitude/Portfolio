import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './assets/css/App.css';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Banner from './components/Banner';
import WorkSection from './components/WorkSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';

const App: React.FC = () => {
    return (
        <div className="App">
            <Sidebar />
            <Parallax pages={3} enabled={true}>
                <ParallaxLayer offset={0} speed={0.5}>
                    <div className="page-background"></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.5}>
                    <Header />
                    <main id="Home">
                        <Banner />
                    </main>
                </ParallaxLayer>
                <ParallaxLayer offset={0.9} speed={0.5} style={{ zIndex: -1, height: '170vh' }}>
                    <div className="page-background page-two"></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0.89} speed={0.25} style={{ zIndex: -1 }}>
                    <WorkSection />
                </ParallaxLayer>
                <ParallaxLayer offset={1.95} speed={0.5} style={{ zIndex: 1 }}>
                    <div className="page-background page-three">
                        <ParallaxLayer offset={0} speed={0} style={{ zIndex: 1 }}>
                            <div className="profile"></div>
                        </ParallaxLayer>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={1.85} speed={0.6} style={{ zIndex: 2 }}>
                    <AboutSection />
                </ParallaxLayer>
                <ParallaxLayer offset={2.35} speed={0.8} style={{ zIndex: 1 }}>
                    <ContactSection />
                </ParallaxLayer>
                <ParallaxLayer offset={2.9} speed={0.7} style={{ zIndex: -1 }}>
                    <div className="page-background footer">
                        <div className="copyright">&copy; 2020 Lennart Hase</div>
                    </div>
                </ParallaxLayer>
            </Parallax>
        </div>
    );
};

export default App;
