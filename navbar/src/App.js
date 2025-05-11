import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.module.css'

import Angela from './components/NavBar';

import Her from './sections/Her';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Header from './components/Top';

// import Sounds from './components/Audio';

// import LoadingScreen from './components/Loading';

const MaryAngelaRemojo = () => {
    // const location = useLocation();
    // const [isLoading, setIsLoading] = useState(false);
    // const [currentPath, setCurrentPath] = useState(location.pathname);

    // useEffect(() => {
    //     if (location.pathname !== currentPath) {
    //         setIsLoading(true);

    //         const timer = setTimeout(() => {
    //             setIsLoading(false);
    //             setCurrentPath(location.pathname);
    //         }, 2400);

    //         return () => clearTimeout(timer);
    //     }
    // }, [location.pathname, currentPath]);


    // if (isLoading) {
    //     return <LoadingScreen />;
    // }

    return (
        <Routes>
            <Route path="/" element={<Her />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
};

const MAR = () => {
    return (
        <Router>
            <Header />
            <Angela />
            <MaryAngelaRemojo />
        </Router>
    );
};

export default MAR;
