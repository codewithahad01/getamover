import React from "react";
import image from '../assets/two.jpg'


const Content = () => {
    return (
        <section className="relative">
            <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
                <div className="flex flex-1 flex-col items-center lg:itmes-start">
                <h1 className="font-bold pb-10 md:text-4 lg:text-5xl text-center lg:text-left mb-6">Move house with a top-rated<br /> removal company</h1>
                <p className="text-lg text-center lg:text-left mb-6">Compare up to 6 quotes from trusted moving companies and save.</p>
                <div className="bg-green-200 p-8 m-10 ">
                    <form action="#">
                        <input className="px-10 py-3 p-5 rounded-md outline-gray-500 mr-2" type='text'placeholder="Your Postcode" />
                        <button className="bg-green-500 font-bold rounded-md px-20 py-3 text-white hover:bg-green-700">
                        {/* <img className="w-5 h-5" src={forwardBtn} alt='forward Button' /> */}
                        Go</button>
                    </form>
                    </div>
                    <ol className="text-lg grid grid-cols-2">
                        <li>Discover your ideal mover with ease</li>
                        <li>Access verified reviews</li>
                        <li>Make your move worry-free!</li>
                    </ol>
                </div>
                <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 ">
                    <img className='w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w/full md:h/full' src={image} alt='logo2' />
                </div>
            </div>
        </section>
    )
}

export default Content

        // <div className="grid justify-items-end">
        //     
        // </div>