import type { GpuInfo } from "../../types/telemetry";
import { getUsageLevel, getTemperatureLevel, levelToColorClass } from "../../utils/thresholds";
import { ProgressBar } from "../ui/ProgressBar";

export function GpuCard({ gpu }: { gpu: GpuInfo }) {
  const usageLevel = levelToColorClass(getUsageLevel(gpu.usagePercent));
  const tempLevel = levelToColorClass(getTemperatureLevel(gpu.temperatureC));

  return (
    <div className="bg-white rounded-xl shadow p-4 border">
      <h3 className="font-semibold text-lg mb-2">GPU — {gpu.name}</h3>
      <p className="text-sm text-gray-500 mb-2">VRAM: {gpu.vramUsedGb} / {gpu.vramTotalGb} GB</p>
      <div className="mb-2">
        <span className={`text-sm font-medium ${usageLevel}`}>Завантаження: {gpu.usagePercent}%</span>
        <ProgressBar percent={gpu.usagePercent} colorClass={usageLevel} />
      </div>
      <span className={`text-sm font-medium ${tempLevel}`}>Температура: {gpu.temperatureC}°C</span>
    </div>
  );
}