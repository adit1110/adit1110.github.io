import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Logo from "./Logo"
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['A', 'd', 'i', 't'];
    // const jobArray = ['s', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'e', 'n', 'g', 'i', 'n', 'e', 'e', 'r'];
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);

        return () => clearTimeout(timer);
    }, []);
    
    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14 space-after-im`}>'m</span>
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                <br />
                {/* <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22}/> */}
                </h1>
                <h2>Student at Western University</h2>
                <Link to="/contact" className='flat-button'>Contact me. </Link>
            </div>
            <Logo></Logo>
        </div>
        <Loader type='pacman' />
        </>
    );
};

export default Home;
