import React from 'react'
import './RightDashboard.css';
import { ImArrowDownLeft2, ImArrowUpRight2 } from 'react-icons/im'
import logo from '../assets/mastercard_logo.svg'
import Graphs from './Graphs';
import TransactionTable from './TransactionTable';
import ActivityCard from './ActivityCard';

const RightDashboard = () => {
    return (
        <>
            <div className="header">
                <div className="letfText header1">
                    <span className='heading'>Welcome Back, Aziz &#128075;</span><br />
                    <span className='subHeading'>Here's what's happenin with your store today</span>
                </div>
                <div className="searchBar header1">
                    <input type="search" placeholder='Search for Anything...' />
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="card">
                        <span className='icon'><ImArrowDownLeft2 /></span>
                        <h3 className='Total'>Total Income</h3>
                        <p className='amount'>$600,000.00</p>
                        <span className='percentageBox1'>-1.29%</span>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <span className='icon'><ImArrowUpRight2 /></span>
                        <h3 className='Total'>Total Outcome</h3>
                        <p className='amount'>$300,000.00</p>
                        <span className='percentageBox2'>+1.29%</span>
                    </div>
                </div>

                <div class="column">
                    <div class="card MyCard">
                        <h1>My Card</h1>
                        <h3 className='CardBalance'>Card Balance</h3>
                        <p className='amount'>$300,000.00</p>

                        <div className="mastercard">
                            <h3 className='CurrentBalance'>Current Balance</h3>
                            <img src={logo} alt="" className='logo' />
                            <p className='amount'>$300,000.00</p>
                        </div>
                        <div className="btn">
                            <button className='primaryBTN'>Manage Cards</button>
                            <button className='secondaryBTN'>Transfer</button>
                        </div>
                    </div>
                </div>
                

            </div>
            <div className="graph">
                <Graphs></Graphs>
            </div>
            <div className="TransactionTable">
                <TransactionTable></TransactionTable>
            </div>
            <div className="activityCard">
                    <ActivityCard></ActivityCard>
                </div>
        </>
    )
}

export default RightDashboard;