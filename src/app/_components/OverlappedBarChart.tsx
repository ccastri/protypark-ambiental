// Import necessary modules
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const OverlappedBarChart = ({ data }: {data: number[]}) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart>();

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        // Destroy previous chart instance if it exists
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }

        chartInstanceRef.current = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Instalacion', 'Insumos', 'Mantenimiento'],
            datasets: [{
              label: 'Dinero Gastado',
              data: data,
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)', // Culture Installation
                'rgba(54, 162, 235, 0.5)', // Supplies
                'rgba(255, 206, 86, 0.5)' // Maintenance
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
              ],
              borderWidth: 1,
              stack: 'Stack 1'
            },
            {
                label: 'Dinero ahorrado',
                data: data,
                backgroundColor: [
                    'rgba(54, 162, 235, 0.5)', // Supplies
                    'rgba(255, 206, 86, 0.5)', // Maintenance
                    'rgba(255, 99, 132, 0.5)', // Culture Installation
                  
                  
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1,
                stack: 'Stack 1'
              }
        ]
          },
          options: {
            scales: {
                x:{
                    stacked: true
                },
                y: {
                    beginAtZero: true // Specify options for y-axis scale
                  }
            }
          }
        });
      }
    }

    return () => {
      // Cleanup function to destroy the chart instance
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [data]);

  return (
    <div>
      <canvas ref={chartRef} />
    </div>
  );
};

export default OverlappedBarChart;
