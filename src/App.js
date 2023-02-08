

import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import './App.css';
import Barchart from "./components/Barchart"
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import BubbleChart from './components/BubbleChart';
import { UserData } from "./Data"
function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [{
      label: "Users Gained",
      data: UserData.map((data) => data.userGain),
      backgroundColor: ["rgba(75,192,192,1)",
        "#ecf0f1",
        "#50AF95",
        "#f3ba2f",
        "#2a71d0",],
      // borderColor: "black"

    }]
  })

  return (
    <div className="App">
      <div style={{ width: 700 }}>
        <Barchart chartData={userData} />
        <LineChart chartData={userData} />
        <PieChart chartData={userData} />
        <BubbleChart chartData={userData} />



      </div>
    </div >

  );
}

export default App;
