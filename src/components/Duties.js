import React from "react";

const Duties = (props) => {
    
    return(
        <div className="bg-cyan-50 flex flex-col-lg justify-center text-cener mt-20 p-10 mx-w-auto ">
            <div className="grid grid-cols-1">
                <p className="text-xl leading-loose">How it works</p>
                <p></p> 
                <h2 className="text-2xl font-bold ">Get connected to moving<br /> companies that match your<br /> specifications</h2>
                <p className="text-lg">Look forward to enjoy your new home and let us do <br /> the hefty work. Getamover will help you move,<br /> hassle-free.</p>
            </div>


            <div className="grid grid-cols-1 mx-20">
                <div>
                    <h1 className="text-lg font-bold mb-2">Describe your move</h1>
                    <p>Answer a few questions and discover which companies<br /> meet your requirements.</p>
                </div>
                <div>
                    <h1 className="text-lg font-bold mt-2">Compare quotes</h1>
                    <p>Check out company profiles and reviews to help make<br /> your decision.</p>
                </div>
                <div>
                    <h1 className="text-lg font-bold mt-2">Choose your preferred mover</h1>
                    <p>Take the first step towards enjoying your new home.</p>
                </div>
            </div>
        </div>        
    )
}

export default Duties

