
import React from 'react';
import { Link } from 'react-router-dom';

import ImageOne from '../images/page3.jpg';
import hist from '../images/hist.jpg';
import Footer from '../components/Footer';


const Orchestra = () => {


    return (
        <>
            <div className="flex justify-center ">
                <img src={ImageOne} className=" w-full h-80 md:h-128" alt="secondpage" />
                <div className="absolute mb-20 self-end tracking-widest ">
                    <button className="bg-primayColor text-white w-56 h-12 rounded uppercase">
                        <Link className="p-4" to='/musicians'> See our musicians </Link>
                    </button>
                </div>
            </div>
            <div className="DivPage24  pb-96">
                <div className="text-center pt-12">
                    <h1 className="pb-8">Orchestra M <br />
                        <span className="text-base"><i>created 1990</i></span>
                    </h1>
                    <h2 className="text-xl leading-relaxed tracking-wide">
                        Music is a higher revelation than all wisdom and philosophy.<br />
                        Ludwig van Beethoven</h2>
                </div>
            </div>
            <div className=" mt-6  transform  -translate-y-96 -mb-96  ">
                <div className="relative z-10 mx-40  ">
                    <div className="OrchestraGrid">
                        <div className='OrchCard'>
                            <h4 >Greek Theatre <br />
                                <span className='text-xs'><i>550 BC -  476</i></span>
                            </h4>
                            <ul className='OrchList'>
                                <li>Derived in Ancient Greece</li>
                                <li>Masks commonly used for characterisation</li>
                                <li>Famous playwrights include Sophocles (496-406 BC) and Euripides (480-380 BC)</li>
                            </ul>
                        </div>
                        <div className='OrchCard'>
                            <img src={hist} alt='img' className='OrchCardImage' />
                        </div>
                        <div className='OrchCard'>
                            <h4>17th Century French Neoclassicism<br />
                                <span className='text-xs'><i>1648-1789</i></span></h4>
                            <ul className='OrchList'>
                                <li> Plays concerned with ideas and their effect on human beings</li>
                                <li>Theatres similar to today</li>
                                <li>Famous playwrights include Racine (1639 – 1673) and Moliere (1622-1673)</li>
                            </ul>
                        </div>
                        <div className='row-span-2 w-1 border-r-2 transform translate-y-36 yLigne'>
                        </div>
                        <div className='OrchCard yLigne'>
                        </div>
                        <div className='OrchCard'>
                            <img src={hist} alt='img' className='OrchCardImage' />
                        </div>
                        <div className='OrchCard'>
                            <h4>Naturalism <br />
                                <span className='text-xs'><i>1880-1940</i></span> </h4>
                            <ul className='OrchList'>
                                <li>Believed that theatre should be like ‘a slice of life’ – lifelike scenery; costumes and methods of acting</li>
                                <li>In 1909 Stanislavski established the acting system that became the foundation for much of the realistic and naturalistic acting of the 20th Century – known as ‘method acting’</li>
                                <li>Famous playwrights include Emile Zola and Anton Chekhov</li>
                            </ul>
                        </div>
                        <div className='OrchCard'>
                            <img src={hist} alt='img' className='OrchCardImage' />
                        </div>
                    </div>
                </div>
            </div>
            <div className=' ' >
                <Footer />

            </div>
        </>
    );
};

export default Orchestra;