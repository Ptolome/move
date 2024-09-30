import React from 'react';
const styles={
    border: '2px solide gray',
    background:'pink'
}

const Cart = ({title,year,id,poster}) => {
    return (
        <div style={styles}>
            <h2>Название: {title}</h2>
            <div>год: {year}</div>
            <img src={poster} alt={title} />
                       

        </div>
    );
}



export default Cart;
