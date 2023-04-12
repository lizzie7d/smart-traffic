import React from 'react';
import './style.css'
import { CloudOutlined } from '@ant-design/icons';
import DetailSection from '../component/DetailSection/detail';
const MainPage = () => {
    return (
        <div className="main-container">
            <div className="main-title">
                智慧交通

            </div>
            <div className="main-content">
                <div>
                    <DetailSection />
                </div>
                <div>1</div>
            </div>
        </div>
    )
}
export default MainPage;