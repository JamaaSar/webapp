
import React from 'react';

import ImageOne from '../images/page1.jpg';
import Medee1 from '../images/medee1.jpg';
import Medee2 from '../images/medee2.jpg';
import Footer from '../components/Footer';

const Home = () => {



    return (
        <>
            <div className="flex ">
                <img src={ImageOne} className=" w-full h-80 md:h-128" alt="firstpage" />
            </div>
            <div className="relative  h-full md:pt-12 font-base ">
                <h1>News</h1>
                <div className="relative pb-40">
                    <div className="HomeGrid">
                        <div className='HomeCard'>
                            <img src={Medee1} alt='news' className='HomeCardImage' />
                            <div className='HomeCardText'>
                                <h2> <a href="/" >Recording Bruckner Symphony No. -1 and No. 0 with Christian Thielemann</a></h2>
                            </div>
                        </div>
                        <div className='HomeCard'>
                            <img src={Medee2} alt='news' className=' HomeCardImage' />
                            <div className='HomeCardText'>
                                <h2> <a href="/" >Recording Bruckner Symphony No. 1 with Christian Thielemann</a></h2>
                            </div>
                        </div>
                        <div className='HomeCard'>
                            <img src={Medee1} alt='news' className='HomeCardImage' />
                            <div className='HomeCardText'>
                                <h2> <a href="/" >New Year's Concert 2022 to be Conducted by Maestro Daniel Barenboim</a></h2>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </ >
    );
};

export default Home;