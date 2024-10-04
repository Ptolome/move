import React from 'react';
import './Cart.css'

const Cart = ({title,year,id,poster}) => {
    return (
        <div className='cart'>
            <div className='picture'>
                <img src={poster} alt={title} />
            </div>
            <div>
                <h2> {title}</h2>
                <div>год: {year}</div>
            </div>
            
                       

        </div>
    );
}



export default Cart;
