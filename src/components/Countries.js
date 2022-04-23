import React from "react";
import countryImg from '../assets/UK-London-1 (1).png'

const Countries = () => {
    return(
    <div className="flex mb-20 mx-96">
        <div className="">
            <h1 className="text-3xl font-bold" >Find all companies in the Getamover network</h1>
            <p className="text-lg">Don’t look any further, we match you with the most suitable removal partners<br /> from our network of 860 companies in the UK.</p>
        </div>
        <div className="">
            <div className="border-">
                <img src={countryImg} alt="Countries Images" />
                <p>London<span>(138)</span></p>
            </div>
        </div>
    </div>
    )
}

export default Countries