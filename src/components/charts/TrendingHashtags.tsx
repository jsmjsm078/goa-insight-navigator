
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Placeholder data for trending hashtags
const data = [
  { hashtag: '#BeachLife', count: 842 },
  { hashtag: '#GoaVibes', count: 765 },
  { hashtag: '#SunsetView', count: 684 },
  { hashtag: '#CoastalGetaway', count: 590 },
  { hashtag: '#PartyScene', count: 521 },
  { hashtag: '#IndianTourism', count: 467 },
  { hashtag: '#GoaFood', count: 402 },
];

export function TrendingHashtags() {
  return (
    <Card className="w-full shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold text-gray-800">Trending Hashtags</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 60,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="hashtag" 
                tick={{ fill: '#666', fontSize: 12 }}
                angle={-45}
                textAnchor="end"
                height={60}
              />
              <YAxis 
                tick={{ fill: '#666', fontSize: 12 }}
                label={{ value: 'Frequency', angle: -90, position: 'insideLeft', fill: '#666' }}
              />
              <Tooltip 
                cursor={{ fill: 'rgba(14, 165, 233, 0.1)' }}
                contentStyle={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid #ddd' }}
                labelStyle={{ fontWeight: 'bold', color: '#333' }}
              />
              <Bar dataKey="count" fill="#0EA5E9" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
