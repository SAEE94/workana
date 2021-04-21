import { CustomLoggerService } from 'src/shared/logger/logger.service';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AppMiddleware implements NestMiddleware {
    constructor(
        private loggerService: CustomLoggerService
    ) { }

    use(req: Request, res: Response, next: NextFunction) {
        this.loggerService.log('Request...');
        next();
    }
}