import * as echarts from 'echarts/lib/echarts.js';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend'
import 'echarts/lib/chart/pie';
import { useEffect, useState } from 'react';
const Echartstest = (props) => {
    const colors = ['#5470C6', '#91CC75', '#EE6666'];
    let [main, setMain] = useState('');
    // const option = {
    //     title: {
    //         text: '某站点用户访问来源',
    //         subtext: '纯属虚构',
    //         left: 'center'
    //     },
    //     tooltip: {
    //         trigger: 'item',
    //         formatter: '{a} <br/>{b} : {c} ({d}%)'
    //     },
    //     legend: {
    //         orient: 'vertical',
    //         left: 'left',
    //         data: ['直接访问', '邮件营销', '搜索引擎']
    //     },
    //     series: [
    //         {
    //             name: '访问来源',
    //             type: 'line',
    //             radius: '55%',
    //             center: ['50%', '60%'],
    //             data: [
    //                 { value: 335, name: '直接访问' },
    //                 { value: 310, name: '邮件营销' },
    //                 { value: 234, name: '联盟广告' },
    //                 { value: 135, name: '视频广告' },
    //                 { value: 1548, name: '搜索引擎' }
    //             ],
    //             emphasis: {
    //                 itemStyle: {
    //                     shadowBlur: 10,
    //                     shadowOffsetX: 0,
    //                     shadowColor: 'rgba(0, 0, 0, 0.5)'
    //                 }
    //             }
    //         }
    //     ]
    // };
    const option = {
        color: colors,
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        grid: {
            right: '20%'
        },
        toolbox: {
            feature: {
                dataView: { show: true, readOnly: false },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        legend: {
            data: ['Evaporation', 'Precipitation', 'Temperature']
        },
        xAxis: [
            {
                type: 'category',
                axisTick: {
                    alignWithLabel: true
                },
                // prettier-ignore
                data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: 'Evaporation',
                position: 'right',
                alignTicks: true,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: colors[0]
                    }
                },
                axisLabel: {
                    formatter: '{value} ml'
                }
            },
            {
                type: 'value',
                name: 'Precipitation',
                position: 'right',
                alignTicks: true,
                offset: 80,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: colors[1]
                    }
                },
                axisLabel: {
                    formatter: '{value} ml'
                }
            },
            {
                type: 'value',
                name: '温度',
                position: 'left',
                alignTicks: true,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: colors[2]
                    }
                },
                axisLabel: {
                    formatter: '{value} °C'
                }
            }
        ],
        series: [
            {
                name: 'Evaporation',
                type: 'bar',
                data: [
                    2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
                ]
            },
            {
                name: 'Precipitation',
                type: 'bar',
                yAxisIndex: 1,
                data: [
                    2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
                ]
            },
            {
                name: 'Temperature',
                type: 'line',
                yAxisIndex: 2,
                data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
            }
        ]
    };
    useEffect(() => {
        var node = document.getElementById('main')
        setMain(node)
    }, [main])
    if (main !== "") {
        var myChart = echarts.init(main);
        myChart.setOption(option);
    }
    return (
        <div
            style={{ height: "100%", width: "100%" }}
            id="main"
        ></div>
    )
}
export default Echartstest;


