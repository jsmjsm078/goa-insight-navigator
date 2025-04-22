
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">{title} Sentiment Score</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-green-600">Positive</span>
              <span>{scores.positive}%</span>
            </div>
            <Progress value={scores.positive} className="h-2 bg-slate-100" indicatorClassName="bg-green-500" />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-yellow-600">Neutral</span>
              <span>{scores.neutral}%</span>
            </div>
            <Progress value={scores.neutral} className="h-2 bg-slate-100" indicatorClassName="bg-yellow-500" />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-red-600">Negative</span>
              <span>{scores.negative}%</span>
            </div>
            <Progress value={scores.negative} className="h-2 bg-slate-100" indicatorClassName="bg-red-500" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
