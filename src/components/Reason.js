import React from "react";
import logo1 from '../assets/matching.svg'
import logo2 from '../assets/free.svg';
import logo3 from '../assets/network.svg'


const Reason = () => {
    return (
        <div className="m-20 mx-96">
            <div className="mb-10">
                <p className="text-lg">Why Getamover?</p>
                <p className="text-2xl font-bold">3 reasons why people use Getamover</p>
            </div>
            <div className="flex flex-row text-md">
                <div>
                    <img className="bg-blue-100 rounded-full shadow-2xl p-2 my-4" src={logo1} alt="logo1" />
                    <h2 className="font-bold">Advanced matching system</h2>
                    <p>We only match you with movers who are<br /> equipped to handle your move and know<br /> what is involved so there are no surprises.</p>
                </div>
                <div className="ml-28 mr-28 ">
                    <img className="bg-blue-100 rounded-full shadow-2xl p-2 my-4" src={logo2} alt="logo1" />
                    <h2 className="font-bold">Save time and money</h2>
                    <p>Skip the hours of searching on Google.<br /> Here, you'll find custom-tailored quotes for<br /> your exact needs.</p>
                </div>
                <div>
                    <img className="bg-blue-100 rounded-full shadow-2xl p-2 my-4" src={logo3} alt="logo1" />
                    <h2 className="font-bold">Wide-reaching network</h2>
                    <p>Our network reaches beyond borders.<br /> Whether it's around the corner or around<br /> the world, we move you further.</p>
                </div>
            </div>
        </div>
    )
}

export default Reason