// Manually define the ReportHandler type, since it's no longer exported from 'web-vitals'.
type ReportHandler = (metric: {
    name: string;
    value: number;
    id: string;
    delta: number;
    entries: PerformanceEntry[];
  }) => void;
   
  // The reportWebVitals function that dynamically imports web-vitals and runs the handlers
  const reportWebVitals = (onPerfEntry?: ReportHandler) => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
      import("web-vitals").then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
        onCLS(onPerfEntry);
        onFID(onPerfEntry);
        onFCP(onPerfEntry);
        onLCP(onPerfEntry);
        onTTFB(onPerfEntry);
      });
    }
  };
   
  export default reportWebVitals;
   