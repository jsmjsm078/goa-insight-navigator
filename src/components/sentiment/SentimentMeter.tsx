
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { NPSGauge } from "./NPSGauge";

interface SentimentScore {
  positive: number;
  neutral: number;
  negative: number;
}

interface SentimentMeterProps {
  title: string;
  scores: SentimentScore;
}

export function SentimentMeter({ title, scores }: SentimentMeterProps) {
  const data = [
    { name: 'Positive', value: scores.positive, color: '#4CAF50' },
    { name: 'Neutral', value: scores.neutral, color: '#FFA726' },
    { name: 'Negative', value: scores.negative, color: '#F44336' }
  ];

  // Calculate NPS score
  const npsScore = Math.round(scores.positive - scores.negative);

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">{title} Sentiment Score</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-between gap-6">
        <div className="h-[200px] w-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <NPSGauge score={npsScore} />
        
        <div className="flex flex-col gap-2">
          {data.map((item) => (
            <div key={item.name} className="flex items-center gap-2">
              <div 
                className="h-3 w-3 rounded-full" 
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm">{item.name}: {item.value}%</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
