import type { DiskInfo } from "../../types/telemetry";
import { StorageCard } from "./StorageCard";

export function StorageList({ disks }: { disks: DiskInfo[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {disks.map((disk) => (
        <StorageCard key={disk.id} disk={disk} />
      ))}
    </div>
  );
}