import type { BatteryInfo } from "../../types/telemetry";

export function BatteryCard({ battery }: { battery: BatteryInfo }) {
  if (!battery.present) return null;

  return (
    <div className="bg-white rounded-xl shadow p-4 border">
      <h3 className="font-semibold text-lg mb-2">Батарея</h3>
      <p>Заряд: {battery.percent}%</p>
      <p>Заряджається: {battery.isCharging ? "так" : "ні"}</p>
      <p>Здоров'я: {battery.healthPercent}%</p>
      <p>Циклів: {battery.cycleCount}</p>
    </div>
  );
}