import React, { useEffect, useRef, useState } from 'react';
import Chart, { ChartConfiguration } from 'chart.js/auto';
import { useInView } from 'react-intersection-observer';

interface ICircularProgressBarProps {
  title: string;
  data: {
    labels: string[];
    values: number[];
    bgColors: string[];
  };
  circleWidth: number;
}

const CircularProgressBar: React.FC<ICircularProgressBarProps> = ({ title, data, circleWidth }) => {
  const { labels, values, bgColors } = data;
  const chartRef = useRef<Chart<"doughnut", number[], string> | null>(null);
  const [isAnimated, setIsAnimated] = useState(false);
  const [ref, inView, entry] = useInView();

  useEffect(() => {
    if (inView) {
      if (!isAnimated || (entry && entry.isIntersecting)) {
        setIsAnimated(true);

        const canvas = document.getElementById(`chart-canvas-${title.replace(/\s/g, '')}`) as HTMLCanvasElement;
        if (canvas) {
          const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
          if (chartRef.current) {
            chartRef.current!.data.datasets![0].data = values;
            chartRef.current.update();
          } else {
            chartRef.current = new Chart(ctx, {
              type: 'doughnut',
              data: {
                labels,
                datasets: [
                  {
                    data: values,
                    backgroundColor: bgColors,
                    borderWidth: 0,
                  },
                ],
              },
              options: {
                plugins: {
                  legend: {
                    display: false,
                  },
                  // tooltip: {
                  //   callbacks: {
                  //     label: function(context) {
                  //       return `${labels[context.dataIndex]}: ${values[context.dataIndex]}`;
                  //     }
                  //   }
                  // }
                },

                  
                animation: {
                  animateRotate: true,
                  animateScale: true,
                },
                cutout: `${100 - circleWidth}%`
              },
            });
          }
        }
      }
    } else {
      setIsAnimated(false);
    }
  }, [values, labels, bgColors, title, inView, isAnimated, entry, circleWidth]);

  return (
  <div className='h-full max-w-4xl space-y-4 justify-center mx-auto flex flex-col' ref={ref}>
    <h2 className="text-center mx-auto">{title}</h2>
    <div className="legend-container">
    </div>
    <canvas id={`chart-canvas-${title.replace(/\s/g, '')}`}></canvas>
      {labels.map((label, index) => (
        <div key={label} className="flex space-x-4 text-left items-center  legend-item">
          <div className={`border-2 items-center flex justify-center h-3 w-3 rounded-full  mr-2`} style={{ backgroundColor: bgColors[index] }}> 
          </div>
          
          <div className="legend-label">{label} {values[index]}</div>
        </div>
      ))}
  </div>

  );
};

export default CircularProgressBar;
