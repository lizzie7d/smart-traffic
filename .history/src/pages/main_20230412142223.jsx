/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from 'react';
import loadingPicOne from '../img/images/jzxz1.png';
import loadingPicTwo from '../img/images/jzxz2.png';
import ksh33 from '../img/images/ksh33.png';
// import loadingPicTwo from '../img/images/jzxz2.png';
// import loadingPicTwo from '../img/images/jzxz2.png';
// import loadingPicTwo from '../img/images/jzxz2.png';
// import loadingPicTwo from '../img/images/jzxz2.png';
// import loadingPicTwo from '../img/images/jzxz2.png';
// import loadingPicTwo from '../img/images/jzxz2.png';

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
            <div className="visual">
                <div className="visual_left">
                    <div className="visual_box">
                        <div className="visual_title">
                            <span>交通流量</span>
                            <img src={ksh33} />
                        </div>
                        <div className="visual_chart" id="main1">

                        </div>
                    </div>
                    <div className="visual_box">
                        <div className="visual_title">
                            <span>交通工具流量</span>
                            <img src={ksh33} />

                        </div>
                        <div className="visual_chart" id="main2">

                        </div>
                    </div>
                    <div className="visual_box">
                        <div className="visual_title">
                            <span>收费站车流量</span>
                            <img src={ksh33} />
                        </div>
                    </div>
                    <div className="visual_chart sfzcll">
                        <a>运输方式</a>
                        <a>客运量</a>
                        <a>货运量</a>
                        <div className="sfzcll_pos_box">
                            <div className="sfzcll_box">
                                <img className="sfzcll_bkJk" src="../src/img/images/ksh34.png" />
                                <img className="sfzcll_bkJk" src="../src/img/images/ksh34.png" />
                                <img className="sfzcll_bkJk" src="../src/img/images/ksh34.png" />
                                <img className="sfzcll_bkJk" src="../src/img/images/ksh34.png" />
                                <label><img src="../src/img/images/ksh35.png" />公路运输</label>
                                <div className="sfzcll_smallBk">
                                    <div className="ygl">
                                        <span>4347.2万</span>人
                                    </div>
                                </div>
                                <div className="sfzcll_smallBk">
                                    <div className="ygh">
                                        <span>4347.2万</span>人
                                    </div>
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div className="sfzcll_box">
                                <img className="sfzcll_bkJk" src="../src/img/images/ksh34.png" />
                                <img className="sfzcll_bkJk" src="../src/img/images/ksh34.png" />
                                <img className="sfzcll_bkJk" src="../src/img/images/ksh34.png" />
                                <img className="sfzcll_bkJk" src="../src/img/images/ksh34.png" />
                                <label><img src="../src/img/images/ksh35.png" />公路运输</label>
                                <div className="sfzcll_smallBk">
                                    <div className="ygl">
                                        <span>4347.2万</span>人
                                    </div>
                                </div>
                                <div className="sfzcll_smallBk">
                                    <div className="ygh">
                                        <span>4347.2万</span>人
                                    </div>
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div className="sfzcll_box">
                                <img className="sfzcll_bkJk" src="../src/img/images/ksh34.png">
                                    <img className="sfzcll_bkJk" src="../src/img/images/ksh34.png">
                                        <img className="sfzcll_bkJk" src="../src/img/images/ksh34.png">
                                            <img className="sfzcll_bkJk" src="../src/img/images/ksh34.png">
                                                <label><img src="../src/img/images/ksh35.png" />公路运输</label>
                                                <div className="sfzcll_smallBk">
                                                    <div className="ygl">
                                                        <span>4347.2万</span>人
                                                    </div>
                                                </div>
                                                <div className="sfzcll_smallBk">
                                                    <div className="ygh">
                                                        <span>4347.2万</span>人
                                                    </div>
                                                </div>
                                                <div className="clear"></div>
                                            </div>
                                        </div>

                                    </div>
                            </div>
                        </div>
                        <div className="visual_con">
                            <div className="visual_conTop">
                                <div className="visual_conTop_box visual_conTop1">
                                    <div>
                                        <h3>当前警情数(起)</h3>
                                        <p>67</p>
                                        <div className="conTop_smil">
                                            <a className="sz">日环比:<span>+3%</span><i className="fa fa-long-arrow-up"></i></a>
                                            <a className="xd">周环比:<span>-2%</span><i className="fa fa-long-arrow-down"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="visual_conTop_box visual_conTop2">
                                    <div>
                                        <h3>区域拥堵指数</h3>
                                        <p>1.4</p>
                                        <div className="conTop_smil">
                                            <a className="">缓行</a>
                                            <a className="">平均车速<span>120</span><i>KM/H</i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="visual_conTop_box visual_conTop1">
                                    <div>
                                        <h3>当前警情数(起)</h3>
                                        <p>99</p>
                                        <div className="conTop_smil">
                                            <a className="sz">日环比:<span>+3%</span><i className="fa fa-long-arrow-up"></i></a>
                                            <a className="xd">周环比:<span>-2%</span><i className="fa fa-long-arrow-down"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="visual_conTop_box visual_conTop2">
                                    <div>
                                        <h3>当前警情数(起)</h3>
                                        <p>7421</p>
                                        <div className="conTop_smil">
                                            <a className="null">null</a>
                                            <a className="xd">月环比:<span>-2%</span><i className="fa fa-long-arrow-down"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div className="visual_conBot">
                                <img className="visual_conBot_l" src="../src/img/images/ksh42.png" />
                                <img className="visual_conBot_2" src="../src/img/images/ksh43.png" />
                                <img className="visual_conBot_3" src="../src/img/images/ksh44.png" />
                                <img className="visual_conBot_4" src="../src/img/images/ksh45.png" />
                                <div className="visual_chart_text">
                                    <h2>交通大数据分析平台</h2>
                                </div>
                                <div className="visual_conBot_bot">
                                    <div className="visualSssf_left">
                                        <h3>今日实时收费</h3>
                                        <a style="display:block">全区数据</a>
                                        <a>上城区</a>
                                        <a>拱墅区</a>
                                        <a>西湖区</a>
                                        <a>滨江区</a>
                                        <a>萧山区</a>
                                        <a>余杭区</a>
                                        <a >临平区</a>
                                        <a>钱塘区</a>
                                        <a>富阳区</a>
                                    </div>
                                    <div className="visualSssf_right">
                                        <div className="visualSssf_right_box" id="main5"></div>
                                        <div className="visualSssf_right_box" id="main6"></div>
                                        <div className="visualSssf_right_box" id="main7"></div>
                                    </div>
                                    <div className="clear"></div>
                                </div>
                            </div>
                        </div>
                        <div className="visual_right">
                            <div className="visual_box visualSfzsfl">
                                <div className="visual_title">
                                    <span>天气选择</span>

                                </div>

                            </div>
                            <div className="visual_box">
                                <div className="visual_title">
                                    <span>本月发生事件</span>
                                    <img src="../src/img/images/ksh33.png" />
                                </div>
                                <div className="swiper-container visual_swiper1 visual_chart">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide" id="main3"></div>
                                        <div className="swiper-slide" id="main31"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="visual_box">
                                <div className="visual_title">
                                    <span>收费站收费排行</span>
                                    <img src="../src/img/images/ksh33.png" />
                                </div>
                                <div className="swiper-container visual_swiper2 visual_chart">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide" id="main4"></div>
                                        <div className="swiper-slide" id="main41"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="clear"></div>
                    </div>

                </div>
                )
};
                export default MainPage;