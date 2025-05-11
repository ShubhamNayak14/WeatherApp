import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area
} from "recharts";

const renderHighTempDotWithIcon = ({ cx, cy, payload, index }) => (
  <g key={`dot-${index}`}>
    <image
      href={payload.icon}
      x={cx - 12}
      y={cy - 50}
      width={24}
      height={24}
      style={{ pointerEvents: "none" }}
      onError={(e) => {
        e.target.style.display = 'none'; // Hide if image fails to load
      }}
    />
    <circle
      cx={cx}
      cy={cy}
      r={4}
      fill="#facc15"
      stroke="white"
      strokeWidth={2}
    />
  </g>
);

const DailyForecastChart = ({ data }) => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-0 mt-6 sm:mt-8 mx-auto max-w-4xl">
  

      <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-md border border-white/10">
        <ResponsiveContainer width="100%" height={240}>
          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: 10,
              bottom: 10,
            }}
          >
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="#ffffff20"
              vertical={false}
            />
            
            <XAxis
              dataKey="title"
              stroke="#cbd5e1"
              tick={{
                fontSize: 10,
                fill: "#e2e8f0"
              }}
              axisLine={false}
              tickLine={false}
              tickMargin={8}
            />
            
            <YAxis
              stroke="#cbd5e1"
              tick={{
                fontSize: 10,
                fill: "#e2e8f0"
              }}
              axisLine={false}
              tickLine={false}
              tickMargin={8}
            />
            
            <Tooltip
              contentStyle={{
                backgroundColor: "#0f172a",
                border: "none",
                borderRadius: "8px",
                padding: "8px 12px",
              }}
              labelStyle={{
                color: "#e2e8f0",
                fontWeight: 500,
                fontSize: 12
              }}
              itemStyle={{
                color: "#facc15",
                fontSize: 12
              }}
            />

            {/* Shaded areas */}
            <Area
              type="monotone"
              dataKey="temp_max"
              stroke="none"
              fill="#facc1533"
              activeDot={false}
            />
            <Area
              type="monotone"
              dataKey="temp_min"
              stroke="none"
              fill="#60a5fa33"
              activeDot={false}
            />

            {/* Temperature lines */}
            <Line
              type="monotone"
              dataKey="temp_max"
              name="High"
              stroke="#facc15"
              strokeWidth={2.5}
              dot={(props) => renderHighTempDotWithIcon(props)}
              activeDot={{
                r: 5,
                stroke: "#ffffff",
                strokeWidth: 1.5,
                fill: "#facc15"
              }}
            />
            <Line
              type="monotone"
              dataKey="temp_min"
              name="Low"
              stroke="#60a5fa"
              strokeWidth={2.5}
              dot={{
                r: 3,
                stroke: "#ffffff",
                strokeWidth: 1,
                fill: "#60a5fa"
              }}
              activeDot={{
                r: 5,
                stroke: "#ffffff",
                strokeWidth: 1.5,
                fill: "#60a5fa"
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DailyForecastChart;