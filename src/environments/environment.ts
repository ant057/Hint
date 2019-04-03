// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // Initialize Firebase
  firebase: {
    apiKey: 'AIzaSyA2bT3nsGiiJ1LZ69CPmt4bbc2dVhesdoM',
    authDomain: 'hint-8617a.firebaseapp.com',
    databaseURL: 'https://hint-8617a.firebaseio.com',
    projectId: 'hint-8617a',
    storageBucket: 'hint-8617a.appspot.com',
    messagingSenderId: '404949477661'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
