import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ProgressBar } from "../ProgressBar";

interface InitialFormProps {
  onSubmit: (data: { name: string; email: string }) => void;
}

export const InitialForm = ({ onSubmit }: InitialFormProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSubmit({
      name: formData.get('name') as string,
      email: formData.get('email') as string,
    });
  };

  return (
    <Card className="w-full max-w-2xl p-6 animate-slide-up">
      <ProgressBar currentStep={1} totalSteps={4} className="mb-6" />
      
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold mb-2">
            Are you interested in purchasing commercial solar, but you don't know how much you need?
          </h1>
          <p className="text-gray-600">
            This simple calculator works mainly for Earned Income (business income and/or W2) and helps you calculate how much solar to acquire. Contact us if your main source of income is different.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              name="name"
              required
              placeholder="John Doe"
            />
          </div>

          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="john@example.com"
            />
          </div>

          <div className="text-sm text-gray-500 italic">
            <p>The minimum solar acquisition is $200,000</p>
            <p className="mt-2">
              Greenday Finance and its affiliates do not provide tax, legal or accounting advice. 
              This material has been prepared for educational and informational purposes only.
            </p>
            <p className="mt-2">
              This calculator assumes an individual is filing taxes as Married, filing jointly
            </p>
          </div>

          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
            Next →
          </Button>
        </form>
      </div>
    </Card>
  );
};