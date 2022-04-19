import React from 'react';

const Navbar = ({setPage}) => {
    console.log({setPage})
    return (
       <nav>
           <button onClick={() => setPage('Planets')}>planet</button>
           <button onClick={() => setPage('People')}>people</button>
       </nav>
    );
};

export default Navbar;