import { mockTelemetry } from "../data/mockTelemetry";
import { CpuCard } from "../components/cards/CpuCard";
import { RamCard } from "../components/cards/RamCard";
import { GpuCard } from "../components/cards/GpuCard";
import { VoltageCard } from "../components/cards/VoltageCard";
import { BatteryCard } from "../components/cards/BatteryCard";
import { StorageList } from "../components/cards/StorageList";

export function Dashboard() {
  const data = mockTelemetry;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">PC Health Monitor</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <CpuCard cpu={data.cpu} />
        <RamCard ram={data.ram} />
        <GpuCard gpu={data.gpu} />
        <VoltageCard voltage={data.voltage} />
        <BatteryCard battery={data.battery} />
      </div>
      <h2 className="text-xl font-semibold mb-3">Накопичувачі</h2>
      <StorageList disks={data.storage} />
    </div>
  );
}