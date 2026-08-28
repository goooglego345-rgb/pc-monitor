export interface CpuInfo {
  name: string;
  cores: number;
  threads: number;
  usagePercent: number;
  temperatureC: number;
}

export interface RamInfo {
  totalGb: number;
  usedGb: number;
  usagePercent: number;
  type: string;
  speedMhz: number;
}

export interface GpuInfo {
  name: string;
  usagePercent: number;
  temperatureC: number;
  vramTotalGb: number;
  vramUsedGb: number;
}

export interface VoltageInfo {
  cpuVoltage: number;
  gpuVoltage: number;
}

export interface BatteryInfo {
  present: boolean;
  percent?: number;
  isCharging?: boolean;
  healthPercent?: number;
  cycleCount?: number;
}

export interface DiskInfo {
  id: string;
  name: string;
  type: "SSD" | "HDD";
  totalGb: number;
  usedGb: number;
  healthPercent: number;
  temperatureC?: number;
}

export interface TelemetrySnapshot {
  cpu: CpuInfo;
  ram: RamInfo;
  gpu: GpuInfo;
  voltage: VoltageInfo;
  battery: BatteryInfo;
  storage: DiskInfo[];
}