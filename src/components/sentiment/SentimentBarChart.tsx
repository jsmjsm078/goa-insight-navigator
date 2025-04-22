
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface SentimentBarChartProps {
  title: string;
  data: Array<{
    name: string;
    positive: number;
    negative: number;
  }>;
  filterOptions: Array<{ value: string; label: string }>;
  onFilterChange: (value: string) => void;
}

export function SentimentBarChart({ 
  title, 
  data, 
  filterOptions,
  onFilterChange 
}: SentimentBarChartProps) {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
        <Select onValueChange={onFilterChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select filter" />
          </SelectTrigger>
          <SelectContent>
            {filterOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="positive" fill="#4CAF50" name="Positive" />
            <Bar dataKey="negative" fill="#f44336" name="Negative" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
