import type { DiskInfo } from "../../types/telemetry";
import { getSsdHealthLevel, getTemperatureLevel, levelToColorClass } from "../../utils/thresholds";

export function StorageCard({ disk }: { disk: DiskInfo }) {
  const healthLevel = levelToColorClass(getSsdHealthLevel(disk.healthPercent));

  return (
    <div className="bg-white rounded-xl shadow p-4 border">
      <h3 className="font-semibold text-lg mb-2">{disk.name} ({disk.type})</h3>
      <p className="text-sm text-gray-500 mb-2">{disk.usedGb} / {disk.totalGb} GB</p>
      <span className={`text-sm font-medium ${healthLevel}`}>Здоров'я: {disk.healthPercent}%</span>
      {disk.temperatureC !== undefined && (
        <p className={levelToColorClass(getTemperatureLevel(disk.temperatureC))}>
          Температура: {disk.temperatureC}°C
        </p>
      )}
    </div>
  );
}