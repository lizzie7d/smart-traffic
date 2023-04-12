/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from 'react';
import loadingPicOne from '../img/images/jzxz1.png';
import loadingPicTwo from '../img/images/jzxz2.png';
import "./style.css";
const MainPage = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    })
    return (
        <div className="main-container">
            {loading && (<div id="load">
                <div className="load_img">
                    <img className="jzxz1" src={loadingPicOne} />
                    <img className="jzxz2" src={loadingPicTwo} />
                </div>
            </div>)}
            <div className='main-title'>杭州交通智慧大数据 </div>


        </div>

    )
};
export default MainPage;