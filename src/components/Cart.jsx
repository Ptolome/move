import React from 'react';
import './Cart.css'
import PropsType from 'prop-types'
const Cart = ({title,year,poster}) => {
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
Cart.propTypes={
    title:PropsType.string.isRequired,
    year:PropsType.string.isRequired,
    poster:PropsType.string.isRequired,
}


export default Cart;
