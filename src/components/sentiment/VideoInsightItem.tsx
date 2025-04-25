
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Video } from "lucide-react";

interface VideoInsightItemProps {
  title: string;
  positivePoints: string[];
  negativePoints: string[];
  location: string;
  thumbnail: string;
  transcript: string;
}

export function VideoInsightItem({
  title,
  positivePoints,
  negativePoints,
  location,
  thumbnail,
  transcript,
}: VideoInsightItemProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="cursor-pointer hover:bg-accent transition-colors">
          <CardHeader className="flex flex-row items-start gap-4">
            <div className="w-48 h-28 bg-muted rounded-md overflow-hidden relative">
              <img src={thumbnail} alt={title} className="object-cover w-full h-full" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <Video className="w-8 h-8 text-white opacity-80" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-2">{title}</h3>
              <Badge variant="outline" className="bg-accent">
                {location}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 text-sm">
              <div>
                <p className="text-muted-foreground mb-1.5">Positive Points:</p>
                <div className="flex flex-wrap gap-1.5">
                  {positivePoints.map((point) => (
                    <Badge key={point} variant="secondary" className="bg-green-500/10 text-green-700">
                      {point}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-muted-foreground mb-1.5">Negative Points:</p>
                <div className="flex flex-wrap gap-1.5">
                  {negativePoints.map((point) => (
                    <Badge key={point} variant="secondary" className="bg-red-500/10 text-red-700">
                      {point}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="aspect-video w-full bg-muted rounded-md overflow-hidden">
            <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
          </div>
          <div className="prose prose-sm max-w-none">
            <h3 className="text-lg font-semibold mb-2">Video Transcript</h3>
            <p className="whitespace-pre-line text-muted-foreground">{transcript}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
