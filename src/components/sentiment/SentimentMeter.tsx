
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SentimentMeterProps {
  title: string;
  score: number;
}

export function SentimentMeter({ title, score }: SentimentMeterProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">{title} Sentiment Score</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Progress value={score} className="h-4" />
          <p className="text-sm text-muted-foreground text-center">{score}% Positive</p>
        </div>
      </CardContent>
    </Card>
  );
}
