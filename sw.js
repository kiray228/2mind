// Сайт переехал на /supermind/. Старый офлайн-кэш больше не нужен: снимаем service worker
// и перезагружаем открытые вкладки — они попадут на страницу переадресации.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => {
  e.waitUntil(
    self.registration.unregister()
      .then(() => self.clients.matchAll({ type: 'window' }))
      .then((cs) => cs.forEach((c) => c.navigate(c.url))),
  );
});
