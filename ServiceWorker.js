// File: ServiceWorker.js
// Date: 2022-06-13
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

// New versions of source code (js, css, html).
// Cache will be updated when there is a change in this file, i.e.  
// just change version number.

const staticCacheName = 'site-static-v1';
const assets = 
[
  '/',
  'QrCodeShow.htm',
  'Scripts/QrCodeShow.js',
  'Scripts/QrCodeFiles.js',
  'Scripts/QrCodeSupporter.js',
  'Scripts/QrStrings.js',
  'Scripts/QrUtils.js',
  'Scripts/QrCodeShowApp.js',
  'jQuery/jquery-3.6.0.js',
  'Styles/QrCodeShow.css',
  'manifest.json',
  'https://jazzliveaarau.ch/favicon.ico',
  'Icons/icon_cross.png',
  'Icons/icon_info_invert.png',
  'Icons/Icon-29.png',
  'Icons/Icon-57.png',
  'Icons/Icon-60.png',
  'Icons/Icon-72.png',
  'Icons/Icon-76.png',
  'Icons/Icon-96.png',
  'Icons/Icon-120.png',
  'Icons/Icon-128.png',
  'Icons/Icon-144.png',
  'Icons/Icon-152.png',
  'Icons/Icon-180.png',
  'Icons/Icon-192.png',
  'Icons/Icon-384.png',
  'Icons/Icon-512.png',
  'Icons/Icon-1096.png',
  'Php/ExistsFile.php',
  'Php/SeasonStartYear.php'
];


// install event
// The cache (an additional cache) will be created
self.addEventListener('install', evt => {
    //console.log('service worker installed');
    evt.waitUntil(
      caches.open(staticCacheName).then((cache) => {
        console.log('caching shell assets');
        cache.addAll(assets);
      })
    );
  });

  // activate event
  // Caches except staticCacheName will be deleted
  self.addEventListener('activate', evt => {
    //console.log('service worker activated');
    evt.waitUntil(
      caches.keys().then(keys => {
        //console.log(keys);
        return Promise.all(keys
          .filter(key => key !== staticCacheName)
          .map(key => caches.delete(key))
        );
      })
    );
  });

// fetch event
// Get and return cacheRes if file is in cache. 
// Otherwise get the file from the server
self.addEventListener('fetch', evt => {
  //console.log('fetch event', evt);
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
    })
  );
});

