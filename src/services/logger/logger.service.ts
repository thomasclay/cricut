import { Injectable } from '@angular/core';

export enum LogLevel {
  VERBOSE = 0,
  DEBUG = 1,
  INFORMATION = 2,
  WARNING = 3,
  ERROR = 4,
  FATAL = 5
}

const logLevelNames = {
  [LogLevel.VERBOSE]: 'VERBOSE',
  [LogLevel.DEBUG]: 'DEBUG',
  [LogLevel.INFORMATION]: 'INFORMATION',
  [LogLevel.WARNING]: 'WARNING',
  [LogLevel.ERROR]: 'ERROR',
  [LogLevel.FATAL]: 'FATAL'
};

export abstract class LoggerService {
  logLevel: LogLevel = LogLevel.VERBOSE; // Default log level
  abstract verbose(message: string, ...optionalParams: any[]): void;
  abstract debug(message: string, ...optionalParams: any[]): void;
  abstract information(message: string, ...optionalParams: any[]): void;
  abstract warning(message: string, ...optionalParams: any[]): void;
  abstract error(message: string, ...optionalParams: any[]): void;
  abstract fatal(message: string, ...optionalParams: any[]): void;
  abstract log(level: LogLevel, message: string, ...optionalParams: any[]): void;
}

// The default console logger.
@Injectable({
  providedIn: 'root'
})
export class ConsoleLoggerService implements LoggerService {
  logLevel: LogLevel = LogLevel.VERBOSE; // Default log level

  constructor() { }

  verbose(message: string, ...optionalParams: any[]): void {
    this.log(LogLevel.VERBOSE, message, ...optionalParams);
  }
  
  debug(message: string, ...optionalParams: any[]): void {
    this.log(LogLevel.DEBUG, message, ...optionalParams);
  }
  
  information(message: string, ...optionalParams: any[]): void {
    this.log(LogLevel.INFORMATION, message, ...optionalParams);
  }
  
  warning(message: string, ...optionalParams: any[]): void {
    this.log(LogLevel.WARNING, message, ...optionalParams);
  }
  
  error(message: string, ...optionalParams: any[]): void {
    this.log(LogLevel.ERROR, message, ...optionalParams);
  }
  
  fatal(message: string, ...optionalParams: any[]): void {
    this.log(LogLevel.FATAL, message, ...optionalParams);
  }
  
  log(level: LogLevel, message: string, ...optionalParams: any[]): void {
    if (level >= this.logLevel) {
      console.log(`"${logLevelNames[this.logLevel]}: ${message}`, ...optionalParams);
    }
  }
}
