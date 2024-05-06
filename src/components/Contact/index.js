import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { useRef } from 'react'
import emailjs from '@emailjs/browser'


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className='container contact-page'>
    <div className='text-zone'>
        <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C','o','n','t','a','c','t', ' ', 'm', 'e']}
              idx={15}
         />
        </h1>
        <div className='contact-form'>
            <form>
                <ul>
                    <li className='half'>
                        <input type='text' name='name' placeholder='Name' required />
                    </li>
                    <li className='half'>
                        <input type='email' name='email' placeholder='Email' required />
                    </li>
                    <li>
                        <input placeholder='Subject' type="text" name="subject" required />
                    </li>
                    <li>
                        <textarea placeholder='Message' name='message' required></textarea>
                    </li>
                    <li>
                        <input type="submit" className='flat-button' value='SEND' />
                    </li>
                </ul>
            </form>
        </div>
    </div>
</div>
            <Loader type="pacman" />
        </>)
}


export default Contact