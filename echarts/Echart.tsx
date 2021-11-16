import React, { useState, useRef, useEffect, useMemo, useLayoutEffect } from 'react'
import echarts, { ECOption } from './setup';

export type EchartProp = {
  option: ECOption,
  style?: {
    width: string,
    height: string
  }
  className?: string
}

const removeUndefined = (obj: object) => {
  for (let key in obj) {
    if (obj[key as keyof typeof obj] === undefined) {
      delete obj[key as keyof typeof obj]
    }
  }
  return obj
}

const Echart: React.FC<EchartProp> = ({ option, className, style = { width: '100%', height: '100%' } }) => {

  const chartRef = useRef<HTMLDivElement>(null)
  const [echartsInstance, setEchartsInstance] = useState<echarts.ECharts>()

  useLayoutEffect(() => {
    const instance = echarts.init(chartRef.current as HTMLDivElement);
    setEchartsInstance(instance)
    return () => {
      instance.dispose();
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      echartsInstance?.resize()
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [echartsInstance])

  useEffect(() => {
    echartsInstance?.setOption(option)
  }, [echartsInstance, option])


  const obj = useMemo(() => {
    return removeUndefined({ option, className, style });
  }, [option, className, style])

  return (
    <div ref={chartRef} {...obj} />
  )
}

export default Echart