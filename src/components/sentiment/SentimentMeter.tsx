
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { NPSMeter } from "./NPSMeter";

interface SentimentScore {
  positive: number;
  negative: number;
  neutral: number;
}

interface SentimentMeterProps {
  title: string;
  scores: SentimentScore;
}

export function SentimentMeter({ title, scores }: SentimentMeterProps) {
  // Calculate NPS based on sentiment scores
  const npsScore = Math.round(scores.positive - scores.negative);

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">{title} Sentiment Score</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center gap-6">
        <NPSMeter score={npsScore} />
        
        <div className="flex-1 space-y-4">
          <div className="h-8 w-full flex rounded-full overflow-hidden">
            <div 
              className="bg-green-500 transition-all duration-500"
              style={{ width: `${scores.positive}%` }}
            />
            <div 
              className="bg-yellow-500 transition-all duration-500"
              style={{ width: `${scores.neutral}%` }}
            />
            <div 
              className="bg-red-500 transition-all duration-500"
              style={{ width: `${scores.negative}%` }}
            />
          </div>
          
          <div className="flex justify-between text-sm">
            <div className="flex gap-4">
              <span className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-green-600">{scores.positive}% Positive</span>
              </span>
              <span className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="text-yellow-600">{scores.neutral}% Neutral</span>
              </span>
              <span className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <span className="text-red-600">{scores.negative}% Negative</span>
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
