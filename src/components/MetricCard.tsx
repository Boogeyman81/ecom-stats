import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  subtitle?: string;
  variant?: "default" | "success" | "primary";
}

export const MetricCard = ({ 
  title, 
  value, 
  icon: Icon, 
  trend, 
  subtitle,
  variant = "default" 
}: MetricCardProps) => {
  return (
    <Card className={cn(
      "p-6 transition-all duration-300 hover:shadow-medium bg-gradient-card border-border/50",
      variant === "success" && "border-success/20",
      variant === "primary" && "border-primary/20"
    )}>
      <div className="flex items-start justify-between">
        <div className="space-y-2 flex-1">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <div className="space-y-1">
            <p className="text-3xl font-bold tracking-tight text-foreground">{value}</p>
            {subtitle && (
              <p className="text-xs text-muted-foreground">{subtitle}</p>
            )}
          </div>
          {trend && (
            <div className="flex items-center gap-1 text-sm">
              <span className={cn(
                "font-semibold",
                trend.isPositive ? "text-success" : "text-destructive"
              )}>
                {trend.isPositive ? "+" : ""}{trend.value}%
              </span>
              <span className="text-muted-foreground">vs. período anterior</span>
            </div>
          )}
        </div>
        <div className={cn(
          "p-3 rounded-xl",
          variant === "success" && "bg-success/10",
          variant === "primary" && "bg-primary/10",
          variant === "default" && "bg-muted"
        )}>
          <Icon className={cn(
            "h-6 w-6",
            variant === "success" && "text-success",
            variant === "primary" && "text-primary",
            variant === "default" && "text-foreground"
          )} />
        </div>
      </div>
    </Card>
  );
};
