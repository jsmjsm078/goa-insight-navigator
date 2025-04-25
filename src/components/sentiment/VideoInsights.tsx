
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { VideoInsightItem } from "./VideoInsightItem";

// Dummy data
const VIDEOS = [
  {
    title: "A Day in Goa's Most Beautiful Beach - Baga Beach Vlog",
    positivePoints: ["Clean beach", "Great restaurants", "Vibrant nightlife"],
    negativePoints: ["Crowded", "Expensive"],
    location: "Baga Beach",
    thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    transcript: "Hey everyone! Today we're exploring the beautiful Baga Beach in Goa. The weather is perfect and the beach is absolutely stunning. Let me take you through my experience...\n\nThe Good:\nFirst off, the beach is remarkably clean compared to what I expected. The local authorities are doing a great job maintaining it. The restaurants along the beach serve amazing seafood - I particularly loved the prawns curry at Beach Shack.\n\nThe Not So Good:\nHowever, it does get pretty crowded during peak hours, especially between 4-6 PM. The prices at some restaurants are also on the higher side, so budget travelers might want to look for alternatives slightly away from the beach.",
  },
  {
    title: "Fort Aguada: Goa's Historic Marvel",
    positivePoints: ["Well preserved", "Amazing views", "Rich history"],
    negativePoints: ["Limited facilities", "Hot during midday"],
    location: "Fort Aguada",
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    transcript: "Welcome to Fort Aguada, one of Goa's most iconic historical sites...",
  },
  // ... add more dummy videos to make 10 items
].concat(Array(8).fill(0).map((_, i) => ({
  title: `Exploring Goa's Hidden Gems - Part ${i + 1}`,
  positivePoints: ["Beautiful scenery", "Local culture", "Friendly people"],
  negativePoints: ["Tourist traps", "Weather"],
  location: ["Calangute", "Panjim", "Anjuna", "Vagator"][i % 4],
  thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
  transcript: "Today we're discovering another hidden gem in Goa...",
})));

export function VideoInsights() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>YouTube Video Insights</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {VIDEOS.map((video, index) => (
          <VideoInsightItem key={index} {...video} />
        ))}
      </CardContent>
    </Card>
  );
}
