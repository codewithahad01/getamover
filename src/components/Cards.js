import React from "react";
import logo from '../assets/check.png'

const Card = () => {
    return (
        <div className="mt-15 text-md p-24">
        <div className="px-40 ">
            <h1 className="text-4xl font-bold py-6">Check out our verified reviews</h1>
            <p className="text-lg">On average, our moving companies are rated <span className="bg-green-100 font-bold">8,6 out of 10.</span> Below are some of our<br />
            most recent reviews. Get access to companies by requesting your quote.</p>
        </div>
            <div className="flex justify-center">
                <div className="flex flex-col justify-center max-w-xs bg-white shadow-xl p-10 pt-15 px-20 m-20">
                    <h1 className="font-bold">"Great Service"</h1>
                    <p>Kyle, 21 hours ago</p>
                    <p>lerom ipsum is the free<be /> and open source text and<be /> you can use them every</p>
                    <div><a href="#new">
                        <div className="w-6 h-6"><img src={logo} alt="images" /></div>
                        <div><p>DS Removals</p></div>
                        <div><p>9.4</p></div>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col justify-center max-w-xs bg-white shadow-xl p-10 pt-15 px-20 m-20">
                    <h1 className="font-bold">"Great Service"</h1>
                    <p>Kyle, 21 hours ago</p>
                    <p>lerom ipsum is the free<be /> and open source text and<be /> you can use them every</p>
                    <div><a href="#new">
                        <div className="w-6 h-6"><img src={logo} alt="images" /></div>
                        <div><p>DS Removals</p></div>
                        <div><p>9.4</p></div>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col justify-center max-w-xs bg-white shadow-xl p-10 pt-15 px-20 m-20">
                    <h1>"Great Service"</h1>
                    <p>Kyle, 21 hours ago</p>
                    <p>lerom ipsum is the free<be /> and open source text and<be /> you can use them every</p>
                    <div><a href="#new">
                        <div className="w-6 h-6"><img src={logo} alt="images" /></div>
                        <div><p>DS Removals</p></div>
                        <div><p>9.4</p></div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card