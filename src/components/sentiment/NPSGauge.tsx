
import { Progress } from "@/components/ui/progress";
import { Gauge } from "lucide-react";

interface NPSGaugeProps {
  score: number;
}

export function NPSGauge({ score }: NPSGaugeProps) {
  // Convert score to a 0-100 scale for the progress
  const normalizedScore = ((score + 10) / 20) * 100;
  
  // Determine color based on score
  const getColor = (score: number) => {
    if (score >= 5) return "bg-green-500";
    if (score >= 0) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="flex flex-col gap-2 min-w-[200px]">
      <div className="flex items-center gap-2">
        <Gauge className="h-6 w-6 text-gray-500" />
        <div className="text-sm font-medium text-gray-600">Sentiment NPS Score</div>
      </div>
      <div className="relative w-full">
        <Progress 
          value={normalizedScore} 
          className="h-2 w-full" 
          indicatorClassName={getColor(score)}
        />
      </div>
      <div className="flex justify-between text-sm text-gray-500">
        <span>-10</span>
        <span className="font-semibold text-base">{score}</span>
        <span>+10</span>
      </div>
    </div>
  );
}
