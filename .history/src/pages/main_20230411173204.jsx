import React from 'react';
import './style.css'
import { CloudOutlined } from '@ant-design/icons';
const MainPage = () => {
    return (
        <div className="main-container">
            <div className="main-title">
                智慧交通

            </div>
            <div className="main-content">
                <div>
                    <div className="detail-section">
                        <div>天气选择</div>
                        <CloudOutlined />
                    </div>
                </div>
                <div>1</div>
            </div>
        </div>
    )
}
export default MainPage;