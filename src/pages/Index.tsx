import { useState } from "react";
import { CalculatorInput } from "@/components/CalculatorInput";
import { CalculatorResult } from "@/components/CalculatorResult";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [calculatedAmount, setCalculatedAmount] = useState<number | null>(null);
  const { toast } = useToast();

  const handleCalculate = (amount: number) => {
    setCalculatedAmount(amount);
    toast({
      title: "Calculation Complete",
      description: "Your results are ready to view!",
    });
  };

  const handleReset = () => {
    setCalculatedAmount(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-md mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent gradient-bg">
          Tax Calculator
        </h1>
        <p className="text-gray-600">
          Calculate your after-tax earnings instantly
        </p>
      </div>

      {calculatedAmount === null ? (
        <CalculatorInput onCalculate={handleCalculate} />
      ) : (
        <CalculatorResult amount={calculatedAmount} onReset={handleReset} />
      )}
    </div>
  );
};

export default Index;