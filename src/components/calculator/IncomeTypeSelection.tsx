import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Briefcase, LineChart } from "lucide-react";
import { ProgressBar } from "../ProgressBar";

interface IncomeTypeSelectionProps {
  onSelect: (type: 'earned' | 'capital-gains') => void;
  onBack: () => void;
}

export const IncomeTypeSelection = ({ onSelect, onBack }: IncomeTypeSelectionProps) => {
  return (
    <Card className="w-full max-w-2xl p-6 animate-slide-up">
      <ProgressBar currentStep={2} totalSteps={4} className="mb-6" />
      
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold mb-2">Which type of income will you have this year?</h1>
          <p className="text-gray-600">
            Different types of incomes are subject to different rules to qualify for Investment Tax Credits and depreciation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button 
            variant="outline" 
            className="h-auto p-6 flex flex-col items-center space-y-4 hover:border-green-500 hover:bg-green-50 transition-colors"
            onClick={() => onSelect('earned')}
          >
            <Briefcase className="h-12 w-12 text-green-600" />
            <div className="text-center">
              <span className="text-lg font-semibold block">Earned Income</span>
              <span className="text-sm text-gray-600">
                Active earned income (including W-2, 1099, K1, and RSUs)
              </span>
            </div>
          </Button>

          <Button 
            variant="outline" 
            className="h-auto p-6 flex flex-col items-center space-y-4 hover:border-green-500 hover:bg-green-50 transition-colors"
            onClick={() => onSelect('capital-gains')}
          >
            <LineChart className="h-12 w-12 text-green-600" />
            <div className="text-center">
              <span className="text-lg font-semibold block">Capital Gains</span>
              <span className="text-sm text-gray-600">
                Capital Gains (i.e. public company stock, crypto, or real estate, etc.)
              </span>
            </div>
          </Button>
        </div>

        <div className="text-sm text-gray-500 italic">
          <p>This calculator assumes an individual is filing taxes as Married, filing jointly</p>
        </div>

        <Button variant="outline" onClick={onBack} className="flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
      </div>
    </Card>
  );
};