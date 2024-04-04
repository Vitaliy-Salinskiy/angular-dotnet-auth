import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAuth0 } from '@auth0/auth0-angular';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAuth0({
      domain: 'dev-is1vlpfwuh8l75ww.us.auth0.com',
      clientId: 'XIN40LuXIL0eZTUj4138zWR3x1A6zSNC',
      authorizationParams: {
        redirect_uri: 'https://0eaf-89-188-223-100.ngrok-free.app',
      },
    }),
  ],
};
