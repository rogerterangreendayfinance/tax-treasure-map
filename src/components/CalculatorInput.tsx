import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface CalculatorInputProps {
  onCalculate: (amount: number) => void;
}

export const CalculatorInput = ({ onCalculate }: CalculatorInputProps) => {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCalculate(Number(amount));
  };

  return (
    <Card className="w-full max-w-md p-6 animate-slide-up">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="amount">Enter Amount</Label>
          <Input
            id="amount"
            type="number"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="text-2xl"
            required
          />
        </div>
        <Button type="submit" className="w-full gradient-bg hover:opacity-90">
          Calculate
        </Button>
      </form>
    </Card>
  );
};