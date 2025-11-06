// service-worker.js
const CACHE_NAME = 'ultraabox-cache-v5';
const urlsToCache = [
  './',
  './index.html',
  './manifest.webmanifest',
  './favicon.ico',
  './icon_32.png',
  './icon_maskable_192.png',
  './beepbox_editor.min.js',
  './beepbox_synth.min.js',
  './drumsamples.js',
  './kirby_samples.js',
  './mario_paintbox_samples.js',
  './nintaribox_samples.js',
  './samples.js',
  '/samples.js',
  './samples2.js',
  '/samples2.js',
  './samples3.js',
  '/samples3.js',
  './wario_samples.js',
  './credits.html',
  './faq.html',
  './patch_notes.html',
  './sample_extractor.html',
  './synth_example.html',
  './404.html',

  // === /player/ ===
  './player/index.html',
  './player/404.html',
  './player/beepbox_player.min.js',
  './player/drumsamples.js',
  './player/kirby_samples.js',
  './player/mario_paintbox_samples.js',
  './player/nintaribox_samples.js',
  './player/samples.js',
  './player/samples2.js',
  './player/samples3.js',
  './player/wario_samples.js',

  // === /theme_resources/ ===
  './theme_resources/AzurLaneThemeLogo.png',
  './theme_resources/AzurLaneThemeMemoryTaskBackground.png',
  './theme_resources/AzurLaneThemeMouse.png',
  './theme_resources/AzurLaneThemeStarterSquad.png',
  './theme_resources/abyssbox_border.png',
  './theme_resources/abyssbox_border_light.png',
  './theme_resources/abyssbox_cursor.png',
  './theme_resources/abyssbox_cursor_hand.png',
  './theme_resources/abysstype.otf',
  './theme_resources/abysstype_small.otf',
  './theme_resources/hotdog.png',
  './theme_resources/icon-SelectAll.png',
  './theme_resources/icon-copy.png',
  './theme_resources/icon-deleteChannel.png',
  './theme_resources/icon-duplicate.png',
  './theme_resources/icon-edit.png',
  './theme_resources/icon-export.png',
  './theme_resources/icon-file.png',
  './theme_resources/icon-fullscreen.png',
  './theme_resources/icon-import.png',
  './theme_resources/icon-insertChannel.png',
  './theme_resources/icon-next.png',
  './theme_resources/icon-paste.png',
  './theme_resources/icon-pause.png',
  './theme_resources/icon-play.png',
  './theme_resources/icon-preferences.png',
  './theme_resources/icon-prev.png',
  './theme_resources/icon-record.png',
  './theme_resources/icon-redo.png',
  './theme_resources/icon-singleBarLoop.png',
  './theme_resources/icon-speaker.png',
  './theme_resources/icon-speakerMuted.png',
  './theme_resources/icon-stop.png',
  './theme_resources/icon-undo.png',
  './theme_resources/icon-zoomIn.png',
  './theme_resources/icon-zoomOut.png',
  './theme_resources/moveNotesDown.png',
  './theme_resources/moveNotesUp.png',
  './theme_resources/stripesbg.gif',
  './theme_resources/stripesbg_light.gif',
  './theme_resources/wackybox_cursor.png'
];

// 💾 インストール時にキャッシュ作成
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
  );
});

// ♻️ 古いキャッシュ削除（更新対応）
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(names =>
      Promise.all(names.map(name => {
        if (name !== CACHE_NAME) return caches.delete(name);
      }))
    )
  );
  self.clients.claim();
});

// 🌐 通信時：キャッシュ優先で取得
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response =>
      response || fetch(event.request)
    )
  );
});
