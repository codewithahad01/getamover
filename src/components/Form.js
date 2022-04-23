import React from "react";
import {FaArrowRight} from 'react-icons/fa'

const Form = () => {
        return (
            <div className="bg-green-200 py-20 m-20 flex flex-row justify-center">
                <div className="leading-loose mr-6">
                    <h1 className="text-2xl font-bold">Ready to connect with reliable removal companies?</h1>
                    <p className="text-lg mt-4">Find out which companies match your move requirements<br /> in a matter of minutes.</p>
                </div>
                    <div className="">
                    <form action="#">
                            <input className="px-10 py-3 p-5 rounded-md outline-gray-500 mr-2" type='text'placeholder="Your Postcode" />
                                <button className="bg-green-500 font-bold rounded-md px-20 py-4 text-white hover:bg-green-700">
                                    
                                    <FaArrowRight  />
                                </button>
                        </form>
                    </div>
                    
            </div>
        )

}


export default Form