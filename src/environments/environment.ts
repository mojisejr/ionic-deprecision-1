// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const productionUrl = "https://dry-reef-08166.herokuapp.com/";
const localhostUrl = "http://localhost:3000/";
export const environment = {
  production: true,
  productRoutes: `${localhostUrl}api/v1/products`,
  recommedRoute: `${localhostUrl}api/v1/products?recommend=true`,
  loginRoute: `${localhostUrl}api/v1/users/login`,
  logoutRoute: `${localhostUrl}api/v1/users/logout`,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
