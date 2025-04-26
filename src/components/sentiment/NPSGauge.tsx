
import { Card } from "@/components/ui/card";

interface NPSGaugeProps {
  score: number;
}

export function NPSGauge({ score }: NPSGaugeProps) {
  // Calculate rotation angle based on score (-10 to +10 range)
  // Map -10 to +10 to 0 to 180 degrees
  const angle = ((score + 10) / 20) * 180;
  
  return (
    <div className="flex flex-col items-center gap-4 min-w-[300px]">
      <div className="relative w-full max-w-[300px] aspect-[2/1]">
        {/* Gauge Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 h-full">
            <div className="relative w-full h-full">
              {/* Semicircle sections */}
              <div className="absolute bottom-0 left-0 right-0 h-1/2 flex">
                <div className="w-1/3 h-full rounded-tl-full bg-red-500 origin-bottom-right" />
                <div className="w-1/3 h-full bg-yellow-500" />
                <div className="w-1/3 h-full rounded-tr-full bg-green-500 origin-bottom-left" />
              </div>
              
              {/* Labels */}
              <div className="absolute -top-2 left-0 right-0 flex justify-between px-4 text-sm font-medium">
                <span className="text-red-500">DETRACTORS</span>
                <span className="text-yellow-500">PASSIVES</span>
                <span className="text-green-500">PROMOTERS</span>
              </div>
              
              {/* Needle */}
              <div 
                className="absolute bottom-0 left-1/2 w-1 h-[45%] bg-gray-800 origin-bottom rounded-t-full transition-transform duration-500"
                style={{ transform: `translateX(-50%) rotate(${angle}deg)` }}
              />
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
