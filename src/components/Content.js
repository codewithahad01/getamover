import React from "react";
import image from '../assets/two.jpg'
// import forwardBtn from '../assets/next.png'
import checkIcom from '../assets/check.png'


const Content = () => {
    return (
        <div className=" mt-20 grid  place-content-center ">
        <h1 className="text-5xl font-bold pb-10 ">Move house with a top-rated<br /> removal company</h1>
        <p className="text-xl">Compare up to 6 quotes from trusted moving companies and save.</p>
        <div className="bg-green-200 p-8 m-10 ">
            <form action="#">
                <input className="px-10 py-3 p-5 rounded-md outline-gray-500 mr-2" type='text'placeholder="Your Postcode" />
                <button className="bg-green-500 font-bold rounded-md px-20 py-3 text-white hover:bg-green-700">
                {/* <img className="w-5 h-5" src={forwardBtn} alt='forward Button' /> */}
                Go</button>
            </form>
        </div>
            <ol className="text-lg grid grid-cols-2 ">
                <img className="w-6" src={checkIcom} alt="check Icon"/>
                <li> Discover your ideal mover with ease</li>
                <img className="w-6" src={checkIcom} alt="check Icon"/>
                <li> Access verified reviews</li>
                <img className="w-6" src={checkIcom} alt="check Icon"/>
                <li> Make your move worry-free!</li>
            </ol>
        
        <div className="grid justify-items-end">
            <img className=' pl-10' src={image} alt='logo2' />
        </div>
    </div>
    )
}

export default Content