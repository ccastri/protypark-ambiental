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
}

const CircularProgressBar: React.FC<ICircularProgressBarProps> = ({ title, data }) => {
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
                    display: true,
                  },
                },
                animation: {
                  animateRotate: true,
                  animateScale: true,
                },
              },
            });
          }
        }
      }
    } else {
      setIsAnimated(false);
    }
  }, [values, labels, bgColors, title, inView, isAnimated, entry]);

  return (
    <div className='h-full max-w-4xl items-center justify-center mx-auto flex flex-col' ref={ref}>
      <h2 className="text-center mx-auto">{title}</h2>
      <canvas id={`chart-canvas-${title.replace(/\s/g, '')}`}></canvas>
    </div>
  );
};

export default CircularProgressBar;
