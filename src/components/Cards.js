import React from "react";
import logo from '../assets/check.png'

const Card = () => {
    return (
        <div>
            <h1 className="text-2xl">Check out our verified reviews</h1>
            <p>On average, our moving companies are rated <span className="bg-green-100 font-bold">8,6 out of 10.</span> Below are some of our<br />
            most recent reviews. Get access to companies by requesting your quote.</p>
            <div>
                <div>
                    <h1>"Great Service"</h1>
                    <p>Kyle, 21 hours ago</p>
                    <p>lerom ipsum is the free<be /> and open source text and<be /> you can use them every</p>
                    <div><a href="#new">
                        <div><img src={logo} alt="images" /></div>
                        <div><p>DS Removals</p></div>
                        <div></div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card