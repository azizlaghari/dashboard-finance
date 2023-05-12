import React from 'react'
import './RightDashboard.css'
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';
import { BsArrowDownLeft, BsArrowUpRight } from 'react-icons/bs';
import Graph from './Graphs';
import Graphs from './Graphs';
import MyCard from './MyCard';

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
            <div className="cards">
                <Row gutter={8}>
                    <Col span={8}>
                        <Card bordered={false}>
                            <Statistic
                                title="Total Income"
                                value={632.0000}
                                precision={3}
                                valueStyle={{
                                    color: '#fff',
                                }}
                                icon={<BsArrowDownLeft />}
                                prefix={<BsArrowDownLeft />}
                                suffix="$"
                            />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card bordered={false}>
                            <Statistic
                                title="Total Outcome"
                                value={632.000}
                                precision={3}
                                valueStyle={{
                                    color: '#fff',
                                }}
                                suffix="$"
                                prefix={<BsArrowUpRight />}
                                
                            />
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className="MyCard">
                <MyCard></MyCard>
            </div>
            <div className="graph">
                <Graphs></Graphs>
            </div>
        </>
    )
}

export default RightDashboard;