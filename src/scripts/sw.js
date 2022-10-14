/* eslint-disable no-underscore-dangle */
/* eslint-disable no-restricted-globals */
// eslint-disable-next-line import/no-extraneous-dependencies
import { precacheAndRoute } from 'workbox-precaching';

// Do precaching
precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener('install', () => {
  console.log('Service Worker: Installed');
  self.skipWaiting();
});

self.addEventListener('push', () => {
  console.log('Service Worker: Pushed');
});
