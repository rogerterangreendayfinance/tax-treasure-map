import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface CalculatorResultProps {
  amount: number;
  onReset: () => void;
}

export const CalculatorResult = ({ amount, onReset }: CalculatorResultProps) => {
  const taxRate = 0.25; // Example tax rate
  const afterTax = amount * (1 - taxRate);

  return (
    <Card className="w-full max-w-md p-6 animate-slide-up">
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