import type { VoltageInfo } from "../../types/telemetry";

export function VoltageCard({ voltage }: { voltage: VoltageInfo }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 border">
      <h3 className="font-semibold text-lg mb-2">Напруга</h3>
      <p>CPU: {voltage.cpuVoltage} V</p>
      <p>GPU: {voltage.gpuVoltage} V</p>
    </div>
  );
}