import './Navbar.css';
import Img from "./netflix.png"
import { Link } from 'react-router-dom';
import { useState } from 'react';


function Navbar() {


    let scrolled = null;

    let [scrolledValue, setScrolledValue] = useState(false);

    const mero = () => {
        scrolled = window.scrollY;
        console.log(scrolled);
        if (scrolled >= 80) {
            setScrolledValue(true);
        } else {
            setScrolledValue(false);
        }
    };

    window.addEventListener('scroll', mero);

    return (
        <div className={scrolledValue ? "header1" : "header"}>
            <div className="logo">
               <img className="pic" src={Img} />
            </div>
            <ul className='tryout'><Link to='/'><h1>Home</h1></Link></ul>
            <ul><Link to='/List'><h1>List</h1></Link></ul>
       
        </div>
    )
}

export default Navbar;