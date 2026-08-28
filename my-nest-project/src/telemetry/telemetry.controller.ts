import { Controller, Post, Body } from '@nestjs/common';
import { TelemetryService } from './telemetry.service';
import { CreateTelemetryDto } from './dto/create-telemetry.dto';

@Controller('telemetry')
export class TelemetryController {
  constructor(private readonly telemetryService: TelemetryService) {}

  @Post()
  create(@Body() createTelemetryDto: CreateTelemetryDto) {
    return this.telemetryService.create(createTelemetryDto);
  }
}
