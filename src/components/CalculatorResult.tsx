import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download } from "lucide-react";
import { ProgressBar } from "./ProgressBar";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

interface CalculatorResultProps {
  amount: number;
  onReset: () => void;
}

export const CalculatorResult = ({ amount, onReset }: CalculatorResultProps) => {
  const taxRate = 0.25; // Example tax rate
  const afterTax = amount * (1 - taxRate);
  const withTrust = afterTax * 1.2; // Example trust benefit calculation

  const chartData = [
    {
      name: "Without Trust",
      value: afterTax,
    },
    {
      name: "With Trust",
      value: withTrust,
    },
  ];

  return (
    <Card className="w-full max-w-md p-6 animate-slide-up">
      <ProgressBar currentStep={2} totalSteps={2} className="mb-6" />
      
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Your Results</h2>
          <p className="text-sm text-gray-500">Based on current tax rates</p>
        </div>
        
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
        </div>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#6366F1" />
            </BarChart>
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
          <p className="text-sm text-center text-gray-500">
            Get a detailed breakdown of your results, including next steps for maximizing savings.
          </p>
        </div>

        <Button 
          onClick={onReset}
          variant="outline"
          className="w-full"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Calculate Another
        </Button>
      </div>
    </Card>
  );
};