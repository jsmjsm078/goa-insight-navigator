import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { SentimentDetailsModal } from "./SentimentDetailsModal";

const sampleReviews = [
  {
    "review": "Baga Beach is a total vibe. The shacks, the music, and the people create an amazing atmosphere, especially during the evenings. A bit too crowded for my taste, though.",
    "positive_points": ["Great atmosphere", "Lively music and crowd", "Good shacks"],
    "negative_points": ["Very crowded"]
  },
  {
    "review": "Visited Old Goa and fell in love with the churches, especially Basilica of Bom Jesus. Very peaceful and historical. The only downside was the lack of proper guides.",
    "positive_points": ["Peaceful", "Rich history", "Beautiful architecture"],
    "negative_points": ["Lack of proper guides"]
  },
  {
    "review": "Calangute was overrated in my opinion. It’s super commercialized, and everything’s overpriced. But yeah, the beach was clean and good for long walks.",
    "positive_points": ["Clean beach", "Nice for long walks"],
    "negative_points": ["Overpriced", "Too commercialized"]
  },
  {
    "review": "Absolutely loved Chapora Fort. The view from the top is just stunning! But be prepared for a little hike – not suitable for people with mobility issues.",
    "positive_points": ["Amazing view", "Scenic hike"],
    "negative_points": ["Not accessible for everyone"]
  },
  {
    "review": "Anjuna Market was a fun experience. So many quirky things to buy and a chill crowd. Bargaining is a must though, or you’ll get looted.",
    "positive_points": ["Unique items", "Laid-back vibe"],
    "negative_points": ["Need to bargain hard"]
  },
  {
    "review": "Dudhsagar Falls blew me away. It’s a breathtaking sight, especially after the monsoons. Reaching there is a bit of an adventure – the road is really rough.",
    "positive_points": ["Stunning waterfall", "Best after monsoon"],
    "negative_points": ["Rough access road"]
  },
  {
    "review": "Palolem Beach was perfect for a peaceful getaway. Clean, less crowded, and serene sunsets. But not much nightlife if that’s what you’re into.",
    "positive_points": ["Clean and quiet", "Great for relaxation", "Beautiful sunsets"],
    "negative_points": ["Lacks nightlife"]
  },
  {
    "review": "Tito’s Lane used to be the party hub, but now it feels like it’s lost its charm. Still decent, but way too many touts bothering tourists.",
    "positive_points": ["Still some party vibe"],
    "negative_points": ["Too many touts", "Lost its old charm"]
  },
  {
    "review": "The spice plantations were surprisingly interesting! Great to see how spices are grown and processed. The tour was short, though – expected a bit more.",
    "positive_points": ["Educational", "Unique experience"],
    "negative_points": ["Short tour"]
  },
  {
    "review": "Candolim was a hidden gem! Much quieter than Calangute but still close to the action. Only downside – not many budget stay options.",
    "positive_points": ["Peaceful", "Good location"],
    "negative_points": ["Fewer budget hotels"]
  }
];

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
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBarClick = (data: any) => {
    setSelectedPlatform(data?.payload?.name || null);
    setIsModalOpen(true);
  };

  return (
    <>
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
            <BarChart 
              data={data}
              onClick={handleBarClick}
              style={{ cursor: 'pointer' }}
            >
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

      <SentimentDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        platform={selectedPlatform || ""}
        points={sampleReviews}
      />
    </>
  );
}
