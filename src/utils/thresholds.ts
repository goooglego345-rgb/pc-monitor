export type ThresholdLevel = "good" | "warning" | "critical";

export function getUsageLevel(percent: number): ThresholdLevel {
  if (percent < 60) return "good";
  if (percent < 85) return "warning";
  return "critical";
}

export function getTemperatureLevel(tempC: number): ThresholdLevel {
  if (tempC < 60) return "good";
  if (tempC < 80) return "warning";
  return "critical";
}

export function getSsdHealthLevel(healthPercent: number): ThresholdLevel {
  if (healthPercent > 80) return "good";
  if (healthPercent > 50) return "warning";
  return "critical";
}

export function levelToColorClass(level: ThresholdLevel): string {
  switch (level) {
    case "good": return "text-green-500 border-green-500";
    case "warning": return "text-yellow-500 border-yellow-500";
    case "critical": return "text-red-500 border-red-500";
  }
}