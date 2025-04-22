
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ReactWordcloud from "react-wordcloud";

interface FilterOption {
  label: string;
  options: Array<{ value: string; label: string }>;
  value: string;
  onChange: (value: string) => void;
}

interface WordMapProps {
  title: string;
  words: Array<{ text: string; value: number }>;
  filterOptions: FilterOption[];
}

export function WordMap({ 
  title, 
  words,
  filterOptions,
}: WordMapProps) {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-x-4">
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
        <div className="flex items-center gap-2">
          {filterOptions.map((filter, index) => (
            <Select key={index} value={filter.value} onValueChange={filter.onChange}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder={`Select ${filter.label.toLowerCase()}`} />
              </SelectTrigger>
              <SelectContent>
                {filter.options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ))}
        </div>
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
