import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const locations = [
  { name: "Manali", mentions: 2456 },
  { name: "Shimla", mentions: 1890 },
  { name: "Dharamshala", mentions: 1654 },
  { name: "Kullu", mentions: 1750 },
  { name: "Kasol", mentions: 1320 },
  { name: "Rohtang Pass", mentions: 1105 },
  { name: "Spiti Valley", mentions: 980 },
];

export function LocationsList() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Popular Locations</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {locations.map((location) => (
            <div
              key={location.name}
              className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-goa-coral" />
                <span className="font-medium">{location.name}</span>
              </div>
              <span className="text-sm text-gray-500">
                {location.mentions.toLocaleString()} mentions
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
