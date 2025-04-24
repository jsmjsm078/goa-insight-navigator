
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

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
      center: [73.8278, 15.4989], // Centered on Goa
      zoom: 10
    });

    // Add marker
    new mapboxgl.Marker()
      .setLngLat([73.8278, 15.4989])
      .setPopup(new mapboxgl.Popup().setHTML('<h3>1000</h3>'))
      .addTo(map.current);

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-bold">Activities</CardTitle>
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
