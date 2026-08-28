import type { TelemetrySnapshot } from "../types/telemetry";

export const mockTelemetry: TelemetrySnapshot = {
  cpu: { name: "AMD Ryzen 7 5800X", cores: 8, threads: 16, usagePercent: 42, temperatureC: 61 },
  ram: { totalGb: 32, usedGb: 14, usagePercent: 44, type: "DDR4", speedMhz: 3600 },
  gpu: { name: "RTX 3070", usagePercent: 71, temperatureC: 68, vramTotalGb: 8, vramUsedGb: 5.2 },
  voltage: { cpuVoltage: 1.28, gpuVoltage: 1.05 },
  battery: { present: false },
  storage: [
    { id: "disk1", name: "Samsung 970 EVO", type: "SSD", totalGb: 1000, usedGb: 620, healthPercent: 97, temperatureC: 39 },
    { id: "disk2", name: "WD Blue", type: "HDD", totalGb: 2000, usedGb: 1400, healthPercent: 88 },
  ],
};