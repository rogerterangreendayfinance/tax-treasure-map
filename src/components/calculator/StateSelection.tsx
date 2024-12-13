import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { ProgressBar } from "../ProgressBar";

interface StateSelectionProps {
  onStateSelect: (state: string) => void;
  onBack?: () => void;
}

export const StateSelection = ({ onStateSelect, onBack }: StateSelectionProps) => {
  return (
    <Card className="w-full max-w-2xl p-6 animate-slide-up">
      <ProgressBar currentStep={1} totalSteps={3} className="mb-6" />
      
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold mb-2">What is your state of residency?</h1>
          <p className="text-gray-600">
            This will help calculate the appropriate Investment Tax Credit (ITC) and Depreciation.
          </p>
        </div>

        <Select onValueChange={onStateSelect}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Choose your state" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="california">California</SelectItem>
            <SelectItem value="texas">Texas</SelectItem>
            <SelectItem value="new-york">New York</SelectItem>
            {/* Add more states as needed */}
          </SelectContent>
        </Select>

        <div className="text-sm text-gray-500 italic">
          <p>The minimum solar acquisition is $200,000</p>
          <p className="mt-2">
            Greenday Finance and its affiliates do not provide tax, legal or accounting advice. 
            This material has been prepared for educational and informational purposes only.
          </p>
        </div>

        <div className="flex justify-between">
          {onBack && (
            <Button variant="outline" onClick={onBack}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};