import React from 'react';
import { Chart as chartJs, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2';

chartJs.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)

function Chart(props) {
  const createGradient = () => {
    const ctx = document.createElement('canvas').getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 400); // Adjust the gradient height as needed
    gradient.addColorStop(0, 'rgb(55, 203, 169, 255)'); // Solid green at the top
    gradient.addColorStop(1, 'rgba(55, 203, 169,0.1)'); // Reduced opacity green at the bottom
    return gradient;
  };
  const data = {
    labels:['Jan','Feb','Mar','Apr','May','Jun','Jul', 'Aug','Sep','Oct','Nov', 'Dec'],
    datasets:[
      {
        label: '369',
        data:[6000,16000, 2700, 28000,9000,45000, 9000, 23000, 33000,9000, 30000,26000],
        backgroundColor:'rgba(55, 203, 169,0.2)',
        hoverBackgroundColor: createGradient(),
        borderRadius: 100,
        borderWidth: 0,
      },
    ]
  }
  const options={
    scales: {
      x: {
        type: 'category',
        display: true,
        grid:{
          display: false
        }
      },
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false, // Hide legend
      },
    },
    responsive: true, // Enable responsiveness
    maintainAspectRatio: false, // Allow chart to adjust width and height
  }
  return (
    <div style={{height: '80%'}}>
      <Bar data={data} options={options}></Bar>
    </div>
  );
}

export default Chart;