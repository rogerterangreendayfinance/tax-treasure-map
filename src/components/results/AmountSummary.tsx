interface AmountSummaryProps {
  amount: number;
  afterTax: number;
  withTrust: number;
}

export const AmountSummary = ({ amount, afterTax, withTrust }: AmountSummaryProps) => {
  return (
    <div className="space-y-4">
      <div className="p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-500">Original Amount</p>
        <p className="text-3xl font-bold">${amount.toLocaleString()}</p>
      </div>
      
      <div className="p-4 bg-primary/10 rounded-lg">
        <p className="text-sm text-gray-500">After Tax</p>
        <p className="text-3xl font-bold text-primary">
          ${afterTax.toLocaleString()}
        </p>
      </div>

      <div className="p-4 gradient-bg text-white rounded-lg">
        <p className="text-sm opacity-90">With Trust</p>
        <p className="text-3xl font-bold">
          ${withTrust.toLocaleString()}
        </p>
      </div>

      <div className="p-4 bg-green-50 rounded-lg border border-green-100">
        <p className="text-lg font-semibold text-green-800">
          Investment Benefits
        </p>
        <p className="text-sm text-green-600 mt-2">
          By investing ${amount.toLocaleString()}, you could unlock benefits of ${(withTrust * 2.37).toLocaleString()} over 25+ years (237% ROI)
        </p>
      </div>
    </div>
  );
};