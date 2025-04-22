
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";

interface NPSMeterProps {
  score: number; // Score from -100 to 100
}

export function NPSMeter({ score }: NPSMeterProps) {
  // Convert NPS score (-100 to 100) to progress value (0 to 100)
  const progressValue = (score + 100) / 2;
  
  // Determine color based on score
  const getColor = (score: number) => {
    if (score >= 50) return "bg-green-500";
    if (score >= 0) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="text-sm font-medium text-gray-600">NPS Score</div>
      <div className="relative h-24 w-2">
        <Progress 
          value={progressValue} 
          className="h-24 w-2 rotate-180" 
          indicatorClassName={getColor(score)}
        />
      </div>
      <div className="text-lg font-semibold">{score}</div>
    </div>
  );
}
