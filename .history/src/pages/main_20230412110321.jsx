/* eslint-disable jsx-a11y/alt-text */
import loadingPicOne from '../img/images/jzxz1.png';
import loadingPicTwo from '../img/images/jzxz2.png';

const MainPage = () => {
    return (
        <div>
            <div id="load">
                <div class="load_img">
                    <img className="jzxz1" src={loadingPicOne} />
                    <img className="jzxz2" src={loadingPicTwo} />
                </div>
            </div>
        </div>
    )
};
export default MainPage;