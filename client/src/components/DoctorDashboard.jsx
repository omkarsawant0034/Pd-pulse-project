import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const mockSensorData = [
  { time: "10:00", flex: 20, mpu: 35 },
  { time: "10:05", flex: 25, mpu: 40 },
  { time: "10:10", flex: 22, mpu: 38 },
  { time: "10:15", flex: 30, mpu: 42 },
  { time: "10:20", flex: 28, mpu: 45 },
];

const DoctorDashboard = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary mb-4">Doctor's Dashboard - PD Pulse</h2>

      <p className="text-center text-muted mb-4">
        This dashboard will integrate real-time data from wearable sensors (ESP32, Flex Sensor, MPU-4050) to monitor tremors and other Parkinson’s indicators. Machine Learning models will be used in future to provide predictive insights based on the data collected.
      </p>

      <div className="row mb-4">
        <div className="col-md-6 mb-4">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title text-center">Sensor Modules Used</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>ESP32:</strong> Wi-Fi enabled microcontroller for real-time data transmission
                </li>
                <li className="list-group-item">
                  <strong>Flex Sensor:</strong> Detects finger bending to monitor rigidity or tremor
                </li>
                <li className="list-group-item">
                  <strong>MPU-4050:</strong> Tracks orientation and movement (accelerometer + gyroscope)
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title text-center">Sample Sensor Data (Mocked)</h5>
              <LineChart
                width={400}
                height={250}
                data={mockSensorData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="flex" stroke="#007bff" name="Flex Sensor" />
                <Line type="monotone" dataKey="mpu" stroke="#28a745" name="MPU-4050" />
              </LineChart>
            </div>
          </div>
        </div>
      </div>

      <div className="alert alert-warning text-center" role="alert">
        ⚠️ <strong>Note:</strong> Real-time sensor data collection and ML-based analysis for tremor prediction will be implemented in future updates.
      </div>
    </div>
  );
};

export default DoctorDashboard;
