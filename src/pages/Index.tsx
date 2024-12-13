import { useState } from "react";
import { StateSelection } from "@/components/calculator/StateSelection";
import { IncomeTypeSelection } from "@/components/calculator/IncomeTypeSelection";
import { EarnedIncomeForm } from "@/components/calculator/EarnedIncomeForm";
import { CalculatorResult } from "@/components/CalculatorResult";

type CalculatorStep = 'state' | 'income-type' | 'earned-income' | 'results';

const Index = () => {
  const [currentStep, setCurrentStep] = useState<CalculatorStep>('state');
  const [calculatorData, setCalculatorData] = useState({
    state: '',
    incomeType: '' as 'earned' | 'capital-gains',
    earnedIncomeData: null as any,
  });

  const handleStateSelect = (state: string) => {
    setCalculatorData({ ...calculatorData, state });
    setCurrentStep('income-type');
  };

  const handleIncomeTypeSelect = (type: 'earned' | 'capital-gains') => {
    setCalculatorData({ ...calculatorData, incomeType: type });
    if (type === 'earned') {
      setCurrentStep('earned-income');
    } else {
      setCurrentStep('results');
    }
  };

  const handleEarnedIncomeSubmit = (data: any) => {
    setCalculatorData({ ...calculatorData, earnedIncomeData: data });
    setCurrentStep('results');
  };

  const handleReset = () => {
    setCurrentStep('state');
    setCalculatorData({
      state: '',
      incomeType: '' as 'earned' | 'capital-gains',
      earnedIncomeData: null,
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-2xl mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2">
          Renewable Energy Benefits Calculator
        </h1>
        <p className="text-gray-600">
          Evaluate the full benefits of purchasing commercial solar projects.
        </p>
      </div>

      {currentStep === 'state' && (
        <StateSelection onStateSelect={handleStateSelect} />
      )}

      {currentStep === 'income-type' && (
        <IncomeTypeSelection 
          onSelect={handleIncomeTypeSelect}
          onBack={() => setCurrentStep('state')}
        />
      )}

      {currentStep === 'earned-income' && (
        <EarnedIncomeForm
          onSubmit={handleEarnedIncomeSubmit}
          onBack={() => setCurrentStep('income-type')}
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