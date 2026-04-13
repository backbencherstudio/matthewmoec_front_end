/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const monthlyData = [
  { month: "Oct", clicks: 9200 },
  { month: "Nov", clicks: 10800 },
  { month: "Dec", clicks: 15400 },
  { month: "Jan", clicks: 12300 },
  { month: "Feb", clicks: 13100 },
  { month: "Mar", clicks: 12800 },
];

const formatYAxis = (value: number) => {
  if (value >= 1000) return `${(value / 1000).toFixed(0)}k`;
  return String(value);
};

const formatLabel = (value: number) => {
  if (value >= 1000) return `${(value / 1000).toFixed(1)}k`;
  return value;
};

const CustomBar = (props: any) => {
  const { x, y, width, height } = props;
  const radius = 6;
  return (
    <path
      d={`M${x},${y + radius} 
         Q${x},${y} ${x + radius},${y} 
         L${x + width - radius},${y} 
         Q${x + width},${y} ${x + width},${y + radius} 
         L${x + width},${y + height} 
         L${x},${y + height} Z`}
      fill="url(#barGradient)"
    />
  );
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1F3266] text-white text-xs px-3 py-2 rounded-lg shadow-lg">
        <p className="font-semibold">{label}</p>
        <p>{payload[0].value.toLocaleString()} clicks</p>
      </div>
    );
  }
  return null;
};

const CustomBarLabel = (props: any) => {
  const { x, y, width, value } = props;
  return (
    <text
      x={x + width / 2}
      y={y - 6}
      fill="#6B7A99"
      textAnchor="middle"
      fontSize={11}
      fontWeight={500}
    >
      {formatLabel(value)}
    </text>
  );
};

export default function AnalyticsDashboard() {
  return (
    <div>
      {/* Monthly Clicks Chart */}
      <div className="bg-white rounded-2xl border border-[#ECEFF3] p-5 sm:p-6">
        <h2 className="text-[#1A2A56] text-lg md:text-xl font-semibold leading-[132%] tracking-[0.1px] mb-5">
          Monthly Clicks — Last 6 Months
        </h2>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart
            data={monthlyData}
            margin={{ top: 20, right: 8, left: -20, bottom: 0 }}
            barCategoryGap="30%"
          >
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3658B4" />
                <stop offset="100%" stopColor="#1F3266" />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="#F0F2F7" />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#8A94A6", fontSize: 12 }}
            />
            <YAxis
              tickFormatter={formatYAxis}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#8A94A6", fontSize: 11 }}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: "transparent" }}
            />
            <Bar
              dataKey="clicks"
              shape={<CustomBar />}
              label={<CustomBarLabel />}
              maxBarSize={48}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
