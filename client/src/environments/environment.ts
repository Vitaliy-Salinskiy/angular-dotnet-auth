const config = {
  domain: 'dev-is1vlpfwuh8l75ww.us.auth0.com',
  clientId: 'XIN40LuXIL0eZTUj4138zWR3x1A6zSNC',
  authorizationParams: {
    audience: 'qwerty',
  },
  apiUri: 'http://localhost:3001',
  appUri: 'http://localhost:4200',
  errorPath: '/error',
};

export const environment = {
  production: false,
  auth: {
    domain: config.domain,
    clientId: config.clientId,
    authorizationParams: {
      ...(config.authorizationParams.audience &&
      config.authorizationParams.audience !== 'YOUR_API_IDENTIFIER'
        ? { audience: config.authorizationParams.audience }
        : null),
      redirect_uri: window.location.origin,
    },
    errorPath: config.errorPath,
  },
  httpInterceptor: {
    allowedList: [`${config.apiUri}/*`],
  },
};
