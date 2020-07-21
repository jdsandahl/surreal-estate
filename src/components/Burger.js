import React from 'react';
import "../styles/Burger.css"

const Burger = ({handleCheck}) => {
    return (
        <div className="burger">
            <input type="checkbox" className="burger__toggle" onChange={handleCheck}/>
            <div className="burger__lines"><div></div></div>            
        </div>
    );
};

export default Burger;