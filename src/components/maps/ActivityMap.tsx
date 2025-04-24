
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

// Popular locations in Goa with their coordinates
const LOCATIONS = [
  { name: "Baga Beach", coordinates: [73.7544, 15.5566] as [number, number], activity: Math.floor(Math.random() * 500) + 100 },
  { name: "Fort Aguada", coordinates: [73.7708, 15.4909] as [number, number], activity: Math.floor(Math.random() * 500) + 100 },
  { name: "Dudhsagar Falls", coordinates: [74.3145, 15.3147] as [number, number], activity: Math.floor(Math.random() * 500) + 100 },
  { name: "Basilica of Bom Jesus", coordinates: [73.9115, 15.5009] as [number, number], activity: Math.floor(Math.random() * 500) + 100 },
  { name: "Calangute Beach", coordinates: [73.7527, 15.5477] as [number, number], activity: Math.floor(Math.random() * 500) + 100 }
];

export function ActivityMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [73.8278, 15.4989] as [number, number], // Centered on Goa
      zoom: 9.5 // Adjusted zoom to show more of Goa
    });

    // Add markers for each location
    LOCATIONS.forEach(location => {
      const popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(`<div class="p-2">
          <h3 class="font-bold">${location.name}</h3>
          <p class="text-sm">Activity count: ${location.activity}</p>
        </div>`);

      new mapboxgl.Marker({ color: '#FF6B6B' })
        .setLngLat(location.coordinates)
        .setPopup(popup)
        .addTo(map.current!);
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-bold">Popular Locations</CardTitle>
      </CardHeader>
      <CardContent>
        {!mapboxToken && (
          <div className="mb-4">
            <input
              type="text"
              placeholder="Enter your Mapbox public token"
              className="w-full p-2 border rounded"
              onChange={(e) => setMapboxToken(e.target.value)}
            />
            <p className="text-sm text-gray-500 mt-1">
              Get your token at mapbox.com
            </p>
          </div>
        )}
        <div ref={mapContainer} className="w-full h-[400px] rounded-lg overflow-hidden" />
      </CardContent>
    </Card>
  );
}
