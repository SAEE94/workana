import { Injectable, Logger, LoggerService, Scope } from '@nestjs/common';

@Injectable({
  scope: Scope.TRANSIENT
})
export class CustomLoggerService extends Logger {

  constructor() {
    super();
  }

}
