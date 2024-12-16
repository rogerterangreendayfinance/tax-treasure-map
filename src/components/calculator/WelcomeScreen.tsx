import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sun } from "lucide-react";
import { ProgressBar } from "../ProgressBar";

interface WelcomeScreenProps {
  onSubmit: (data: { name: string; email: string }) => void;
}

export const WelcomeScreen = ({ onSubmit }: WelcomeScreenProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSubmit({
      name: formData.get('name') as string,
      email: formData.get('email') as string,
    });
  };

  return (
    <Card className="w-full max-w-2xl p-8 animate-slide-up">
      <ProgressBar currentStep={1} totalSteps={4} className="mb-8" />
      
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <div className="flex justify-center mb-6">
            <Sun className="h-16 w-16 text-green-500 animate-pulse" />
          </div>
          <h1 className="text-3xl font-bold gradient-text">
            Calculate your tax savings and see how solar energy can grow your wealth
          </h1>
          <p className="text-gray-600 text-lg">
            Discover how commercial solar investments can transform your tax liability into lasting wealth
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-base">Full Name</Label>
              <Input
                id="name"
                name="name"
                required
                className="mt-1.5 h-12 text-lg"
                placeholder="John Doe"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-base">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1.5 h-12 text-lg"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="text-sm text-gray-500 italic space-y-2">
            <p>The minimum solar acquisition is $200,000</p>
            <p>
              Greenday Finance and its affiliates do not provide tax, legal or accounting advice. 
              This material has been prepared for educational and informational purposes only.
            </p>
          </div>

          <Button 
            type="submit" 
            className="w-full h-12 text-lg gradient-bg hover:opacity-90 shine-effect"
          >
            Start Calculating →
          </Button>
        </form>
      </div>
    </Card>
  );
};