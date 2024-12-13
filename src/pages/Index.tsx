import { useState } from "react";
import { InitialForm } from "@/components/calculator/InitialForm";
import { StateSelection } from "@/components/calculator/StateSelection";
import { IncomeTypeSelection } from "@/components/calculator/IncomeTypeSelection";
import { EarnedIncomeForm } from "@/components/calculator/EarnedIncomeForm";
import { CalculatorResult } from "@/components/CalculatorResult";

type CalculatorStep = 'initial' | 'income-type' | 'state' | 'earned-income' | 'results';

interface UserData {
  name: string;
  email: string;
  state: string;
  incomeType: 'earned' | 'capital-gains';
  earnedIncomeData: any;
}

const Index = () => {
  const [currentStep, setCurrentStep] = useState<CalculatorStep>('initial');
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
    setCurrentStep('initial');
    setUserData({
      name: '',
      email: '',
      state: '',
      incomeType: 'earned',
      earnedIncomeData: null,
    });
  };

  const handleBack = () => {
    switch (currentStep) {
      case 'income-type':
        setCurrentStep('initial');
        break;
      case 'state':
        setCurrentStep('income-type');
        break;
      case 'earned-income':
        setCurrentStep('state');
        break;
      case 'results':
        setCurrentStep(userData.incomeType === 'earned' ? 'earned-income' : 'state');
        break;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-2xl mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2 text-green-700">
          Renewable Energy Benefits Calculator
        </h1>
        <p className="text-gray-600">
          Evaluate the full benefits of purchasing commercial solar projects.
        </p>
      </div>

      {currentStep === 'initial' && (
        <InitialForm onSubmit={handleInitialSubmit} />
      )}

      {currentStep === 'income-type' && (
        <IncomeTypeSelection 
          onSelect={handleIncomeTypeSelect}
          onBack={() => setCurrentStep('initial')}
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
          amount={150000} // This would come from your actual calculations
          onReset={handleReset}
        />
      )}
    </div>
  );
};

export default Index;