// File: ServiceWorker.js
// Date: 2022-06-12
// Author: Gunnar Lidén

// File content
// =============
//
// Surface Workers (SW) for PWA (Progressive Web App)
// Functions that make a web page be like an app
//
// These functions run in a separate thread of the browser.
// They react on events like fetching files from the server
// This file must be placed in the same (top) directory of the web application.
// SW functions can only be defined for the files in the same directory and subdirectories
// All browser do not yet support (all) SW functions. If not the web page will still funtion the normal way
// The Surface Worker cannot be initialized in this file. It has to be initialized in another js file.
// Initialization for web page QrCodeShow.htm is in file App.js


// install event
self.addEventListener('install', evt => 
{
    console.log('service worker installed');
});
  
  // activate event
  self.addEventListener('activate', evt => 
  {
    console.log('service worker activated');
  });

// fetch event
self.addEventListener('fetch', evt => 
{
    console.log('fetch event', evt);
});


