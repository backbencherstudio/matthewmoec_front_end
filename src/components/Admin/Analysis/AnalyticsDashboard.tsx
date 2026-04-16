/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useGetAnalysisStatisticsQuery } from "@/redux/features/admin/analytics/analytics";
import { useMemo } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Skeleton Loader
function ChartSkeleton() {
  return (
    <div className="bg-white rounded-2xl border border-[#ECEFF3] p-5 sm:p-6 animate-pulse">
      <div className="h-7 w-64 bg-[#ECEFF3] rounded mb-6" />
      <div className="h-55 bg-[#F6F8FA] rounded-xl" />
    </div>
  );
}

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
  const { data, isLoading, error } = useGetAnalysisStatisticsQuery({});

  // Process backend data into chart format
  const chartData = useMemo(() => {
    if (!data?.data?.last_6_month_click_statistic?.length) {
      return [];
    }

    return data.data.last_6_month_click_statistic.map((item: any) => {
      // Convert "2026-04" → "Apr" (or keep as is if you prefer full month)
      const [, monthNum] = item.month.split("-");
      const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      const shortMonth = monthNames[parseInt(monthNum) - 1] || monthNum;

      return {
        month: shortMonth,
        clicks: item.clicks || 0,
        fullMonth: item.month, // optional: for tooltip if needed
      };
    });
  }, [data]);

  // Show skeleton while loading
  if (isLoading) {
    return <ChartSkeleton />;
  }

  // Error state
  if (error || !data?.success) {
    return (
      <div className="bg-white rounded-2xl border border-[#ECEFF3] p-8 text-center">
        <p className="text-red-500">Failed to load monthly clicks data</p>
      </div>
    );
  }

  return (
    <div>
      {/* Monthly Clicks Chart */}
      <div className="bg-white rounded-2xl border border-[#ECEFF3] p-5 sm:p-6">
        <h2 className="text-[#1A2A56] text-lg md:text-xl font-semibold leading-[132%] tracking-[0.1px] mb-5">
          Monthly Clicks — Last 6 Months
        </h2>

        {chartData.length === 0 ? (
          <div className="h-55 flex items-center justify-center text-[#B0B8C9]">
            No click data available yet
          </div>
        ) : (
          <ResponsiveContainer width="100%" height={220}>
            <BarChart
              data={chartData}
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
        )}
      </div>
    </div>
  );
}
