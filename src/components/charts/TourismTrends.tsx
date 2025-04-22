
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Updated data structure to show yearly trends
const data = [
  { month: 'Jan', y2023: 2400, y2024: 2800, y2025: 3200 },
  { month: 'Feb', y2023: 2200, y2024: 2600, y2025: 3000 },
  { month: 'Mar', y2023: 2800, y2024: 3200, y2025: 3600 },
  { month: 'Apr', y2023: 3000, y2024: 3400, y2025: 3800 },
  { month: 'May', y2023: 2600, y2024: 3000, y2025: 3400 },
  { month: 'Jun', y2023: 2200, y2024: 2600, y2025: 3000 },
  { month: 'Jul', y2023: 2800, y2024: 3200, y2025: 3600 },
  { month: 'Aug', y2023: 3200, y2024: 3600, y2025: 4000 },
  { month: 'Sep', y2023: 3600, y2024: 4000, y2025: 4400 },
  { month: 'Oct', y2023: 3800, y2024: 4200, y2025: 4600 },
  { month: 'Nov', y2023: 3400, y2024: 3800, y2025: 4200 },
  { month: 'Dec', y2023: 3900, y2024: 4300, y2025: 4700 },
];

export function TourismTrends() {
  return (
    <Card className="w-full shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold text-gray-800">Tourism Trends (Yearly Comparison)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fill: '#666', fontSize: 12 }} />
              <YAxis 
                tick={{ fill: '#666', fontSize: 12 }}
                label={{ value: 'Cumulative Posts', angle: -90, position: 'insideLeft', fill: '#666' }}
              />
              <Tooltip contentStyle={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid #ddd' }} />
              <Legend iconType="circle" />
              <Line type="monotone" dataKey="y2023" stroke="#0EA5E9" strokeWidth={2} name="2023" dot={{ r: 4 }} activeDot={{ r: 6 }} />
              <Line type="monotone" dataKey="y2024" stroke="#F97316" strokeWidth={2} name="2024" dot={{ r: 4 }} activeDot={{ r: 6 }} />
              <Line type="monotone" dataKey="y2025" stroke="#65A30D" strokeWidth={2} name="2025" dot={{ r: 4 }} activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
