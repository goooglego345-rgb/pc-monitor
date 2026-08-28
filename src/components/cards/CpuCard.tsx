import type { CpuInfo } from "../../types/telemetry";
import { getUsageLevel, getTemperatureLevel, levelToColorClass } from "../../utils/thresholds";
import { ProgressBar } from "../ui/ProgressBar";

export function CpuCard({ cpu }: { cpu: CpuInfo }) {
  const usageLevel = levelToColorClass(getUsageLevel(cpu.usagePercent));
  const tempLevel = levelToColorClass(getTemperatureLevel(cpu.temperatureC));

  return (
    <div className="bg-white rounded-xl shadow p-4 border">
      <h3 className="font-semibold text-lg mb-2">CPU — {cpu.name}</h3>
      <p className="text-sm text-gray-500 mb-2">{cpu.cores} ядер / {cpu.threads} потоків</p>
      <div className="mb-2">
        <span className={`text-sm font-medium ${usageLevel}`}>Завантаження: {cpu.usagePercent}%</span>
        <ProgressBar percent={cpu.usagePercent} colorClass={usageLevel} />
      </div>
      <span className={`text-sm font-medium ${tempLevel}`}>Температура: {cpu.temperatureC}°C</span>
    </div>
  );
}