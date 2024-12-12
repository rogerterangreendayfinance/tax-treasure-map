import { cn } from "@/lib/utils";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  className?: string;
}

export const ProgressBar = ({ currentStep, totalSteps, className }: ProgressBarProps) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className={cn("w-full space-y-2", className)}>
      <div className="flex justify-between text-sm text-gray-500">
        <span>Step {currentStep} of {totalSteps}</span>
        <span>{Math.round(progress)}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full">
        <div
          className="h-full bg-primary rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};