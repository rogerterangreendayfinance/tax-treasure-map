import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download } from "lucide-react";
import { ProgressBar } from "./ProgressBar";
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

interface CalculatorResultProps {
  amount: number;
  onReset: () => void;
}

export const CalculatorResult = ({ amount, onReset }: CalculatorResultProps) => {
  const taxRate = 0.25; // Example tax rate
  const afterTax = amount * (1 - taxRate);
  const withTrust = afterTax * 1.2; // Example trust benefit calculation

  // Environmental impact data
  const environmentalImpact = {
    co2Avoided: 48413,
    treesPlanted: 2222,
    coalNotBurned: 44,
    vehiclesOffRoad: 10
  };

  // Data for the area chart showing growth over time
  const timeSeriesData = Array.from({ length: 10 }, (_, i) => ({
    year: `Year ${i + 1}`,
    withTrust: withTrust * (1 + 0.08) ** i, // 8% annual growth with trust
    withoutTrust: afterTax * (1 + 0.05) ** i, // 5% annual growth without trust
  }));

  // Data for the radial chart showing current amounts
  const radialData = [
    {
      name: 'Original',
      value: amount,
      fill: '#8884d8'
    },
    {
      name: 'After Tax',
      value: afterTax,
      fill: '#82ca9d'
    },
    {
      name: 'With Trust',
      value: withTrust,
      fill: '#6366F1'
    }
  ];

  return (
    <Card className="w-full max-w-4xl p-6 animate-slide-up">
      <ProgressBar currentStep={2} totalSteps={2} className="mb-6" />
      
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Your Results</h2>
          <p className="text-sm text-gray-500">Based on current tax rates</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left side: Current amounts */}
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500">Original Amount</p>
              <p className="text-3xl font-bold">${amount.toLocaleString()}</p>
            </div>
            
            <div className="p-4 bg-primary/10 rounded-lg">
              <p className="text-sm text-gray-500">After Tax</p>
              <p className="text-3xl font-bold text-primary">
                ${afterTax.toLocaleString()}
              </p>
            </div>

            <div className="p-4 gradient-bg text-white rounded-lg">
              <p className="text-sm opacity-90">With Trust</p>
              <p className="text-3xl font-bold">
                ${withTrust.toLocaleString()}
              </p>
            </div>

            {/* Success Highlight Section */}
            <div className="p-4 bg-green-50 rounded-lg border border-green-100">
              <p className="text-lg font-semibold text-green-800">
                Investment Benefits
              </p>
              <p className="text-sm text-green-600 mt-2">
                By investing ${amount.toLocaleString()}, you could unlock benefits of ${(withTrust * 2.37).toLocaleString()} over 25+ years (237% ROI)
              </p>
            </div>

            {/* Environmental Impact Section */}
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <p className="text-lg font-semibold text-blue-800 mb-3">
                Environmental Impact
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-sm text-blue-600">CO2 Avoided</p>
                  <p className="text-lg font-bold text-blue-800">{environmentalImpact.co2Avoided.toLocaleString()} kg</p>
                </div>
                <div>
                  <p className="text-sm text-blue-600">Trees Planted</p>
                  <p className="text-lg font-bold text-blue-800">{environmentalImpact.treesPlanted.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-blue-600">Coal Not Burned</p>
                  <p className="text-lg font-bold text-blue-800">{environmentalImpact.coalNotBurned} tons</p>
                </div>
                <div>
                  <p className="text-sm text-blue-600">Vehicles Off Road</p>
                  <p className="text-lg font-bold text-blue-800">{environmentalImpact.vehiclesOffRoad} annually</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side: Radial visualization */}
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
        </div>

        {/* Growth projection chart */}
        <div className="h-[300px] mt-8">
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

        <div className="space-y-4">
          <Button 
            className="w-full gradient-bg hover:opacity-90"
            onClick={() => console.log("Download report")}
          >
            <Download className="mr-2 h-4 w-4" />
            Download Report
          </Button>
          
          <Button 
            className="w-full bg-blue-500 hover:bg-blue-600 text-white"
          >
            Request Contact
          </Button>

          <Button 
            onClick={onReset}
            variant="outline"
            className="w-full"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Calculate Another
          </Button>
        </div>
      </div>
    </Card>
  );
};