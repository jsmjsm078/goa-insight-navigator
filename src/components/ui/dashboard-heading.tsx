
import React from "react";
import { cn } from "@/lib/utils";

interface DashboardHeadingProps {
  title: string;
  description?: string;
  className?: string;
}

export function DashboardHeading({
  title,
  description,
  className,
}: DashboardHeadingProps) {
  return (
    <div className={cn("space-y-0.5", className)}>
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      {description && <p className="text-muted-foreground">{description}</p>}
    </div>
  );
}
