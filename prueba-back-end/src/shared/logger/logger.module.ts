import { CustomLoggerService } from 'src/shared/logger/logger.service';
import { Module } from '@nestjs/common';

@Module({
    imports: [],
    providers: [CustomLoggerService],
    exports: [CustomLoggerService]
})
export class LoggerModule { }
