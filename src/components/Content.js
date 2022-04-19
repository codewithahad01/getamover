import React from "react";
import image from '../assets/wallpaper.jpg'

function Content() {
    <div>
        <h1 className="text-3xl">Move house with a top-rated removal company</h1>
        <p>Compare up to 6 quotes from trusted moving companies and save.</p>
        <div>
            <form action="#">
                <input type='text'  placeholder="Your Postcode" />
                <button>Go</button>
            </form>
            <ol>
                <li>Discover your ideal mover with ease</li>
                <li>Access verified reviews</li>
                <li>Make your move worry-free!</li>
            </ol>
        </div>
        <div>
            <img className='w-40 h-40' src={image} alt='logo2' />
        </div>
    </div>
}

export default Content