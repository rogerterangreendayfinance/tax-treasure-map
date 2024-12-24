import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  Legend
} from "recharts";

interface ResultsChartsProps {
  timeSeriesData: Array<{
    year: string;
    withTrust: number;
    withoutTrust: number;
  }>;
  radialData: Array<{
    name: string;
    value: number;
    fill: string;
  }>;
}

export const ResultsCharts = ({ timeSeriesData, radialData }: ResultsChartsProps) => {
  return (
    <div className="space-y-8">
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="20%"
            outerRadius="90%"
            data={radialData}
            startAngle={180}
            endAngle={0}
          >
            <RadialBar
              background
              dataKey="value"
              cornerRadius={10}
              label={{ fill: '#666', position: 'insideStart' }}
            />
            <Legend
              iconSize={10}
              width={120}
              height={140}
              layout="vertical"
              verticalAlign="middle"
              align="right"
            />
            <Tooltip />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>

      <div className="h-[300px]">
        <h3 className="text-lg font-semibold mb-4">10-Year Growth Projection</h3>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={timeSeriesData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
            <Area
              type="monotone"
              dataKey="withTrust"
              stackId="1"
              stroke="#6366F1"
              fill="#6366F1"
              fillOpacity={0.6}
              name="With Trust"
            />
            <Area
              type="monotone"
              dataKey="withoutTrust"
              stackId="2"
              stroke="#82ca9d"
              fill="#82ca9d"
              fillOpacity={0.4}
              name="Without Trust"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};