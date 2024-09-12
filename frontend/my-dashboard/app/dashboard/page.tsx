"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Line, Bar, Pie } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

// Define types for the chart data structures
interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor?: string;
    backgroundColor?: string | string[];
    fill?: boolean;
  }[];
}

const Dashboard = () => {
  // State with TypeScript typing
  const [lineData, setLineData] = useState<ChartData | null>(null);
  const [barData, setBarData] = useState<ChartData | null>(null);
  const [pieData, setPieData] = useState<ChartData | null>(null);

  useEffect(() => {
    console.log('useEffect has run'); 

    // Fetch Line Chart Data
    axios.get('http://localhost:8000/api/line-chart-data/')
        .then(response => {
        setLineData({
          labels: response.data.labels,
          datasets: [{
            label: 'Line Chart',
            data: response.data.data,
            borderColor: 'rgb(75, 192, 192)',
            fill: false,
          }]
        });
      })
      .catch(error => console.error('Error fetching line chart data', error));

    // Fetch Bar Chart Data
    axios.get('http://localhost:8000/api/bar-chart-data/')
      .then(response => {
        setBarData({
          labels: response.data.labels,
          datasets: [{
            label: 'Bar Chart',
            data: response.data.data,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
          }]
        });
      })
      .catch(error => console.error('Error fetching bar chart data', error));

    // Fetch Pie Chart Data
    axios.get('http://localhost:8000/api/pie-chart-data/')
    .then(response => {
        setPieData({
          labels: response.data.labels,
          datasets: [{
            label: 'Pie Chart',  // Fix: Add label for the Pie chart
            data: response.data.data,
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
          }]
        });
      })
      .catch(error => console.error('Error fetching pie chart data', error));
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {lineData && <Line data={lineData} />}
      {barData && <Bar data={barData} />}
      {pieData && <Pie data={pieData} />}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center' as 'center',
  },
  title: {
    fontSize: '2em',
    marginBottom: '20px',
  },
  error: {
    color: 'red',
  },
  chartContainer: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center' as 'center',
    gap: '20px',
  },
  chart: {
    maxWidth: '100px', 
    width: '50%',     
    height: '100px',   
  }
};

export default Dashboard;
