import { useState } from "react";
import { WelcomeScreen } from "@/components/calculator/WelcomeScreen";
import { IncomeTypeSelection } from "@/components/calculator/IncomeTypeSelection";
import { StateSelection } from "@/components/calculator/StateSelection";
import { EarnedIncomeForm } from "@/components/calculator/EarnedIncomeForm";
import { CalculatorResult } from "@/components/CalculatorResult";

type CalculatorStep = 'welcome' | 'income-type' | 'state' | 'earned-income' | 'results';

interface UserData {
  name: string;
  email: string;
  state: string;
  incomeType: 'earned' | 'capital-gains';
  earnedIncomeData: any;
}

const Index = () => {
  const [currentStep, setCurrentStep] = useState<CalculatorStep>('welcome');
  const [userData, setUserData] = useState<UserData>({
    name: '',
    email: '',
    state: '',
    incomeType: 'earned',
    earnedIncomeData: null,
  });

  const handleInitialSubmit = (data: { name: string; email: string }) => {
    setUserData({ ...userData, ...data });
    setCurrentStep('income-type');
  };

  const handleIncomeTypeSelect = (type: 'earned' | 'capital-gains') => {
    setUserData({ ...userData, incomeType: type });
    setCurrentStep('state');
  };

  const handleStateSelect = (state: string) => {
    setUserData({ ...userData, state });
    if (userData.incomeType === 'earned') {
      setCurrentStep('earned-income');
    } else {
      setCurrentStep('results');
    }
  };

  const handleEarnedIncomeSubmit = (data: any) => {
    setUserData({ ...userData, earnedIncomeData: data });
    setCurrentStep('results');
  };

  const handleReset = () => {
    setCurrentStep('welcome');
    setUserData({
      name: '',
      email: '',
      state: '',
      incomeType: 'earned',
      earnedIncomeData: null,
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20">
      <div className="w-full max-w-2xl mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2 gradient-text font-lato">
          Renewable Energy Benefits Calculator
        </h1>
        <p className="text-gray-600 text-lg">
          Evaluate the full benefits of purchasing commercial solar projects
        </p>
      </div>

      {currentStep === 'welcome' && (
        <WelcomeScreen onSubmit={handleInitialSubmit} />
      )}

      {currentStep === 'income-type' && (
        <IncomeTypeSelection 
          onSelect={handleIncomeTypeSelect}
          onBack={() => setCurrentStep('welcome')}
        />
      )}

      {currentStep === 'state' && (
        <StateSelection 
          onStateSelect={handleStateSelect}
          onBack={() => setCurrentStep('income-type')}
        />
      )}

      {currentStep === 'earned-income' && (
        <EarnedIncomeForm
          onSubmit={handleEarnedIncomeSubmit}
          onBack={() => setCurrentStep('state')}
        />
      )}

      {currentStep === 'results' && (
        <CalculatorResult
          amount={150000}
          onReset={handleReset}
        />
      )}
    </div>
  );
};

export default Index;