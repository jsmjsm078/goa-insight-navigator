import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { DateRangeFilter } from "../filters/DateRangeFilter";

const data = [
  { 
    hashtag: '#BeachLife', 
    count: 842,
    sns: [
      { platform: 'Instagram', count: 420 },
      { platform: 'Facebook', count: 280 },
      { platform: 'Twitter', count: 142 }
    ]
  },
  { 
    hashtag: '#GoaVibes', 
    count: 765,
    sns: [
      { platform: 'Instagram', count: 385 },
      { platform: 'Facebook', count: 245 },
      { platform: 'Twitter', count: 135 }
    ]
  },
  { 
    hashtag: '#SunsetView', 
    count: 684,
    sns: [
      { platform: 'Instagram', count: 384 },
      { platform: 'Facebook', count: 200 },
      { platform: 'Twitter', count: 100 }
    ]
  },
  { 
    hashtag: '#CoastalGetaway', 
    count: 590,
    sns: [
      { platform: 'Instagram', count: 300 },
      { platform: 'Facebook', count: 190 },
      { platform: 'Twitter', count: 100 }
    ]
  },
  { 
    hashtag: '#PartyScene', 
    count: 521,
    sns: [
      { platform: 'Instagram', count: 281 },
      { platform: 'Facebook', count: 150 },
      { platform: 'Twitter', count: 90 }
    ]
  },
  { 
    hashtag: '#IndianTourism', 
    count: 467,
    sns: [
      { platform: 'Instagram', count: 220 },
      { platform: 'Facebook', count: 147 },
      { platform: 'Twitter', count: 100 }
    ]
  },
  { 
    hashtag: '#GoaFood', 
    count: 402,
    sns: [
      { platform: 'Instagram', count: 202 },
      { platform: 'Facebook', count: 120 },
      { platform: 'Twitter', count: 80 }
    ]
  }
];

const DistributionChart = ({ data }: { data: { platform: string; count: number }[] }) => (
  <div className="space-y-2">
    <h4 className="font-medium text-sm">Platform Distribution</h4>
    <div className="h-32">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 5, right: 5, bottom: 20, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="platform" 
            tick={{ fill: '#666', fontSize: 10 }}
            angle={-45}
            textAnchor="end"
          />
          <YAxis tick={{ fill: '#666', fontSize: 10 }} />
          <Tooltip 
            contentStyle={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid #ddd' }}
          />
          <Bar dataKey="count" fill="#9b87f5" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

const CustomTooltip = ({ active, payload }: any) => {
  if (!active || !payload || !payload[0]) return null;

  const hashtag = payload[0].payload;

  return (
    <div className="bg-white p-2 rounded-lg shadow-lg border">
      <p className="font-medium text-sm">{hashtag.hashtag}</p>
      <p className="text-sm text-muted-foreground">Total: {hashtag.count}</p>
      <p className="text-xs mt-1 text-blue-500">Click for platform details</p>
    </div>
  );
};

export function TrendingHashtags() {
  const [selectedHashtag, setSelectedHashtag] = useState<(typeof data)[0] | null>(null);
  const [openPopover, setOpenPopover] = useState(false);
  const [dateRange, setDateRange] = useState<DateRange>();
  
  const handleBarClick = (data: any) => {
    if (data && data.activePayload && data.activePayload[0]) {
      setSelectedHashtag(data.activePayload[0].payload);
      setOpenPopover(true);
    }
  };

  const filteredData = dateRange?.from && dateRange?.to
    ? data.filter(item => {
        return true;
      })
    : data;

  return (
    <Card className="w-full shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold text-gray-800">Trending Hashtags</CardTitle>
        <DateRangeFilter date={dateRange} onDateChange={setDateRange} />
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={filteredData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 60,
              }}
              onClick={handleBarClick}
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
                content={<CustomTooltip />}
                cursor={{ fill: 'rgba(155, 135, 245, 0.1)' }}
              />
              <Bar dataKey="count" fill="#9b87f5" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <Popover open={openPopover} onOpenChange={setOpenPopover}>
          <PopoverTrigger className="hidden">Open</PopoverTrigger>
          <PopoverContent className="w-80 p-0" side="top">
            {selectedHashtag && (
              <div className="p-4">
                <h3 className="font-medium mb-2">{selectedHashtag.hashtag} Distribution</h3>
                <DistributionChart data={selectedHashtag.sns} />
              </div>
            )}
          </PopoverContent>
        </Popover>

        <div className="mt-4 text-center text-sm text-gray-500">
          Click on any bar to see detailed platform distribution
        </div>
      </CardContent>
    </Card>
  );
}
