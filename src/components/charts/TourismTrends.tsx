
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Placeholder data for tourism trends
const data = [
  { month: 'Jan', instagram: 2400, twitter: 1800, facebook: 2200 },
  { month: 'Feb', instagram: 2200, twitter: 1600, facebook: 2000 },
  { month: 'Mar', instagram: 2800, twitter: 2000, facebook: 2400 },
  { month: 'Apr', instagram: 3000, twitter: 2200, facebook: 2600 },
  { month: 'May', instagram: 2600, twitter: 1900, facebook: 2300 },
  { month: 'Jun', instagram: 2200, twitter: 1700, facebook: 2100 },
  { month: 'Jul', instagram: 2800, twitter: 2100, facebook: 2500 },
  { month: 'Aug', instagram: 3200, twitter: 2400, facebook: 2800 },
  { month: 'Sep', instagram: 3600, twitter: 2700, facebook: 3100 },
  { month: 'Oct', instagram: 3800, twitter: 2900, facebook: 3300 },
  { month: 'Nov', instagram: 3400, twitter: 2600, facebook: 3000 },
  { month: 'Dec', instagram: 3900, twitter: 3000, facebook: 3500 },
];

export function TourismTrends() {
  return (
    <Card className="w-full shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold text-gray-800">Tourism Trends</CardTitle>
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
                label={{ value: 'Mentions', angle: -90, position: 'insideLeft', fill: '#666' }}
              />
              <Tooltip contentStyle={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid #ddd' }} />
              <Legend iconType="circle" />
              <Line type="monotone" dataKey="instagram" stroke="#0EA5E9" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
              <Line type="monotone" dataKey="twitter" stroke="#F97316" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
              <Line type="monotone" dataKey="facebook" stroke="#65A30D" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
