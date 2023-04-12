/* eslint-disable jsx-a11y/alt-text */
import "./App.css";
// import DetailSection from "./component/DetailSection/detail";
// import MainPage from "./pages/main";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header>
      <content className="App-content">
        <MainPage />
      </content> */}
      <div className="visual">
        <div className="visual_left">
          <div className="visual_box">
            <div className="visual_title">
              <span>交通流量</span>
              <img src="images/ksh33.png" />
            </div>
            <div className="visual_chart" id="main1"></div>
          </div>
          <div className="visual_box">
            <div className="visual_title">
              <span>交通工具流量</span>
              <img src="images/ksh33.png" />
            </div>
            <div className="visual_chart" id="main2"></div>
          </div>
          <div className="visual_box">
            <div className="visual_title">
              <span>收费站车流量</span>
              <img src="images/ksh33.png" />
            </div>
            <div className="visual_chart sfzcll">
              <a>运输方式</a>
              <a>客运量</a>
              <a>货运量</a>
              <div className="sfzcll_pos_box">
                <div className="sfzcll_box">
                  <img className="sfzcll_bkJk" src="images/ksh34.png" />
                  <img className="sfzcll_bkJk" src="images/ksh34.png" />
                  <img className="sfzcll_bkJk" src="images/ksh34.png" />
                  <img className="sfzcll_bkJk" src="images/ksh34.png" />
                  <label>
                    <img src="images/ksh35.png" />
                    公路运输
                  </label>
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
                  <img className="sfzcll_bkJk" src="images/ksh34.png" />
                  <img className="sfzcll_bkJk" src="images/ksh34.png" />
                  <img className="sfzcll_bkJk" src="images/ksh34.png" />
                  <img className="sfzcll_bkJk" src="images/ksh34.png" />
                  <label>
                    <img src="images/ksh35.png" />
                    公路运输
                  </label>
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
                  <img className="sfzcll_bkJk" src="images/ksh34.png" />
                  <img className="sfzcll_bkJk" src="images/ksh34.png" />
                  <img className="sfzcll_bkJk" src="images/ksh34.png" />
                  <img className="sfzcll_bkJk" src="images/ksh34.png" />
                  <label>
                    <img src="images/ksh35.png" />
                    公路运输
                  </label>
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
                  <a className="sz">
                    日环比:<span>+3%</span>
                    <i className="fa fa-long-arrow-up"></i>
                  </a>
                  <a className="xd">
                    周环比:<span>-2%</span>
                    <i className="fa fa-long-arrow-down"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="visual_conTop_box visual_conTop2">
              <div>
                <h3>区域拥堵指数</h3>
                <p>1.4</p>
                <div className="conTop_smil">
                  <a className="">缓行</a>
                  <a className="">
                    平均车速<span>120</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="visual_conTop_box visual_conTop1">
              <div>
                <h3>当前警情数(起)</h3>
                <p>99</p>
                <div className="conTop_smil">
                  <a className="sz">
                    日环比:<span>+3%</span>
                    <i className="fa fa-long-arrow-up"></i>
                  </a>
                  <a className="xd">
                    周环比:<span>-2%</span>
                    <i className="fa fa-long-arrow-down"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="visual_conTop_box visual_conTop2">
              <div>
                <h3>当前警情数(起)</h3>
                <p>7421</p>
                <div className="conTop_smil">
                  <a className="null">null</a>
                  <a className="xd">
                    月环比:<span>-2%</span>
                    <i className="fa fa-long-arrow-down"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="clear"></div>
          </div>
          <div className="visual_conBot">
            <img className="visual_conBot_l" src="images/ksh42.png" />
            <img className="visual_conBot_2" src="images/ksh43.png" />
            <img className="visual_conBot_3" src="images/ksh44.png" />
            <img className="visual_conBot_4" src="images/ksh45.png" />
            <div className="visual_chart_text">
              <h1>出行服务+大数据</h1>
              <h2>东海省交通大数据分析平台</h2>
            </div>
            <div className="visual_chart" id="main8"></div>
            <div className="visual_conBot_bot">
              <div className="visualSssf_left">
                <h3>今日实时收费</h3>
                <a style="display:block">全省数据</a>
                <a>大同北</a>
                <a>大同南</a>
                <a>朔州</a>
                <a>吕梁北</a>
                <a>吕梁南</a>
                <a>太原</a>
                <a className="active">晋中</a>
                <a>太旧</a>
                <a>长治</a>
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
          <div className="visual_box">
            <div className="visual_title">
              <span>本月发生事件</span>
              <img src="images/ksh33.png" />
            </div>
            <div className="swiper-container visual_swiper1 visual_chart">
              <div className="swiper-wrapper">
                <div className="swiper-slide" id="main3"></div>
                <div className="swiper-slide" id="main31"></div>
              </div>
            </div>
          </div>
          <div className="visual_box visualSfzsfl">
            <div className="visual_title">
              <span>收费站收费量</span>
              <img src="images/ksh33.png" />
            </div>
            <div className="visual_chart" id="main9"></div>
            <div className="visual_table">
              <table>
                <tr>
                  <td>小型车</td>
                  <td>中型车</td>
                  <td>大型车</td>
                </tr>
                <tr>
                  <td>2486万</td>
                  <td>2486万</td>
                  <td>2486万</td>
                </tr>
                <tr>
                  <td>2486万</td>
                  <td>2486万</td>
                  <td>2486万</td>
                </tr>
                <tr>
                  <td>2486万</td>
                  <td>2486万</td>
                  <td>2486万</td>
                </tr>
                <tr>
                  <td>2486万</td>
                  <td>2486万</td>
                  <td>2486万</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="visual_box">
            <div className="visual_title">
              <span>收费站收费排行</span>
              <img src="images/ksh33.png" />
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
    // </div>
  );
}

export default App;
