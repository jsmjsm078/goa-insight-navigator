
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { MessageSquare } from "lucide-react";

interface SentimentPoint {
  review: string;
  positive_points: string[];
  negative_points: string[];
}

interface SentimentDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  platform: string;
  points: SentimentPoint[];
}

export function SentimentDetailsModal({ 
  isOpen, 
  onClose, 
  platform,
  points 
}: SentimentDetailsModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Reviews from {platform}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[500px] pr-4">
          <div className="space-y-6">
            {points.map((point, index) => (
              <div key={index} className="space-y-3 border-b pb-4 last:border-0">
                <div className="flex gap-2">
                  <MessageSquare className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                  <p className="text-sm">{point.review}</p>
                </div>
                
                <div className="grid gap-2 pl-7">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-green-600">Positive Points:</p>
                    <div className="flex flex-wrap gap-2">
                      {point.positive_points.map((item, i) => (
                        <Badge key={i} variant="secondary" className="bg-green-50 text-green-700 hover:bg-green-100">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-red-600">Negative Points:</p>
                    <div className="flex flex-wrap gap-2">
                      {point.negative_points.map((item, i) => (
                        <Badge key={i} variant="secondary" className="bg-red-50 text-red-700 hover:bg-red-100">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
