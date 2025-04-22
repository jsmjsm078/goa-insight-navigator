
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ReactWordcloud from "react-wordcloud";

interface WordMapProps {
  title: string;
  words: Array<{ text: string; value: number }>;
  filterOptions: Array<{ value: string; label: string }>;
  onFilterChange: (value: string) => void;
}

export function WordMap({ 
  title, 
  words, 
  filterOptions,
  onFilterChange 
}: WordMapProps) {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
        <Select onValueChange={onFilterChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select platform" />
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
        <ReactWordcloud
          words={words}
          options={{
            rotations: 0,
            fontSizes: [12, 40],
            padding: 2,
          }}
        />
      </CardContent>
    </Card>
  );
}
