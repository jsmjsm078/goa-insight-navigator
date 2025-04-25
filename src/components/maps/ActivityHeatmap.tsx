
import { MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const locations = [
  { name: "Baga Beach", x: "30%", y: "40%", mentions: Math.floor(Math.random() * 200 + 50) },
  { name: "Fort Aguada", x: "20%", y: "45%", mentions: Math.floor(Math.random() * 200 + 50) },
  { name: "Dudhsagar Falls", x: "70%", y: "30%", mentions: Math.floor(Math.random() * 200 + 50) }
];

export function ActivityHeatmap() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Location Map</CardTitle>
      </CardHeader>
      <CardContent className="pb-6">
        <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
          {/* Map Background */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-90" 
            style={{ 
              backgroundImage: 'url("https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80")',
              filter: 'saturate(1.2) brightness(1.1)'
            }} 
          />
          
          {/* Location Markers */}
          {locations.map((location) => (
            <div
              key={location.name}
              className="absolute group"
              style={{ left: location.x, top: location.y }}
            >
              <div className="relative">
                <MapPin className="h-6 w-6 text-goa-coral animate-bounce" />
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 text-gray-800 px-2 py-1 rounded-md text-sm whitespace-nowrap shadow-lg">
                  {location.name}
                  <br />
                  {location.mentions} mentioned
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
