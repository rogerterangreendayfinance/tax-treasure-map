import { Button } from "@/components/ui/button";
import { ArrowLeft, Download } from "lucide-react";

interface ResultsActionsProps {
  onReset: () => void;
}

export const ResultsActions = ({ onReset }: ResultsActionsProps) => {
  return (
    <div className="space-y-4">
      <Button 
        className="w-full gradient-bg hover:opacity-90"
        onClick={() => console.log("Download report")}
      >
        <Download className="mr-2 h-4 w-4" />
        Download Report
      </Button>
      
      <Button 
        className="w-full bg-blue-500 hover:bg-blue-600 text-white"
      >
        Request Contact
      </Button>

      <Button 
        onClick={onReset}
        variant="outline"
        className="w-full"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Calculate Another
      </Button>
    </div>
  );
};