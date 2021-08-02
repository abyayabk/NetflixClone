import style from './Navbar.module.css';

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
        <div className={scrolledValue ? style.header1 : style.header}>
            <ul className='tryout'><Link to='/'><h1>Home</h1></Link></ul>
            <ul><Link to='/List'><h1>List</h1></Link></ul>
        </div>
    )
}

export default Navbar;