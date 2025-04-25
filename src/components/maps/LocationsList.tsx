
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const locations = [
  { name: "Baga Beach", mentions: 2456 },
  { name: "Fort Aguada", mentions: 1890 },
  { name: "Dudhsagar Falls", mentions: 1654 }
];

export function LocationsList() {
  return (
    <Card>
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
              <span className="text-sm text-gray-500">{location.mentions.toLocaleString()} mentions</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
