import "./App.css";
import DetailSection from "./component/DetailSection/detail";
// import MainPage from "./pages/main";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header>
      <content className="App-content">
        <MainPage />
      </content> */}
      <div class="header">
        <h1 class="header-title">智慧交通</h1>
      </div>
      <div class="wrapper">
        <div class="content">
          <div class="col col-l">
            <div class="xpanel-wrapper xpanel-wrapper-40">
              <div class="xpanel xpanel-l-t">
                <div class="title"></div>
              </div>
            </div>
            <div class="xpanel-wrapper xpanel-wrapper-60">
              <div class="xpanel xpanel-l-b">
                <div class="title"></div>
              </div>
            </div>
          </div>
          <div class="col col-c">
            <div class="xpanel-wrapper xpanel-wrapper-75">
              <div class="xpanel no-bg"></div>
            </div>
            <div class="xpanel-wrapper xpanel-wrapper-25">
              <div class="xpanel xpanel-c-b">
                <div class="title title-long"></div>
              </div>
            </div>
          </div>
          <div class="col col-r">
            <div class="xpanel-wrapper xpanel-wrapper-25">
              <div class="xpanel xpanel-r-t">
                {/* <div class="title">天气选择</div> */}
                <DetailSection />
              </div>
            </div>
            <div class="xpanel-wrapper xpanel-wrapper-30">
              <div class="xpanel xpanel-r-m">
                <div class="title"></div>
              </div>
            </div>
            <div class="xpanel-wrapper xpanel-wrapper-45">
              <div class="xpanel xpanel-r-b">
                <div class="title"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
