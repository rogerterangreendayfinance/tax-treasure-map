import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { ProgressBar } from "../ProgressBar";

interface EarnedIncomeFormProps {
  onSubmit: (data: {
    currentIncome: number;
    tax2023: number;
    tax2022: number;
    tax2021: number;
  }) => void;
  onBack: () => void;
}

export const EarnedIncomeForm = ({ onSubmit, onBack }: EarnedIncomeFormProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSubmit({
      currentIncome: Number(formData.get('currentIncome')),
      tax2023: Number(formData.get('tax2023')),
      tax2022: Number(formData.get('tax2022')),
      tax2021: Number(formData.get('tax2021')),
    });
  };

  return (
    <Card className="w-full max-w-2xl p-6 animate-slide-up">
      <ProgressBar currentStep={3} totalSteps={3} className="mb-6" />
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold mb-2">Income and Federal Tax Liability Breakdown</h1>
          <p className="text-gray-600">
            Please provide the following information for this year, as well as 3 prior years.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Estimated Total Income for the Current Year *
            </label>
            <Input
              name="currentIncome"
              type="number"
              placeholder="$100,000"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Federal Tax Liability in 2023 *
            </label>
            <Input
              name="tax2023"
              type="number"
              placeholder="$10,000"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Federal Tax Liability in 2022 *
            </label>
            <Input
              name="tax2022"
              type="number"
              placeholder="$10,000"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Federal Tax Liability in 2021 *
            </label>
            <Input
              name="tax2021"
              type="number"
              placeholder="$10,000"
              required
            />
          </div>
        </div>

        <div className="text-sm text-gray-500 italic">
          <p>The minimum solar acquisition is $200,000</p>
        </div>

        <div className="flex justify-between">
          <Button variant="outline" onClick={onBack}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Card>
  );
};