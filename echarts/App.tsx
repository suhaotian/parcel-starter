import React, { useEffect, useLayoutEffect, useRef } from 'react'
import Echart from './Echart'
import echarts from './setup';


export default function App() {
  const ref = useRef<echarts.ECharts | undefined>(undefined);

  useLayoutEffect(() => {
    console.log(ref.current);
    setTimeout(() => {
      console.log(ref.current, ref.current?.getWidth());
    }, 1000)
  }, [ref.current]);


  return <Echart ref={ref} style={{
    width: '100%',
    height: '100vh',
  }} option={{
    title: {
      text: 'ECharts 入门示例'
    },
    tooltip: {},
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  }} />
}