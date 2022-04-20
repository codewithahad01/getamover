import React from "react";
import image from '../assets/wallpaper.jpg'


const Content = () => {
    return (
        <div className=" mt-20 grid  place-content-center ">
        <h1 className="text-5xl font-bold pb-10 ">Move house with a top-rated<br /> removal company</h1>
        <p className="text-xl">Compare up to 6 quotes from trusted moving companies and save.</p>
        <div className="bg-green-200 p-8 m-10 ">
            <form action="#">
                <input className="px-10 py-3 p-5 outline-gray-300 mr-2" type='text'placeholder="Your Postcode" />
                <button className="bg-green-500 font-bold px-20 py-3 text-white">Go</button>
            </form>
        </div>
            <ol className="text-lg">
                <li>Discover your ideal mover with ease</li>
                <li>Access verified reviews</li>
                <li>Make your move worry-free!</li>
            </ol>
        
        <div className="grid justify-items-end ">
            <img className='w-40 h-40' src={image} alt='logo2' />
        </div>
    </div>
    )
}

export default Content