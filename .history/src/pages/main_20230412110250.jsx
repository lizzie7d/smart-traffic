/* eslint-disable jsx-a11y/alt-text */
import loadingPic from '../img/images/jzxz1.png';
const MainPage = () => {
    return (
        <div>
            <div id="load">
                <div class="load_img">
                    <img className="jzxz1" src={loadingPic} />
                    <img className="jzxz2" src="./img/images/jzxz2.png" />
                </div>
            </div>
        </div>
    )
};
export default MainPage;