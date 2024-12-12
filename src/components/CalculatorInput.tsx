import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { HelpCircle } from "lucide-react";
import { ProgressBar } from "./ProgressBar";

interface CalculatorInputProps {
  onCalculate: (amount: number) => void;
}

export const CalculatorInput = ({ onCalculate }: CalculatorInputProps) => {
  const [formData, setFormData] = useState({
    age: "",
    taxResidency: "",
    costBasis: "",
    saleValue: "",
    taxTreatment: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCalculate(Number(formData.saleValue));
  };

  const InfoTooltip = ({ content }: { content: string }) => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <HelpCircle className="h-4 w-4 text-gray-400 hover:text-gray-600 cursor-help inline-block ml-2" />
      </HoverCardTrigger>
      <HoverCardContent className="w-80 p-3">
        <p className="text-sm text-gray-600">{content}</p>
      </HoverCardContent>
    </HoverCard>
  );

  return (
    <Card className="w-full max-w-md p-6 animate-slide-up">
      <ProgressBar currentStep={1} totalSteps={2} className="mb-6" />
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="age" className="flex items-center">
            How old are you?
            <InfoTooltip content="We use your age to calculate how much you can withdraw annually from your trust based on IRS-approved formulas. This ensures accurate projections." />
          </Label>
          <Input
            id="age"
            type="number"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="taxResidency" className="flex items-center">
            Tax residency
            <InfoTooltip content="Every state has unique tax laws and trust rules. Your selection ensures precise calculations for your situation." />
          </Label>
          <Select onValueChange={(value) => setFormData({ ...formData, taxResidency: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select state" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="california">California</SelectItem>
              <SelectItem value="texas">Texas</SelectItem>
              <SelectItem value="new-york">New York</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="costBasis" className="flex items-center">
            Total cost basis
            <InfoTooltip content="Your cost basis is the amount you've invested in the asset you're planning to sell. If you're unsure, enter an estimate to get a general idea of your results." />
          </Label>
          <Input
            id="costBasis"
            type="number"
            value={formData.costBasis}
            onChange={(e) => setFormData({ ...formData, costBasis: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="saleValue" className="flex items-center">
            Expected total sale value
            <InfoTooltip content="This is the estimated sale price of your asset. An accurate value will yield better results." />
          </Label>
          <Input
            id="saleValue"
            type="number"
            value={formData.saleValue}
            onChange={(e) => setFormData({ ...formData, saleValue: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="taxTreatment" className="flex items-center">
            Tax treatment
            <InfoTooltip content="The type of tax treatment applied to your asset depends on how long you've held it. This affects how much you'll owe in taxes." />
          </Label>
          <Select onValueChange={(value) => setFormData({ ...formData, taxTreatment: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select tax treatment" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="long-term">Long-term capital gains</SelectItem>
              <SelectItem value="short-term">Short-term capital gains</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button type="submit" className="w-full gradient-bg hover:opacity-90">
          Next
        </Button>
      </form>
    </Card>
  );
};