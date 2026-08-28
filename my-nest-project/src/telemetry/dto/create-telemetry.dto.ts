import {
  IsString,
  IsNumber,
  IsBoolean,
  ValidateNested,
  IsArray,
  IsOptional,
  IsIn,
} from 'class-validator';
import { Type } from 'class-transformer';

class CpuInfoDto {
  @IsString() name: string;
  @IsNumber() cores: number;
  @IsNumber() threads: number;
  @IsNumber() usagePercent: number;
  @IsNumber() temperatureC: number;
}

class RamInfoDto {
  @IsNumber() totalGb: number;
  @IsNumber() usedGb: number;
  @IsNumber() usagePercent: number;
  @IsString() type: string;
  @IsNumber() speedMhz: number;
}

class GpuInfoDto {
  @IsString() name: string;
  @IsNumber() usagePercent: number;
  @IsNumber() temperatureC: number;
  @IsNumber() vramTotalGb: number;
  @IsNumber() vramUsedGb: number;
}

class VoltageInfoDto {
  @IsNumber() cpuVoltage: number;
  @IsNumber() gpuVoltage: number;
}

class BatteryInfoDto {
  @IsBoolean() present: boolean;

  @IsOptional() @IsNumber() percent?: number;
  @IsOptional() @IsBoolean() isCharging?: boolean;
  @IsOptional() @IsNumber() healthPercent?: number;
  @IsOptional() @IsNumber() cycleCount?: number;
}

export class DiskInfoDto {
  @IsString() id: string;
  @IsString() name: string;
  @IsIn(['SSD', 'HDD']) type: 'SSD' | 'HDD';
  @IsNumber() totalGb: number;
  @IsNumber() usedGb: number;
  @IsNumber() healthPercent: number;

  @IsOptional() @IsNumber() temperatureC?: number;
}

export class CreateTelemetryDto {
  @ValidateNested()
  @Type(() => CpuInfoDto)
  cpu: CpuInfoDto;

  @ValidateNested()
  @Type(() => RamInfoDto)
  ram: RamInfoDto;

  @ValidateNested()
  @Type(() => GpuInfoDto)
  gpu: GpuInfoDto;

  @ValidateNested()
  @Type(() => VoltageInfoDto)
  voltage: VoltageInfoDto;

  @ValidateNested()
  @Type(() => BatteryInfoDto)
  battery: BatteryInfoDto;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DiskInfoDto)
  storage: DiskInfoDto[];
}
