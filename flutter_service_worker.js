'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "943c7c69dbd96e50880c4e3bcd9d71c7",
"index.html": "0fdf00268637b510f59affbb795712c8",
"/": "0fdf00268637b510f59affbb795712c8",
"main.dart.js": "73cba91d7d9e1ba8a61ae70319ba0a20",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"git.sh": "4bfb89b3d00cabc2d5e6ab863b9cb77d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "132ead1c2c32381e60ee907a1864a3b6",
".git/config": "6b56268d5a20b3f54c212722b0bdf497",
".git/objects/0c/275a613391817d71c3e386b69172817577b210": "31f2a6b2e9d8a6b35bf518e81c9f03c4",
".git/objects/0c/23d2a9e9f2b324271825c89fb77bafc2028d7d": "297be8424c13c505d909cad2dfd9be56",
".git/objects/03/35d3e84b391ee4de163b5b930a0aefef6dcca0": "5e9807df5b8d51df41640b579eabbd1e",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/69/cac329827bc29d8e8cae5df78c029374cafb23": "0edb7938292b5d767e938f06d8f55092",
".git/objects/51/8fbf2610c6387a2f159deca914a72c0bd1bc6f": "20bcef7a8c5bf5f60df35903502b857e",
".git/objects/58/4933889f41f011e6699857919c50ed2eb6eb94": "fcf69e6f5d2fd43929d1920beb6dc102",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/02/438dba644d1864b4541cf74455d54bf7d54460": "7459b174e097f581ecfadc5c39579a98",
".git/objects/a4/01d0383ae084660c7fe7e9839fa779b8725cbe": "667d434ccb8af87ed703cd1ec2593f0d",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/be/17d74268262d809316dee45f3af2fcf3b372a0": "0c7e144cc86f4f0cd4aa2c7153ecadf4",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/4981f38ce379a8e88920ff106d0bd22b376cdd": "a4a733583b388ce2d5fb002bae78dfac",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/f3/46a3d514fa349aee72022b481bdef0d27305a6": "daca4718aaa564261797e99131f4e544",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/c1/2a7dbd4da48a77f5bcbbee974a49017e2f108f": "ba8e3b00d45f00a15f07be5442b726da",
".git/objects/c6/a14b138e7c19148b4a170a28f254ff6d33b70a": "2980e3f151a6c952d7bb2033d53585eb",
".git/objects/c6/d9de68dc5dc073a56959948122eface81dccb9": "3385ffa7ded99bc8f08075f6cdafbbf1",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/dbfdfcfdeda99197436db1ee5df3a146035650": "7a8093d217b5b7a0db3ddcbdee82f3d1",
".git/objects/19/04fc9773942efe8aed9fa84e1a238d4145cdff": "f425a644ee1a0f264591dced0796735b",
".git/objects/21/85fa225a2d99ca7dabff3d0200f0f352b94151": "7d0e465b34a4dd2d2fbd1361df45fdc3",
".git/objects/86/687b1a11dffde2eefeb7230c7d01996d6cb256": "6899c0ea30610525014c84a25169c6be",
".git/objects/44/f2184b86abb0803b51cbd8610d85d824cc55cd": "115d8d2621af428d39e7508ce7573a9c",
".git/objects/2a/b2a63d24c249aa44e753a374c5e2ff53c32f22": "b64348c651140db5ac58bb8b48cd5063",
".git/objects/43/2388a9dff42406eddc9828fe8a953f7c4f311d": "21663731d3cd696dd8735121761aafa8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/91/4c4471f7ad38b5fe3a6ff5968c30cfb20e413b": "00ff85c0a35c96c593c41969b3176e6e",
".git/objects/3a/3ad076b7c6899a729a28d5f5a11b0ffd8b9ef8": "71aa287fe1c7b4be7940501ca0765282",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/08/0bc57bfcc01dca5800f1a215daaa874e5f0ae5": "424b85d9032b4c0776b2f5394625e25c",
".git/objects/97/c249e40904bcc9e3f0f6b1c99abdba9b666719": "d0a07fef6c944cf1a3e59684043ae5e3",
".git/objects/63/2214af43982d20a6154eae6be0d40db05d56ba": "25a615b5df2977ce83967e836b890934",
".git/objects/63/b367509af13e8d67919734d9b0b4318ca98c19": "e51343eac56b4cef03251dbba3e417e9",
".git/objects/64/b7c0ac50b3b8f92bcfc6bc8facc34d1493cd73": "0fd7696d5b83cd36904c2605cf4d475b",
".git/objects/90/7de40f754f2d4a45c1fab6c8515a5b1fa53ad8": "79f99ffc4f84c16b2f68567a2d98191c",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/a9b0710f37a784f4550c9d9bb67220b3467ba9": "8e62c54c7b0ddf79407627fd957c9a3a",
".git/objects/d4/a95cd3f3e28ccd4d4c028baac2bd4a372f8dc3": "6d3c506379f8ae577e8df906092f9294",
".git/objects/ba/daa9b84d0b8aada8eb8df718a3e59370721214": "2054d36740d6344412b78c409df9a2e3",
".git/objects/a7/90d495938eb91d7d85d97a36a41b7edbb8e6a6": "b0d46dbeedeb851e5ad5d6db755b2775",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/7a44c6213e482a48e4e4d60328dbf8b8fd762c": "7d67798fe5238600f17e98b3b4e1e093",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/a01d444252d4437fc502f684c835a7e4fdf11a": "fc51b0eb4b13e0358791a4851a859f0b",
".git/objects/e1/1c7dd727ac03963ce2441979d96bf8f9c6c565": "18b6b1bc09fa34fdaf0eb74c2bc9819b",
".git/objects/cc/4021d104994cd95fad9b8718f81db4bb238c19": "40975b01d7f09d6d59735bfe5c885e56",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f0/a4bf2e184aaa2a047fdb962819f3e08137e1cd": "29ea0bd4d84f40c7c8b43a7e46deb75f",
".git/objects/e8/e344ae858f0fa5c4e901dbb62a5051013f4039": "bb702917c36c66138358a87512269c77",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/e9/4417c0eebb70a36019842d5529e0f8320ad1e8": "08ead954dd8c871b8108ffcccd7e4b4c",
".git/objects/e0/8bdf42e59513af060dd76b4331fd993bb7227a": "93d710548a5d462146aca48e9348dfcf",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/c5e71e5257c32c821f34e4fdfc1077ed0080c1": "5ae502c66a51733191d055e1e1dc91c7",
".git/objects/41/ffb594b20d3d2877e259c184eed75890a0da1d": "8aaf66aa37455bef409639c567768e7c",
".git/objects/48/b77bf2e5818744d92f17de5b135b5ac61926c2": "f31267d9a8103db960842895f8d60637",
".git/objects/23/d44e8b6c5d821122813fcd60c452c5f36ec2f7": "ac023429d546dadd6cb0677712cd071d",
".git/objects/71/4d767ca11f69b868a41eeee1116b75bd1d75db": "928db2709f7b7a37d27d02702b81df24",
".git/objects/1c/6994090b744ebc660498e40615b628cb9b0f25": "a7f8297aff52d182af590727856b22c5",
".git/objects/13/ef64a5bcb0d834a2ef5e845a2b707e86baa2d7": "c17f2a8987b12ddca1d054d8d07f4fbd",
".git/objects/13/7dc08db6caaa8004614453c19a6b83dce81f97": "42c869405a591d979e11e5a1424dea94",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "df7f58fc1cbac215995a4ce6a1078ba4",
".git/logs/refs/heads/main": "df7f58fc1cbac215995a4ce6a1078ba4",
".git/logs/refs/remotes/origin/main": "862a7bd29f76b5d8181f7e5b1d342f31",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "ea3dd32377b3602d642b032a4c143845",
".git/refs/remotes/origin/main": "ea3dd32377b3602d642b032a4c143845",
".git/index": "8d1b5bad3e9c50e273584aefff37588c",
".git/COMMIT_EDITMSG": "764efa883dda1e11db47671c4a3bbd9e",
"assets/AssetManifest.json": "0c94dd82066e458e61d56969d666d2fa",
"assets/NOTICES": "a35dbb131d6db12972debe030fc8575e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "7e9789164b255eb18bfe958d765f44be",
"assets/fonts/MaterialIcons-Regular.otf": "e1fe6919efedfb92e32771efe5164ebc",
"assets/assets/images/wallpaper.png": "52c33071a76318dcd474b7054a53b972",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
