import './index.scss';
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';


const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am an second year university student at Western University, currently looking
                        for a summer internship. I am passionate about software development and
                        learning new technologies. I am currently learning React and React Native.
                    </p>
                    <p>
                        I am also interested in AI, and how it will change the world in the future. I
                        am currently learning about AI and how to implement it in my projects.
                    </p>
                    <p>
                        Some of my hobbies include playing video games, watching movies, and playing sports.
                    </p>
                </div>

                <div>
                    <div className='stage-cube-cont'>
                        <div className='cubespinner'>
                            <div className='face1'>
                                <FontAwesomeIcon icon={faAngular} color='#DD0031' />
                            </div>
                            <div className='face2'>
                                <FontAwesomeIcon icon={faHtml5} color='#DD0031' />
                            </div>
                            <div className='face3'>
                                <FontAwesomeIcon icon={faCss3} color='#DD0031' />
                            </div>
                            <div className='face4'>
                                <FontAwesomeIcon icon={faReact} color='#DD0031' />
                            </div>
                            <div className='face5'>
                                <FontAwesomeIcon icon={faJsSquare} color='#DD0031' />
                            </div>
                            <div className='face6'>
                                <FontAwesomeIcon icon={faGitAlt} color='#DD0031' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About