import { CloudOutlined, ThunderboltOutlined } from "@ant-design/icons";

const DetailSection = () => {
    return (
        <div className="detail-section">
            <div className='detail-title'>天气选择</div>
            <div className="weather-icon">
                {/* <CloudOutlined />
                <ThunderboltOutlined /> */}
                <div>snow</div>
                <div>rain</div>
                <div>star</div>
                <div>storm</div>
            </div>

        </div>
    )
}
export default DetailSection; 