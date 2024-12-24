interface EnvironmentalImpactProps {
  impact: {
    co2Avoided: number;
    treesPlanted: number;
    coalNotBurned: number;
    vehiclesOffRoad: number;
  };
}

export const EnvironmentalImpact = ({ impact }: EnvironmentalImpactProps) => {
  return (
    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
      <p className="text-lg font-semibold text-blue-800 mb-3">
        Environmental Impact
      </p>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <p className="text-sm text-blue-600">CO2 Avoided</p>
          <p className="text-lg font-bold text-blue-800">{impact.co2Avoided.toLocaleString()} kg</p>
        </div>
        <div>
          <p className="text-sm text-blue-600">Trees Planted</p>
          <p className="text-lg font-bold text-blue-800">{impact.treesPlanted.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-sm text-blue-600">Coal Not Burned</p>
          <p className="text-lg font-bold text-blue-800">{impact.coalNotBurned} tons</p>
        </div>
        <div>
          <p className="text-sm text-blue-600">Vehicles Off Road</p>
          <p className="text-lg font-bold text-blue-800">{impact.vehiclesOffRoad} annually</p>
        </div>
      </div>
    </div>
  );
};