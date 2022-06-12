// File: QrCodeShowApp.js
// Date: 2022-06-12
// Author: Gunnar Lidén

// File content
// =============
//
// Initialization of the Surface Worker functions.
// Please refer to the file SurfaceWorker.js
//
// Please note that this script file reference is defined at the end of <body>
// It runs after that the other things (above) have been defined
// 
// navigator means the browser. 
// The Service worker will only be initialized if the browser supports it.
// The register function is asyncronic with 'promise' functionality
// 'then' is succesful und 'catch' is error
// The function 'register' returns the Service Worker object
// (Note how an object can be displayed in the console)

if('serviceWorker' in navigator)
{
    navigator.serviceWorker.register('ServiceWorker.js')
      .then(reg => console.log('service worker registered', reg))
      .catch(err => console.log('service worker not registered', err));
}