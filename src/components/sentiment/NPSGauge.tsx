
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Gauge } from "lucide-react";

interface NPSGaugeProps {
  score: number; // Score from -100 to 100
}

export function NPSGauge({ score }: NPSGaugeProps) {
  // Convert score to a 0-100 scale for the progress
  const normalizedScore = ((score + 100) / 2);
  
  // Determine color based on score
  const getColor = (score: number) => {
    if (score >= 50) return "bg-green-500";
    if (score >= 0) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <Gauge className="h-6 w-6 text-gray-500" />
      <div className="text-sm font-medium text-gray-600">Sentiment NPS Score</div>
      <div className="relative h-24 w-2">
        <Progress 
          value={normalizedScore} 
          className="h-24 w-2 rotate-180" 
          indicatorClassName={getColor(score)}
        />
      </div>
      <div className="text-lg font-semibold">{score}</div>
    </div>
  );
}
