import React from 'react';

const Card = () => {
    return (
        <div className='container'>
            <div class="container__picture"></div>
            <div class="container__title">
                <h1>Normandie</h1>
            </div>
            <div class="container__description">
                <div class="container__description__desc">
                    <h2>Description :</h2>
                    <p>A dream destination for any developer <br></br>who wants to recharge his batteries</p>
                </div>
                <div class="container__description__button">
                    <button>Let's go !</button>
                </div>
            </div>
        </div>
    )
}

export default Card;