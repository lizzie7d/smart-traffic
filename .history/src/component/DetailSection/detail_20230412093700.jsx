import { CloudOutlined, ThunderboltOutlined } from "@ant-design/icons";

const DetailSection = () => {
    return (
        <div className="detail-section">
            <div className='title'>天气选择</div>
            <div className="weather-icon">
                <CloudOutlined />
                <ThunderboltOutlined />

            </div>

        </div>
    )
}
export default DetailSection; 