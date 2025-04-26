
import { Card } from "@/components/ui/card";
import { CircleGauge } from "lucide-react";

interface NPSGaugeProps {
  score: number;
}

export function NPSGauge({ score }: NPSGaugeProps) {
  // Calculate rotation angle based on score (-10 to +10 range)
  // Map -10 to +10 to 0 to 180 degrees
  const angle = ((score + 10) / 20) * 180;
  
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-full max-w-[300px] aspect-[2/1]">
        {/* Gauge Background */}
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 right-0 h-full">
            <div className="relative w-full h-full">
              {/* Semicircle gradient background */}
              <div className="absolute bottom-0 left-0 right-0 h-1/2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-t-full" />
              </div>
              
              {/* Scale markers */}
              <div className="absolute bottom-0 left-0 right-0 h-1/2">
                {[...Array(11)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute bottom-0 w-0.5 h-3 bg-white/50 transform -translate-x-1/2"
                    style={{
                      left: `${(i * 100) / 10}%`
                    }}
                  />
                ))}
              </div>
              
              {/* Labels */}
              <div className="absolute -top-2 left-0 right-0 flex justify-between px-4 text-sm font-medium">
                <span className="text-red-500">-10</span>
                <span className="text-yellow-500">0</span>
                <span className="text-green-500">+10</span>
              </div>
              
              {/* Needle with circular base */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                <div 
                  className="relative h-[calc(50%-2px)] origin-bottom transition-transform duration-500 flex flex-col items-center"
                  style={{ transform: `rotate(${angle}deg)` }}
                >
                  <div className="w-1 h-full bg-gray-800 rounded-t-full" />
                  <div className="w-4 h-4 rounded-full bg-gray-800 -mt-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Score Display */}
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold">{score}</span>
        <span className="text-sm text-gray-500">NPS Score</span>
      </div>
    </div>
  );
}
