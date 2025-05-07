import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

import { LoggerService, ConsoleLoggerService } from '../services/logger/logger.service'; // Assuming LoggerService is defined elsewhere

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideHttpClient(),
    provideRouter(routes),
    { provide: LoggerService, useClass: ConsoleLoggerService }, // Assuming LoggerService is defined elsewhere
  ],  
};
