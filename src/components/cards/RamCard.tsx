import type { RamInfo } from "../../types/telemetry";
import { getUsageLevel, levelToColorClass } from "../../utils/thresholds";
import { ProgressBar } from "../ui/ProgressBar";

export function RamCard({ ram }: { ram: RamInfo }) {
  const usageLevel = levelToColorClass(getUsageLevel(ram.usagePercent));

  return (
    <div className="bg-white rounded-xl shadow p-4 border">
      <h3 className="font-semibold text-lg mb-2">RAM</h3>
      <p className="text-sm text-gray-500 mb-2">{ram.type}, {ram.speedMhz} MHz</p>
      <p className="text-sm text-gray-500 mb-2">{ram.usedGb} / {ram.totalGb} GB</p>
      <span className={`text-sm font-medium ${usageLevel}`}>Завантаження: {ram.usagePercent}%</span>
      <ProgressBar percent={ram.usagePercent} colorClass={usageLevel} />
    </div>
  );
}