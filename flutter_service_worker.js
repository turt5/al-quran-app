'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "079e863e92b41e16393a4db260b4cb0b",
".git/config": "94c1ced99c333f9f393a298c35862759",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d551f88187a3ea6f0fe5a9e8bdeaf682",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "362620d9e489f1407d361114a0ee7816",
".git/logs/refs/heads/main": "aca5606fa3052983533ea8e227819d91",
".git/logs/refs/remotes/origin/main": "a6f8e0a2652d754ce7a0dbbca62d074f",
".git/objects/00/84943c80858dd1060e467615c392b5e5f7a5bb": "48d2b5ae68448358d54e3be04bf7430d",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/08/869d0995f79efa6a83c84b85c3f71e3909e36a": "cd15970888dc5a7ff09feec805baaa67",
".git/objects/0b/1333d0263adac34b1605693dad9001e485b711": "9467642a0cd0ccc8f26e53ec69f806ac",
".git/objects/13/f9e8d2d058c774acf8314f4c319c171d02cea4": "7ea18fa68dce8abafb8a106b6b97840c",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/18/a130e0467006eb1affe41306881b52dd7bdc7e": "24302e606ca781841b456841dbb8ae9c",
".git/objects/1b/db50436af900f9fedd281ad8b0412553dedd82": "2182137bc1005a16a9ffabb72e0c5639",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/2d/404ca867fe054d7eaee0d6c78762267a2ed39f": "a77f643ec7424c6d0151eb833ea41e72",
".git/objects/30/1584bdb1a19240c486071c541a52b0188db2f9": "fe2a84b8e6d85a91ac30910aa1474bc4",
".git/objects/31/2f09800687e5dfdc47b93b07e56b8b0db32ae9": "04db06f59ee2bba83c34df14510239fd",
".git/objects/36/5c2b5d9a435138b0830f48ff83516658a2a0e0": "ed67bdbfe28a392ea93c2818af05f17a",
".git/objects/37/fe4f3283d44999b7cb9316294ace64ac2a1e6f": "70dca7112be6af20446ffec4bef8d792",
".git/objects/39/acd3f4333e71a4de5a4e5d47369429fa1e0459": "431644c20d6f0accd3b1e6151d015a5b",
".git/objects/43/8c346dd740007b6b6e0ae794ed40125d4e264a": "ac9d385cb8dc8f324ce65d493a4b5fb5",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/f75e566b29a39ad10ee7a28823d4f1e2b3601c": "f5f500cd5c4b190a19aa929082de7264",
".git/objects/48/83572c65feebe0285cadb630caa8cc03b1e85b": "9e886ee5c8c080f0e36631b1db091246",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4f/3f1fd17ba9d6e4fea4b9af4e0f25e8d12c7c9d": "bb1d63dbce2f360a82cd994120e7e6c7",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/65/ef993eaaaf2892ba8f834df83de51012f0822d": "5c25de97ad15ee44c89b6700a67aab55",
".git/objects/6c/de14477e15042cc8bf873d335f8f103d5b75b4": "af31453118e9b3a04e8742b5315ac03c",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/75/0be5db7891c069165242b815e0f93f1e3434e9": "412830f65fa0a258da95c42c6266ea2b",
".git/objects/7c/8120450fc1ddee959a42aed0468ad8be933515": "a9459228e29c0704609fe66c9994f4aa",
".git/objects/83/f2aba6c2191f7053491cda871d31c7f877a34f": "5dd91f556182dd928a51fc4e5c6bf88a",
".git/objects/85/053d5ac2f738f6b380081cf279fd1bf39cc0e9": "112675be53fcb9216a4cf50470b11d58",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/ace45760d6e48951627ad2a3444be52b8a1757": "b3ab7ed46f4f2772780b6099c5579cc4",
".git/objects/8c/19ee3aae3eadbb62e894c9f1185f81f47ec2e5": "8b392e5e672abee0ab9ce8af21a46a97",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/94/d9a511719c041aaab6d59b09debbbb7f871923": "b185c6bce3446d9a4845fac3b2d60ca0",
".git/objects/96/685a86b6b8054b64b7dbe323b765343d776c7a": "d0f09a838666b72729863a8ab5760e11",
".git/objects/96/746037c1936c74eb0573e475576452fab5934b": "8d8735b1813198eda6b4671d0980adbe",
".git/objects/96/897d74e6426718b80e93f3dbd409ece211b117": "300adb6f850080d071989c328dcd7c3d",
".git/objects/9a/586e9931b17d0856fce5c2d1ecf2a84ad342fd": "d239e7d99aab1a5abc9474e0e93b73ef",
".git/objects/9c/dc24db45fb9ead1e2595301bba34d61db679c5": "77c5540bcc6eca4cb68f30b2e4da1eb2",
".git/objects/a7/22bb74a05ee47df312068eb9b81d0937bcc48a": "37ac2303b74e45c7bd0467052101a3ab",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b5/f78d056cf52fd1d652383c76e126d8d62fe74c": "df5b88e1ff99519c88afab182c906a16",
".git/objects/b6/f7e1344ed6e20153ea93268dcdc548550f5ad9": "86214b2a53806407f34f05243e93dc07",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c4/d6f093b658d10faa545db7a7afb856b696e95d": "9918f12046c59d870f24eda063713c5f",
".git/objects/c5/63769b416fe9ee15216cef4a41085bd16fa22b": "649754a5b397073c77acc22565750ec8",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/ca/f256adcde97b24b0b48fa9af1beb1b58a81816": "b9b67e2ac19c028254ec6284e4afe970",
".git/objects/cb/a5f637afd2c2bf5a037faf95206f7385e890fb": "fe73e9799f8a10bdfa06b6200f4a41d5",
".git/objects/cd/b17fdd630fd0d7e6a1caac61598e18ebafae21": "5f7bbe640ffde351819ee7ff61810aea",
".git/objects/d3/6c8e8cf7d76a61d9eba40ab0730d3782917d3c": "804130a815a0c0cdbd92f7ba6f2b8713",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d8/d3ca781b24086146501203c831dfe877a7247a": "6cf291a32ea1235e538b85007e32389d",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/3d321c79247592a554174b3276a65822c37c3b": "b83243a2f44a5a645c457d52bc55c68a",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fc/5a1e687b40a4499e8ac6319089725899817b6c": "0efd4da570b82a16fbaee6a526d48088",
".git/objects/fd/6d54e8ecd1ed99bc88b49f6a7455200b3059f9": "0179b8ab75eed9bed2049c208eb8892b",
".git/refs/heads/main": "21a8cd8f4cb31fdb1bdcaaddeed36d0a",
".git/refs/remotes/origin/main": "21a8cd8f4cb31fdb1bdcaaddeed36d0a",
"assets/AssetManifest.bin": "e139aeb340cae4f10690296b3e12c647",
"assets/AssetManifest.bin.json": "d39248fa2f6c63bb2cd8fbcdc60a8469",
"assets/AssetManifest.json": "4161a4762b2c031c78547e8700364be9",
"assets/assets/6685161.jpg": "9a98aff65ce656369daed3bf19b82ce8",
"assets/assets/logo.jpg": "23bbbed2c7d469c018fe5482caecea56",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "825c21503ee928b3b0170a61997f500f",
"assets/NOTICES": "f7040d607d2805d5b19f46311d73b0e3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c0f64c305ff990bfe88bd42b8cd83117",
"/": "c0f64c305ff990bfe88bd42b8cd83117",
"main.dart.js": "6a2c13a39ad79ca499fffff2a638c788",
"manifest.json": "4c5068f14652709e2f991210e93b7685",
"version.json": "3f0cfac3248f2a850c7573cc3d06f868"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
