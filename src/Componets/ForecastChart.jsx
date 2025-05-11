import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
} from "recharts";

const ForecastChart = ({ data }) => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-0 mt-6 sm:mt-8 mx-auto max-w-4xl">
      {/* Glass Card with responsive padding */}
      <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-md border border-white/10">
        <ResponsiveContainer width="100%" height={240} className="mx-auto">
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
              vertical={false} // Remove vertical grid lines for cleaner look
            />

            <XAxis
              dataKey="title"
              stroke="#cbd5e1"
              tick={{ 
                fontSize: 10, 
                fill: "#e2e8f0",
              }}
              axisLine={false}
              tickLine={false}
              tickMargin={8} // Consistent spacing
              padding={{ left: 10, right: 10 }} // Equal padding
            />

            <YAxis
              stroke="#cbd5e1"
              tick={{ 
                fontSize: 10,
                fill: "#e2e8f0" 
              }}
              axisLine={false}
              tickLine={false}
              tickMargin={8} // Consistent spacing
              padding={{ top: 10, bottom: 10 }} // Equal padding
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
                color: "#38bdf8", 
                fontSize: 12 
              }}
            />

            {/* Temperature Area */}
            <Area
              type="monotone"
              dataKey="temp"
              stroke="none"
              fill="#38bdf833"
              activeDot={false}
            />

            {/* Temperature Line */}
            <Line
              type="monotone"
              dataKey="temp"
              stroke="#38bdf8"
              strokeWidth={2.5}
              dot={{ 
                r: 3,
                stroke: "#ffffff",
                strokeWidth: 1,
                fill: "#38bdf8"
              }}
              activeDot={{ 
                r: 5,
                stroke: "#ffffff",
                strokeWidth: 1.5,
                fill: "#38bdf8"
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ForecastChart;