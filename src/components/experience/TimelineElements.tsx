import { cn } from "@/lib/utils";

export const TimelineDot = ({ className = "" }: { className?: string }) => (
  <div className={cn("w-3 h-3 rounded-full bg-clay-400", className)} />
);

export const TimelineLine = ({ className = "" }: { className?: string }) => (
  <div className={cn("w-px bg-stone-200", className)} />
); 