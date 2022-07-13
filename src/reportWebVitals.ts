// 用于测量真实用户的所有Web Vitals指标
import { ReportHandler } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    /**
     * 衡量的是页面整个生命周期中每次元素发生的非预期布局偏移得分的总和。
     * CLS<0.1，同样标准需要覆盖站点75%的用户
     * getCLS Cumulative Layout Shift
     * 首次输入延迟
     * getFID First Input Delay
     * 低 FID 有助于让用户确信页面是有效的。
     * First Contentful Paint 首次内容绘制(FCP)
     * getFCP
     * Largest Contentful Paint 最大内容绘制 (LCP)
     * getLCP
     *  (Time To First Byte)
     * getTTFB
     */
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
