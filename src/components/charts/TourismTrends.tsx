import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Function to add natural randomness to data
const addRandomness = (value: number, range: number = 200) => {
  return value + (Math.random() - 0.5) * range;
};

// Updated data with natural randomness
const data = [
  { month: 'Jan', y2023: addRandomness(2400), y2024: addRandomness(2800), y2025: addRandomness(3200) },
  { month: 'Feb', y2023: addRandomness(2200), y2024: addRandomness(2600), y2025: addRandomness(3000) },
  { month: 'Mar', y2023: addRandomness(2800), y2024: addRandomness(3200), y2025: addRandomness(3600) },
  { month: 'Apr', y2023: addRandomness(3000), y2024: addRandomness(3400), y2025: addRandomness(3800) },
  { month: 'May', y2023: addRandomness(2600), y2024: addRandomness(3000), y2025: addRandomness(3400) },
  { month: 'Jun', y2023: addRandomness(2200), y2024: addRandomness(2600), y2025: addRandomness(3000) },
  { month: 'Jul', y2023: addRandomness(2800), y2024: addRandomness(3200), y2025: addRandomness(3600) },
  { month: 'Aug', y2023: addRandomness(3200), y2024: addRandomness(3600), y2025: addRandomness(4000) },
  { month: 'Sep', y2023: addRandomness(3600), y2024: addRandomness(4000), y2025: addRandomness(4400) },
  { month: 'Oct', y2023: addRandomness(3800), y2024: addRandomness(4200), y2025: addRandomness(4600) },
  { month: 'Nov', y2023: addRandomness(3400), y2024: addRandomness(3800), y2025: addRandomness(4200) },
  { month: 'Dec', y2023: addRandomness(3900), y2024: addRandomness(4300), y2025: addRandomness(4700) },
];

export function TourismTrends() {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-diagonal p-1">
      <div className="backdrop-blur-sm bg-white/50 rounded-lg p-6 border border-cool-accent/20">
        <div className="pb-2">
          <h2 className="text-xl font-bold text-cool-primary">Tourism Trends (Yearly Comparison)</h2>
        </div>
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
              <Line 
                type="monotone" 
                dataKey="y2023" 
                stroke="#5AB2FF" 
                strokeWidth={2} 
                name="2023" 
                dot={{ r: 4 }} 
                activeDot={{ r: 6 }}
                connectNulls
                className="hover:opacity-80 transition-opacity"
              />
              <Line 
                type="monotone" 
                dataKey="y2024" 
                stroke="#A0DEFF" 
                strokeWidth={2} 
                name="2024" 
                dot={{ r: 4 }} 
                activeDot={{ r: 6 }}
                connectNulls
                className="hover:opacity-80 transition-opacity"
              />
              <Line 
                type="monotone" 
                dataKey="y2025" 
                stroke="#CAF4FF" 
                strokeWidth={2} 
                name="2025" 
                dot={{ r: 4 }} 
                activeDot={{ r: 6 }}
                connectNulls
                className="hover:opacity-80 transition-opacity"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
