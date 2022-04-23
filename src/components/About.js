import React from "react";
import avatar from '../assets/avatars.webp'


const About = () => {
    return(
    <div className=" flex flex-row mx-96 m-36">
        <div className="">
            <p className="text-xl my-4">About us</p>
            <h1 className="text-2xl font-bold my-4">We connect people and removal<br /> companies</h1>
            <p className="text-lg my-4">With more than 15 years of experience and an<br /> international team of experts, it is our mission to take the<br /> hassle out of moving.</p>
            <img className="mt-4" src={avatar} alt="avatar" />
            <a className="mt-4 text-blue-500 text-lg font-bold" href="#home">Learn about us</a>
        </div>

        <div className="bg-blue-100 m-10 p-10 max-h-screen">
            <h1 className="text-xl font-bold pb-3">Are you a moving company?</h1>
            <p className="text-lg">We'll connect you to potential customers who are moving house and help you promote your business.</p>
            <button className="text-blue-500 text-lg py-3 mt-8 rounded-md outline px-4 bg-white font-bold">
                Join us
            </button>
        </div>
    </div>
    )
}

export default About