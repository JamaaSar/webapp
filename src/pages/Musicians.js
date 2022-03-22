
import React from 'react';

import ImageOne from '../images/page2.jpg';
import m1 from '../images/m1.jpg';
import m2 from '../images/m2.jpg';
import m3 from '../images/m3.jpg';
import m4 from '../images/m4.jpg';
import Footer from '../components/Footer';

const Musicians = () => {
    return (
        <>
            <div className="flex ">
                <img src={ImageOne} className="w-full h-96 md:h-128" alt="firstpage" />
            </div>
            <div className="relative  h-full pt-12 font-base bg-primayColor ">
                <h1>Musicians</h1>
                <div className="relative z-10 pb-40 ">
                    <div className="MusicianGrid">
                        <div>
                            <img src={m1} alt='img' className='MusicianCardImage' />
                            <div className='center-content'>
                                <h2 className='text-2xl mb-2'>Person1</h2>
                                <p className='mb-2'>violin</p>
                            </div>
                        </div>
                        <div className='transform translate-y-10'>
                            <img src={m2} alt='img' className='MusicianCardImage ' />
                            <div className='center-content'>
                                <h2 className='text-2xl mb-2'>Person2</h2>
                                <p className='mb-2'>violoncello</p>
                            </div>
                        </div>
                        <div>
                            <img src={m3} alt='img' className='MusicianCardImage' />
                            <div className='center-content'>
                                <h2 className='text-2xl mb-2'>Person3</h2>
                                <p className='mb-2'>violoncello</p>
                            </div>
                        </div>
                        <div className='transform translate-y-10'>
                            <img src={m4} alt='img' className='MusicianCardImage' />
                            <div className='center-content'>
                                <h2 className='text-2xl mb-2'>Person4</h2>
                                <p className='mb-2'>concertmaster</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />

            </div>
        </>

    );
};

export default Musicians;