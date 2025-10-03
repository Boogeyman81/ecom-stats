import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TopListItem {
  name: string;
  value: string;
  metric: string;
}

interface TopListProps {
  title: string;
  items: TopListItem[];
}

export const TopList = ({ title, items }: TopListProps) => {
  return (
    <Card className="p-6 bg-gradient-card border-border/50 hover:shadow-medium transition-all duration-300">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <div className="space-y-3">
          {items.map((item, index) => (
            <div 
              key={index}
              className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className={cn(
                  "flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm",
                  index === 0 && "bg-primary text-primary-foreground",
                  index === 1 && "bg-accent text-accent-foreground",
                  index === 2 && "bg-warning text-warning-foreground",
                  index > 2 && "bg-muted text-muted-foreground"
                )}>
                  {index + 1}
                </div>
                <div>
                  <p className="font-medium text-foreground">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.metric}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-foreground">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};
