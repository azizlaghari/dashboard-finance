import React from 'react'
import './ActivityCard.css'

const ActivityCard = () => {
    return (
        <>
            <div className="ActivityCard">
                <h1>Activity Card</h1>
                <div class="column">
                    <div class="card MyCard">
                        <h1>My Card</h1>
                        <h3 className='CardBalance'>Card Balance</h3>
                        <p className='amount'>$300,000.00</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ActivityCard