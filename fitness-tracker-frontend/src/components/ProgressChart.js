import React, { useRef, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ProgressChart = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy(); // Destroy previous chart instance before re-creating
    }

    // Create a new chart instance
    chartInstance.current = new ChartJS(chartRef.current, {
      type: 'line',
      data: {
        labels: data.labels,
        datasets: [
          {
            label: 'Calories Burned',
            data: data.datasets[0].data,
            fill: true, // Enable filling under the line
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Light background color
            borderColor: 'rgba(75, 192, 192, 1)', // Line color
            pointBackgroundColor: 'rgba(75, 192, 192, 1)', // Point color
            pointBorderColor: '#fff', // Point border color
            pointHoverBackgroundColor: '#fff', // Point hover background color
            pointHoverBorderColor: 'rgba(75, 192, 192, 1)', // Point hover border color
            tension: 0.1, // Smooth the line
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false, // Allows you to control the height independently
        scales: {
          x: {
            type: 'category', // Set your x-axis as category scale
            title: {
              display: true,
              text: 'Date',
              font: {
                size: 14, // Font size for x-axis title
              },
            },
          },
          y: {
            title: {
              display: true,
              text: 'Calories Burned',
              font: {
                size: 14, // Font size for y-axis title
              },
            },
            min: 0,
          },
        },
        plugins: {
          legend: {
            labels: {
              font: {
                size: 12, // Font size for legend
              },
            },
          },
          tooltip: {
            callbacks: {
              label: function (tooltipItem) {
                return `Calories: ${tooltipItem.parsed.y}`; // Custom tooltip format
              },
            },
          },
        },
      },
    });

    return () => {
      chartInstance.current.destroy(); // Cleanup on component unmount
    };
  }, [data]);

  return <canvas ref={chartRef} style={{ height: '300px', width: '100%' }}></canvas>; // Set height for the chart
};

export default ProgressChart;
