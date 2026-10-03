// Service worker do Prumo: deixa o app abrir mesmo sem internet.
// Ao mudar algum arquivo do app, aumente o número da versão abaixo (v1 -> v2).
const VERSAO = 'prumo-v6.4';
const APP = ['./', './index.html', './firebase-config.js', './manifest.webmanifest', './privacidade.html',
  './icons/icon-192.png', './icons/apple-touch-icon.png', './icons/atalho-gasto.png', './icons/atalho-simular.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSAO).then(c => c.addAll(APP)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== VERSAO).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // Firebase (login e banco) nunca passa pelo cache: o próprio Firestore cuida do modo offline.
  if (/googleapis\.com$|firebaseio\.com$|identitytoolkit|securetoken/.test(url.hostname) && !url.hostname.startsWith('fonts.')) return;
  const versioned = url.hostname === 'www.gstatic.com' || url.hostname.startsWith('fonts.');
  if (versioned) {
    // bibliotecas e fontes têm versão no endereço: cache primeiro
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
      const copy = res.clone(); caches.open(VERSAO).then(c => c.put(req, copy)); return res;
    })));
    return;
  }
  if (url.origin === location.origin) {
    // arquivos do app: rede primeiro (pega atualizações), cache se estiver sem internet
    e.respondWith(fetch(req).then(res => {
      const copy = res.clone(); caches.open(VERSAO).then(c => c.put(req, copy)); return res;
    }).catch(() => caches.match(req).then(hit => hit || caches.match('./index.html'))));
  }
});
