import { Card } from "@/components/ui/card";
import { ProgressBar } from "./ProgressBar";
import { ResultsCharts } from "./results/ResultsCharts";
import { EnvironmentalImpact } from "./results/EnvironmentalImpact";
import { ResultsActions } from "./results/ResultsActions";
import { AmountSummary } from "./results/AmountSummary";

interface CalculatorResultProps {
  amount: number;
  onReset: () => void;
}

export const CalculatorResult = ({ amount, onReset }: CalculatorResultProps) => {
  const taxRate = 0.25;
  const afterTax = amount * (1 - taxRate);
  const withTrust = afterTax * 1.2;

  const environmentalImpact = {
    co2Avoided: 48413,
    treesPlanted: 2222,
    coalNotBurned: 44,
    vehiclesOffRoad: 10
  };

  const timeSeriesData = Array.from({ length: 10 }, (_, i) => ({
    year: `Year ${i + 1}`,
    withTrust: withTrust * (1 + 0.08) ** i,
    withoutTrust: afterTax * (1 + 0.05) ** i,
  }));

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
          <div className="space-y-4">
            <AmountSummary 
              amount={amount}
              afterTax={afterTax}
              withTrust={withTrust}
            />
            <EnvironmentalImpact impact={environmentalImpact} />
          </div>

          <ResultsCharts 
            timeSeriesData={timeSeriesData}
            radialData={radialData}
          />
        </div>

        <ResultsActions onReset={onReset} />
      </div>
    </Card>
  );
};