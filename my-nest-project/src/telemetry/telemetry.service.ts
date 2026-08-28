import { Injectable } from '@nestjs/common';
import { CreateTelemetryDto } from './dto/create-telemetry.dto';

@Injectable()
export class TelemetryService {
  create(createTelemetryDto: CreateTelemetryDto) {
    console.log(
      'Отримано нові дані з ПК:',
      JSON.stringify(createTelemetryDto, null, 2),
    );

    return {
      status: 'success',
      message: 'Телеметрія успішно отримана',
      receivedData: createTelemetryDto,
    };
  }
}
