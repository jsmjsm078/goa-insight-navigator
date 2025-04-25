import ReactWordcloud from "react-wordcloud";
import { Options } from "react-wordcloud";

// Placeholder data for key talking points
const words = [
  { text: "Beaches", value: 67 },
  { text: "Nightlife", value: 52 },
  { text: "Food", value: 45 },
  { text: "Culture", value: 38 },
  { text: "Shacks", value: 31 },
  { text: "Seafood", value: 28 },
  { text: "Resorts", value: 25 },
  { text: "Architecture", value: 22 },
  { text: "Watersports", value: 21 },
  { text: "Heritage", value: 19 },
  { text: "Spices", value: 18 },
  { text: "Festivals", value: 17 },
  { text: "Yoga", value: 16 },
  { text: "Churches", value: 15 },
  { text: "Cruise", value: 14 },
  { text: "Shopping", value: 13 },
  { text: "Sunsets", value: 12 },
  { text: "Casinos", value: 11 },
  { text: "Temples", value: 10 },
  { text: "Wildlife", value: 9 },
];

// Due to type complexity with the library, using a simpler approach
const options = {
  colors: ["#0EA5E9", "#06B6D4", "#F97316", "#65A30D", "#FB923C"],
  fontSizes: [12, 60],
  rotationAngles: [0, 90],
} as any;

export function KeyTalkingPoints() {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-tr from-goa-palm/10 to-goa-sand/20 p-1">
      <div className="backdrop-blur-sm bg-white/50 dark:bg-gray-950/50 rounded-lg p-6 border border-goa-sand/20">
        <div className="pb-2">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Key Talking Points</h2>
        </div>
        <div className="h-[300px] w-full">
          <ReactWordcloud 
            words={words} 
            options={options} 
          />
        </div>
      </div>
    </div>
  );
}
