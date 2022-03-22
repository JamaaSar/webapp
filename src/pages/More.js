
import React from 'react';
import ImageOne from '../images/page4.jpg';
import p1 from '../images/p1.jpg';
import Footer from '../components/Footer';
const MyCollection = [
    {
        id: "1",
        label: "First Picture",
        imgPath:
            "https://media.geeksforgeeks.org/wp-content/uploads/20210208000010/1.png",
    },
    {
        id: "2",
        label: "Second Picture",
        imgPath:
            "https://media.geeksforgeeks.org/wp-content/uploads/20210208000009/2.png",
    },
    {
        id: "3",
        label: "Third Picture",
        imgPath:
            "https://media.geeksforgeeks.org/wp-content/uploads/20210208000008/3.png",
    },
    {
        id: "4",
        label: "Fourth Picture",
        imgPath: p1,
    },
    {
        id: "5",
        label: "Fift Picture",
        imgPath:
            "https://media.geeksforgeeks.org/wp-content/uploads/20210208000008/3.png",
    },
];
const Videos = [
    {
        id: "1",
        name: "Cello",
        videoPath: "https://www.youtube.com/embed/DcFpvolRN3w",
        text: 'celloooooo'
    },
    {
        id: "2",
        name: "Violin",
        videoPath: "https://www.youtube.com/embed/J0w0t4Qn6LY",
        text: 'violiiiiin'
    },
    {
        id: "3",
        name: "Flute",
        videoPath: "https://www.youtube.com/embed/JQDTVDmbEpA",
        text: 'fluuuteee'
    },
    {
        id: "4",
        name: "Trombone",
        videoPath: "https://www.youtube.com/embed/0OttfOXsP2M",
        text: 'tromboneeeee'
    },
];
const More = () => {
    const CollectionSize = MyCollection.length;
    const [index, setActiveStep] = React.useState(0);
    const [divId, setDivId] = React.useState(0);
    const [divName, setDivName] = React.useState(Videos[0].name);
    const [videoIndex, setVideoIndex] = React.useState(Videos[0].videoPath);
    const [textIndex, setTextIndex] = React.useState(Videos[0].text);


    const goToNextPicture = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
    const goToPrevPicture = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
    const handleClick = (e) => {
        let currentId = e.target.id;
        setDivId(currentId);
        setDivName(Videos[currentId].name);
        setVideoIndex(Videos[currentId].videoPath);
        setTextIndex(Videos[currentId].text);
    }


    return (
        < >
            <div className="flex">
                <img src={ImageOne} className="w-full h-80 md:h-128" alt="secondpage" />
            </div >
            <div className="DivPage24 pb-24">
                <div className="pt-12">
                    <h1 >Photos</h1>
                </div>
                <div className="AlbumGrid">
                    <div className="unUsedDiv" ></div>
                    <img src={MyCollection[index].imgPath} alt='img' className='AlbumImg ' />
                    <img src={MyCollection[index + 1].imgPath} alt='img' className='AlbumImg ' />
                    <div className="unUsedDiv" ></div>
                </div>
                <div className="grid grid-cols-7 gap-1 justify-items-center pb-20 ">
                    <div className=' col-span-2'></div>
                    <button onClick={goToPrevPicture} disabled={index === 0}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-36 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path className="transform -translate-x-full" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 16l-4-4m0 0l4-4m-4 4h58" />
                        </svg>
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 44 44" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M30 25a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                    <button onClick={goToNextPicture} disabled={index === CollectionSize - 2} >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-36 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path className="transform -translate-x-full" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M57 8l4 4m0 0l-4 4m4-4H0" />
                        </svg>
                    </button>
                    <div className='col-span-2'></div>
                </div>
                <h1 className="pb-10">Videos</h1>
                <div className="flex justify-evenly items-center " >
                    <button onClick={handleClick} id='0'>{Videos[0].name}</button>
                    <button onClick={handleClick} id='1'>{Videos[1].name}</button>
                    <button onClick={handleClick} id='2'>{Videos[2].name}</button>
                    <button onClick={handleClick} id='3'>{Videos[3].name}</button>
                </div>
            </div>
            <div className=" h-full p-20 ">
                <div className="AlbumGrid" id={divId}>
                    <div className=' col-span-1 md:col-span-5 AlbumVideo' >
                        <iframe
                            src={videoIndex}
                            title="Embedded youtube"
                            className=' col-span-5 AlbumVideo'
                        />
                    </div>
                    <div className='col-span-2'>
                        <h2 className='text-2xl mb-2'> {divName}</h2>
                        <p >
                            {textIndex}
                        </p>
                    </div>
                </div>

            </div>
            <Footer />
        </ >
    );
};

export default More;