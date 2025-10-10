// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"4CwNn":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "3c42a75432652132";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"ebWYT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _baseJs = require("./view/base.js");
var _userViewJs = require("./view/userView.js");
var _userJs = require("./Model/User.js");
var _userJsDefault = parcelHelpers.interopDefault(_userJs);
var _productView = require("./view/productView");
var _productJs = require("./Model/Product.js");
var _productJsDefault = parcelHelpers.interopDefault(_productJs);
var _makeSaleViewJs = require("./view/makeSaleView.js");
var _makeSaleJs = require("./Model/MakeSale.js");
var _makeSaleJsDefault = parcelHelpers.interopDefault(_makeSaleJs);
var _transactionViewJs = require("./view/transactionView.js");
const state = {};
// Event listener for profile button
(0, _baseJs.elements).profileBtn.addEventListener("click", (0, _baseJs.toggleProfileMenu));
// Optional: click outside to close
document.addEventListener("click", (e)=>{
    if (!(0, _baseJs.elements).profileBtn.contains(e.target) && !(0, _baseJs.elements).dropdownMenu.contains(e.target)) (0, _baseJs.elements).dropdownMenu.classList.add("hidden");
});
(0, _baseJs.elements).addUserBtn.addEventListener('click', ()=>{
    _userViewJs.showUserCard();
});
(0, _baseJs.elements).userCardCancelBtn.addEventListener('click', ()=>{
    _userViewJs.hideUserCard();
});
document.addEventListener("click", (0, _baseJs.sidebarLinks)());
// Event listener for form submission
(0, _baseJs.elements).newAddBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    const input = _userViewJs.getUserInput();
    if (input.name && input.phone && input.password && input.email) {
        if (!state.user) state.user = new (0, _userJsDefault.default)();
        const user = state.user.addUser(input.name, input.phone, input.password, input.email, input.profileImage);
        _userViewJs.displayUser(user);
        _userViewJs.clearUserInput();
        _userViewJs.hideUserCard();
    } else alert("Please fill in all required fields.");
});
document.querySelectorAll('.eachUser').forEach((table)=>{
    table.addEventListener('click', (e)=>{
        const row = e.target.closest('tr');
        const user = new (0, _userJsDefault.default)();
        user.readUsers();
        //Handle user status update
        if (e.target.closest('.fa-user')) {
            const id = row.id;
            const updatedUser = user.updateUserStatus(parseInt(id));
            _userViewJs.updateUserStatusView(updatedUser);
        }
        //Handle delete user
        if (e.target.closest('.fa-user-times')) {
            if (confirm("Are you sure you want to delete this user?")) {
                const id = parseInt(row.id);
                console.log('ID:', typeof id);
                if (id) {
                    user.deleteUser(id);
                    row.remove();
                    alert("User deleted successfully");
                } else alert("No user was found");
            }
        }
    });
});
// product control section
(0, _baseJs.elements).productAddBtn.addEventListener("click", ()=>{
    _productView.newProductCard();
});
//
(0, _baseJs.elements).productCardCancelBtn.addEventListener("click", ()=>{
    _productView.hideProductCard();
    (0, _baseJs.elements).newProductBtn.classList.remove('hidden');
    (0, _baseJs.elements).editProductBtn.classList.add('hidden');
});
//Add product
(0, _baseJs.elements).newProductBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    const input = _productView.getProductInput();
    if (input.name && input.price && input.discription && input.quantity && input.category) {
        if (!state.product) state.product = new (0, _productJsDefault.default);
        const product = state.product.addProduct(input.name, input.price, input.discription, input.quantity, input.category, input.productImage);
        _productView.renderProduct(product, (0, _baseJs.elements).productList, 'productPage');
        _productView.renderProduct(product, (0, _baseJs.elements).saletList, 'salesPage');
        _productView.clearProductInput();
        _productView.hideProductCard();
    } else alert("Please fill in all required fields.");
});
document.getElementById("ProductList").addEventListener("click", (e)=>{
    //handle delete product
    if (e.target.closest('.product-trash')) {
        const id = e.target.parentNode.parentNode.parentNode.parentNode.id;
        console.log('delete product controller', id);
        state.product = new (0, _productJsDefault.default)();
        if (!state.product) state.product = new (0, _productJsDefault.default)();
        if (confirm("Are you sure you want to delete this product?")) {
            state.product.deleteProduct(id);
            _productView.deleteProduct(id);
        }
    }
    //Handle product editing
    if (e.target.closest('.product-edit')) {
        if (!state.product) state.product = new (0, _productJsDefault.default)();
        const id = e.target.parentNode.parentNode.parentNode.parentNode.id;
        state.id = id;
        const product = state.product.getProduct(id);
        _productView.editProduct(product);
        _productView.newProductCard();
    }
});
//Edit Product
(0, _baseJs.elements).editProductBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    const input = _productView.getProductInput();
    if (input.name && input.price && input.discription && input.quantity && input.category) {
        if (!state.product) state.product = new (0, _productJsDefault.default);
        state.product.editProduct(state.id, input);
        console.log('PRODUCTS FROM STATE:', state.product.products);
        _productView.renderProducts(state.product.products);
        _productView.clearProductInput();
        _productView.hideProductCard();
    } else alert("Please fill in all required fields.");
});
// Make sale control
document.addEventListener('click', _makeSaleViewJs.initCartPage());
document.getElementById("saletList").addEventListener("click", (e)=>{
    //Handle add to cart
    if (e.target.closest('.add-to-cart')) {
        const id = e.target.parentNode.parentNode.parentNode.parentNode.id;
        if (!state.MakeSale) state.MakeSale = new (0, _makeSaleJsDefault.default)();
        if (!state.product) state.product = new (0, _productJsDefault.default)();
        state.product.readProduct();
        const product = state.product.getProduct(id);
        if (!product) return alert("Product not found");
        state.MakeSale.readCart();
        const alreadyInCart = state.MakeSale.cart.find((item)=>item.id === product.id);
        if (alreadyInCart) {
            // Just increase quantity
            const updateQuantity = state.MakeSale.addToCart(product.name, product.price, 1, product.productImage, product.id);
            // Update cart UI
            _makeSaleViewJs.updateCartQuantity(updateQuantity.id, updateQuantity.quantity);
            const { subTotal, tax, discount, orderTotal } = state.MakeSale.calculateTotals();
            _makeSaleViewJs.orderSummaryTotals(subTotal, tax, discount, orderTotal);
            alert("Product quantity increased in cart");
            return;
        }
        const item = state.MakeSale.addToCart(product.name, product.price, 1, product.productImage, product.id);
        _makeSaleViewJs.renderCartItem(item);
        const { subTotal, tax, discount, orderTotal } = state.MakeSale.calculateTotals();
        _makeSaleViewJs.orderSummaryTotals(subTotal, tax, discount, orderTotal);
        alert("Product added to cart successfully");
    }
});
document.getElementById("cartList").addEventListener("click", (e)=>{
    if (e.target.closest('.cart-trash')) {
        e.stopPropagation();
        const id = e.target.parentNode.parentNode.parentNode.id.replace('cart-item-', '');
        console.log('delete cart item controller', id);
        if (!state.MakeSale) state.MakeSale = new (0, _makeSaleJsDefault.default)();
        state.MakeSale.deleteCart(parseInt(id));
        _makeSaleViewJs.deleteCartItem(id);
        const { subTotal, tax, discount, orderTotal } = state.MakeSale.calculateTotals();
        _makeSaleViewJs.orderSummaryTotals(subTotal, tax, discount, orderTotal);
        alert("Product removed from cart successfully");
    }
    if (e.target.closest('.fa-minus')) {
        const id = Number(e.target.parentNode.parentNode.parentNode.parentNode.id.replace('cart-item-', ''));
        if (!state.MakeSale) state.MakeSale = new (0, _makeSaleJsDefault.default)();
        state.MakeSale.readCart();
        const item = state.MakeSale.cart.find((item)=>item.id === parseInt(id));
        const { subTotal, tax, discount, orderTotal } = state.MakeSale.calculateTotals();
        _makeSaleViewJs.orderSummaryTotals(subTotal, tax, discount, orderTotal);
        console.log("Item:", item);
        if (item) {
            if (item.quantity > 1) {
                const newQuantity = item.quantity - 1;
                state.MakeSale.updateCartQuantity(item.id, newQuantity);
                _makeSaleViewJs.updateCartQuantity(item.id, newQuantity);
                const { subTotal, tax, discount, orderTotal } = state.MakeSale.calculateTotals();
                _makeSaleViewJs.orderSummaryTotals(subTotal, tax, discount, orderTotal);
            }
        }
    }
    if (e.target.closest('.fa-plus')) {
        const id = Number(e.target.parentNode.parentNode.parentNode.parentNode.id.replace('cart-item-', ''));
        if (!state.MakeSale) state.MakeSale = new (0, _makeSaleJsDefault.default)();
        state.MakeSale.readCart();
        const item = state.MakeSale.cart.find((item)=>item.id === parseInt(id));
        console.log("Item:", item);
        if (item) {
            const newQuantity = item.quantity + 1;
            state.MakeSale.updateCartQuantity(item.id, newQuantity);
            _makeSaleViewJs.updateCartQuantity(item.id, newQuantity);
        }
    }
});
(0, _baseJs.elements).clearCartBtn.addEventListener("click", ()=>{
    if (!state.MakeSale) state.MakeSale = new (0, _makeSaleJsDefault.default)();
    state.MakeSale.clearCart();
    _makeSaleViewJs.clearCartItems();
    _makeSaleViewJs.updateSummary(0, 0);
    alert("Cart cleared successfully");
});
(0, _baseJs.elements).checkOutBtn.addEventListener("click", ()=>{
    if (!state.MakeSale) state.MakeSale = new (0, _makeSaleJsDefault.default)();
    const totals = state.MakeSale.calculateTotals();
    // Ensure totals exist and the cart isn't empty
    if (!totals || totals.orderTotal === 0) {
        alert("Cart is empty");
        return;
    }
    (0, _baseJs.elements).totalAmountInput.value = totals.orderTotal.toFixed(2);
    _transactionViewJs.paymentModel();
});
(0, _baseJs.elements).paymentCanBtn.addEventListener('click', ()=>{
    _transactionViewJs.paymentModel();
});
(0, _baseJs.elements).paymentBtn.addEventListener('click', ()=>{
    alert('payment approved');
});
//On page load
window.addEventListener('load', (e)=>{
    //Load users
    const user = new (0, _userJsDefault.default)();
    user.readUsers();
    user.users.forEach((user)=>_userViewJs.displayUser(user));
    //load products 
    const product = new (0, _productJsDefault.default)();
    product.readProduct();
    //Display products in products page
    product.products.forEach((product)=>_productView.renderProduct(product, (0, _baseJs.elements).productList, 'productPage'));
    //Display products in sales page
    product.products.forEach((product)=>_productView.renderProduct(product, (0, _baseJs.elements).saletList, 'salesPage'));
    // load cart
    const makeSale = new (0, _makeSaleJsDefault.default)();
    makeSale.readCart();
    makeSale.getCart();
    makeSale.cart.forEach((product)=>_makeSaleViewJs.renderCartItem(product));
    //  load orderSummary
    const { subTotal, tax, discount, orderTotal } = makeSale.calculateTotals();
    _makeSaleViewJs.orderSummaryTotals(subTotal, tax, discount, orderTotal);
//load statistics
});

},{"./view/base.js":"4ZOTV","./view/userView.js":"4aMwY","./Model/User.js":"U3xmt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./Model/Product.js":"2K9iZ","./view/productView":"3wN6N","./view/makeSaleView.js":"eZc3t","./Model/MakeSale.js":"l0sIG","./view/transactionView.js":"aBom8"}],"4ZOTV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "elements", ()=>elements);
parcelHelpers.export(exports, "toggleProfileMenu", ()=>toggleProfileMenu);
parcelHelpers.export(exports, "sidebarLinks", ()=>sidebarLinks);
parcelHelpers.export(exports, "makeSaleCart", ()=>makeSaleCart);
const elements = {
    saleChart: document.getElementById("salesChart"),
    profileBtn: document.getElementById("profile-btn"),
    dropdownMenu: document.getElementById("dropdown-menu"),
    navLinks: document.querySelectorAll(".nav-link"),
    addUserBtn: document.getElementById("userAddBtn"),
    addUserCard: document.getElementById("userCard"),
    userCardCancelBtn: document.getElementById("addUserCardCancelBtn"),
    dashboardPage: document.getElementById("userList-1"),
    userInputName: document.getElementById("userInputName"),
    userInputnum: document.getElementById("userInputnum"),
    userInputPassword: document.getElementById('userInputPassword'),
    userInputEmail: document.getElementById("userInputEmail"),
    userInputPicture: document.getElementById("userInputPicture"),
    newAddBtn: document.getElementById("addUserBtn"),
    userList: document.getElementById("userList"),
    form: document.getElementById("userForm"),
    addProduct: document.getElementById("addProductContainer"),
    productAddBtn: document.getElementById("productAddBtn"),
    editProductBtn: document.getElementById("editProductBtn"),
    productCardCancelBtn: document.getElementById("addProductCardCancelBtn"),
    proInputName: document.querySelector("#proInputName"),
    proInputPrice: document.querySelector("#proInputPrice"),
    proInputPicture: document.querySelector("#proInputPicture"),
    proInputQuantity: document.querySelector("#proInputQuantity"),
    proInputDiscription: document.querySelector("#proInputDiscription"),
    productCategory: document.querySelector("#productCategory"),
    newProductBtn: document.getElementById("addProductBtn"),
    productList: document.querySelector("#ProductList"),
    prductBtnContainer: document.querySelector("#prductBtnContainer"),
    saletList: document.querySelector("#saletList"),
    myCartList: document.getElementById("cartIcon"),
    cartModel: document.querySelector("#cartSection"),
    closeCartModel: document.querySelector("#closeCartModel"),
    clearCartBtn: document.querySelector("#clearCartBtn"),
    subTotal: document.getElementById("subTotal"),
    tax: document.getElementById("tax"),
    discount: document.getElementById("discount"),
    orderTotal: document.getElementById("orderTotal"),
    paymentContainer: document.getElementById('paymentContainer'),
    checkOutBtn: document.getElementById('checkOutBtn'),
    paymentBtn: document.getElementById('paymentBtn'),
    totalAmountInput: document.getElementById('totalAmountInput'),
    paymentCanBtn: document.getElementById('paymentCanBtn')
};
const toggleProfileMenu = ()=>{
    elements.dropdownMenu.classList.toggle("hidden");
    elements.profileBtn.classList.toggle("active");
};
const sidebarLinks = ()=>{
    elements.navLinks.forEach((link)=>{
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (!href) return;
            const targetId = this.getAttribute('href').substring(1);
            // Remove 'active' class from all links
            elements.navLinks.forEach((lnk)=>lnk.classList.remove('bg-black', 'text-green-400'));
            // Add 'active' class to the clicked link
            this.classList.add('bg-black', 'text-green-400');
            // Show corresponding page and hide others
            document.querySelectorAll('.pages').forEach((page)=>{
                if (page.id === targetId) {
                    page.classList.remove('hidden');
                    if (targetId === 'make-sale') {
                        elements.saletList.classList.remove('hidden');
                        elements.cartModel.classList.add('hidden');
                    }
                } else page.classList.add('hidden');
            });
        });
    });
};
const makeSaleCart = ()=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"4aMwY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "showUserCard", ()=>showUserCard);
parcelHelpers.export(exports, "hideUserCard", ()=>hideUserCard);
parcelHelpers.export(exports, "getUserInput", ()=>getUserInput);
parcelHelpers.export(exports, "clearUserInput", ()=>clearUserInput);
parcelHelpers.export(exports, "displayUser", ()=>displayUser);
parcelHelpers.export(exports, "updateUserStatusView", ()=>updateUserStatusView);
var _baseJs = require("./base.js");
const showUserCard = ()=>{
    (0, _baseJs.elements).addUserCard.classList.remove("opacity-0", "scale-95", "pointer-events-none");
};
const hideUserCard = ()=>{
    (0, _baseJs.elements).userCardCancelBtn.addEventListener('click', ()=>{
        (0, _baseJs.elements).addUserCard.classList.add("opacity-0", "scale-95", "pointer-events-none");
    });
};
let profileImage;
const getUserInput = ()=>{
    const name = (0, _baseJs.elements).userInputName.value;
    const phone = (0, _baseJs.elements).userInputnum.value;
    const password = (0, _baseJs.elements).userInputPassword.value;
    const email = (0, _baseJs.elements).userInputEmail.value;
    return {
        name,
        phone,
        password,
        email,
        profileImage
    };
};
(0, _baseJs.elements).userInputPicture.addEventListener('change', (e)=>{
    const file = (0, _baseJs.elements).userInputPicture.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        profileImage = e.target.result;
    };
    reader.readAsDataURL(file);
});
const clearUserInput = ()=>{
    (0, _baseJs.elements).userInputName.value = '';
    (0, _baseJs.elements).userInputnum.value = '';
    (0, _baseJs.elements).userInputPassword = '';
    (0, _baseJs.elements).userInputEmail.value = '';
    (0, _baseJs.elements).userInputPicture.value = '';
};
const displayUser = (user)=>{
    const today = new Date();
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    };
    const formattedDate = today.toLocaleDateString('en-GB', options).replace(/\//g, '-');
    const markup = `
  <tr id="${user.id}" class="hover:bg-gray-50">
                  <!-- User -->
                  <td class="py-4 px-4 flex items-center gap-3">
                    <img src="${user.profileImage}" alt="avatar" class="w-10 h-10 rounded-full">
                    <span class="font-medium">${user.name}</span>
                  </td>
                  <!-- Email -->
                  <td class="py-4 px-6">${user.email}</td>
                  <!-- Phone -->
                  <td class="py-4 px-6">${user.phone}</td>
                  <!-- Date -->
                  <td class="py-4 px-6">${formattedDate}</td>
                  <!-- Status -->
                  <td class="py-4 px-6">
                    <span class="text-blue-600 font-medium status-${user.id}">${user.status}</span>
                  </td>
                  <!-- Actions -->
                  <td class="py-4 px-6 flex justify-center gap-3">
                    <button class="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200">
                      <i class="fas fa-user-edit"></i>
                    </button>
                    <button class="p-2 bg-gray-100 text-gray-500 rounded-lg hover:bg-gray-200">
                      <i class="fas fa-user"></i>
                    </button>
                    <button class="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200">
                      <i class="fas fa-user-times"></i>
                    </button>
                  </td>
                </tr>`;
    document.querySelectorAll('.eachUser').forEach((userRow)=>{
        userRow.insertAdjacentHTML('beforeend', markup);
    });
};
const updateUserStatusView = (user)=>{
    const className = `status-${user.id}`;
    const fields = document.querySelectorAll(`.${className}`);
    document.querySelectorAll(`.${className}`).forEach((field)=>{
        field.textContent = user.status;
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./base.js":"4ZOTV"}],"U3xmt":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class User {
    constructor(){
        this.users = [];
    }
    addUser(name, phone, password, email, profileImage) {
        this.readUsers();
        const id = new Date().getTime();
        const user = {
            name,
            phone,
            password,
            email,
            profileImage,
            status: 'active',
            id
        };
        this.users.push(user);
        this.persistUser();
        return user;
    }
    deleteUser(id) {
        this.readUsers();
        const index = parseInt(this.users.findIndex((user)=>user.id === id));
        if (index !== -1) {
            this.users.splice(index, 1);
            this.persistUser();
        }
    }
    updateUserStatus(id) {
        this.readUsers();
        const user = this.users.find((user)=>user.id === id);
        if (user) {
            user.status === 'active' ? user.status = 'deactivated' : user.status = 'active';
            this.persistUser();
        }
        return user;
    }
    persistUser() {
        localStorage.setItem("users", JSON.stringify(this.users));
    }
    readUsers() {
        const users = JSON.parse(localStorage.getItem('users'));
        if (users) this.users = users;
    }
}
exports.default = User;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2K9iZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Product {
    constructor(){
        this.products = [];
    }
    addProduct(name, price, discription, quantity, category, productImage) {
        this.readProduct();
        const id = Date.now();
        const newProduct = {
            name,
            price,
            discription,
            quantity,
            category,
            productImage,
            id
        };
        this.products.push(newProduct);
        this.persistProduct();
        return newProduct;
    }
    getProducts() {
        this.readProduct();
        return this.products;
    }
    getProduct(id) {
        this.readProduct();
        const product = this.products.find((product)=>product.id === parseInt(id));
        return product;
    }
    deleteProduct(id) {
        this.readProduct();
        this.products = this.products.filter((product)=>product.id !== parseInt(id));
        this.persistProduct();
    }
    editProduct(id, updatedData) {
        this.readProduct;
        const productIndex = this.products.findIndex((product)=>product.id === parseInt(id));
        if (productIndex !== -1) {
            this.products[productIndex] = {
                ...this.products[productIndex],
                ...updatedData
            };
            this.persistProduct();
        }
    }
    persistProduct() {
        localStorage.setItem("products", JSON.stringify(this.products));
    }
    readProduct() {
        const products = JSON.parse(localStorage.getItem("products"));
        if (products) this.products = products;
    }
}
exports.default = Product;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3wN6N":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "newProductCard", ()=>newProductCard);
parcelHelpers.export(exports, "hideProductCard", ()=>hideProductCard);
parcelHelpers.export(exports, "getProductInput", ()=>getProductInput);
parcelHelpers.export(exports, "clearProductInput", ()=>clearProductInput);
parcelHelpers.export(exports, "renderProducts", ()=>renderProducts);
parcelHelpers.export(exports, "renderProduct", ()=>renderProduct);
parcelHelpers.export(exports, "deleteProduct", ()=>deleteProduct);
parcelHelpers.export(exports, "editProduct", ()=>editProduct);
var _baseJs = require("../view/base.js");
const newProductCard = ()=>{
    (0, _baseJs.elements).addProduct.classList.remove("hidden");
};
const hideProductCard = ()=>{
    (0, _baseJs.elements).addProduct.classList.add("hidden");
};
let productImage;
const getProductInput = ()=>{
    const name = (0, _baseJs.elements).proInputName.value;
    const price = (0, _baseJs.elements).proInputPrice.value;
    const discription = (0, _baseJs.elements).proInputDiscription.value;
    const category = (0, _baseJs.elements).productCategory.value;
    const quantity = (0, _baseJs.elements).proInputQuantity.value;
    return {
        name,
        price,
        discription,
        category,
        quantity,
        productImage
    };
};
(0, _baseJs.elements).proInputPicture.addEventListener("change", (e)=>{
    const file = (0, _baseJs.elements).proInputPicture.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        productImage = e.target.result;
    };
    reader.readAsDataURL(file);
});
const clearProductInput = ()=>{
    (0, _baseJs.elements).proInputName.value = "";
    (0, _baseJs.elements).proInputPrice.value = "";
    (0, _baseJs.elements).proInputDiscription.value = "";
    (0, _baseJs.elements).proInputQuantity.value = "";
    (0, _baseJs.elements).productCategory.value = "";
    (0, _baseJs.elements).proInputPicture.value = "";
};
const renderProducts = (products)=>{
    (0, _baseJs.elements).productList.innerHTML = "";
    products.forEach((product)=>{
        const markup = `
      <div class="bg-white rounded-2xl shadow p-4 flex flex-col" id='${product.id}'>
                <img src="${product.productImage}" alt="${product.name}"
                  class="w-full h-40 object-cover rounded-lg mb-4">
                <h3 class="text-lg font-semibold">${product.name}</h3>
                <p class="text-sm text-gray-500">${product.discription}</p>

                <div class="flex justify-between items-center mt-4">
                  <span class="text-xl font-bold text-gray-900">${parseInt(product.price).toLocaleString()}</span>
                  <span class="text-md font-medium text-gray-600">Qty: ${product.quantity}</span>
                  <div class="flex gap-2">
                    <button class="product-edit p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200">
                      <i class="fas fa-pen "></i>
                    </button>
                    <button class="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200">
                      <i class="fas fa-trash product-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
      `;
        (0, _baseJs.elements).productList.insertAdjacentHTML("beforeend", markup);
    });
};
const renderProduct = (product, container, pageType = "productPage")=>{
    const productControl = `
   <button id = "productEdit" class="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200">
    <i class="fas fa-pen product-edit"></i>
  </button>
  <button class="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200">
    <i class="fas fa-trash product-trash"></i>
  </button>`;
    const makeSaleControl = `
    <button class="p-2 bg-gray-100 text-blue-600 rounded-full text-[24px] hover:bg-red-200">
       <i class="fas fa-plus add-to-cart"></i>
    </button>
  
  `;
    const markup = `
   <div class="bg-white rounded-2xl shadow p-4 flex flex-col" id='${product.id}'>
            <img src="${product.productImage}" alt="${product.name}"
              class="w-full h-40 object-cover rounded-lg mb-4">
            <h3 class="text-lg font-semibold">${product.name}</h3>
            <p class="text-sm text-gray-500">${product.discription}</p>

            <div class="flex justify-between items-center mt-4">
              <span class="text-xl font-bold text-gray-900">${parseInt(product.price).toLocaleString()}</span>
              <span class="quantity text-md font-medium text-gray-600">Qty: ${product.quantity}</span>
              <div class="flex gap-2">
              ${pageType === "productPage" ? productControl : makeSaleControl}
               
              </div>
            </div>
          </div>
  `;
    container.insertAdjacentHTML("beforeend", markup);
};
const deleteProduct = (id)=>{
    const el = document.getElementById(`${id}`);
    if (el) el.parentNode.removeChild(el);
};
const editProduct = (product)=>{
    (0, _baseJs.elements).proInputName.value = product.name;
    (0, _baseJs.elements).proInputPrice.value = product.price;
    (0, _baseJs.elements).proInputDiscription.value = product.discription;
    (0, _baseJs.elements).productCategory.value = product.category;
    (0, _baseJs.elements).proInputQuantity.value = product.quantity;
    (0, _baseJs.elements).newProductBtn.classList.add("hidden");
    (0, _baseJs.elements).editProductBtn.classList.remove("hidden");
    productImage = product.productImage;
};

},{"../view/base.js":"4ZOTV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eZc3t":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initCartPage", ()=>initCartPage);
parcelHelpers.export(exports, "renderCartItem", ()=>renderCartItem);
parcelHelpers.export(exports, "deleteCartItem", ()=>deleteCartItem);
parcelHelpers.export(exports, "clearCartItems", ()=>clearCartItems);
parcelHelpers.export(exports, "updateCartQuantity", ()=>updateCartQuantity);
parcelHelpers.export(exports, "orderSummaryTotals", ()=>orderSummaryTotals);
parcelHelpers.export(exports, "clearOrderSummary", ()=>clearOrderSummary);
var _baseJs = require("./base.js");
const initCartPage = ()=>{
    (0, _baseJs.elements).myCartList.addEventListener("click", ()=>{
        document.querySelectorAll(".pages").forEach((page)=>{
            if (page.id === "make-sale") page.classList.remove("hidden");
            else page.classList.add("hidden");
        });
        // Update active state in sidebar
        (0, _baseJs.elements).navLinks.forEach((link)=>{
            link.classList.remove("bg-black", "text-green-400"); // remove active from all
            if (link.getAttribute("href") === "#make-sale") link.classList.add("bg-black", "text-green-400"); // add active to Make Sale
        });
        (0, _baseJs.elements).saletList.classList.add("hidden");
        (0, _baseJs.elements).cartModel.classList.remove("hidden");
    });
};
const renderCartItem = (item)=>{
    const cartItemId = `cart-item-${item.id}`;
    const cartItemMarkup = `
              <div class="cart-item flex items-center bg-white shadow rounded-xl p-4 mb-4 overflow-hidden" id='${cartItemId}'>
                  <!-- Image -->
                  <div class="w-32 h-28 flex-shrink-0">
                    <img src="${item.productImage}" alt="${item.name}" class="object-cover w-full h-full rounded-lg">
                  </div>

                  <!-- Item Info -->
                  <div class="ml-4 flex-1">
                    <h3 class="font-semibold text-lg">${item.name}</h3>
                    <p id='itemQuantity-${item.id}' class="quantity text-gray-600 font-bold text-[19px] mt-1">Quantity: ${item.quantity || 1} </p>

                    <p class="text-lg font-semibold text-gray-900">\u{20A6}${parseInt(item.price).toLocaleString()}</p>
                  </div>

                  <!-- Price + Delete -->
                  <div class="flex flex-col items-end">
                    <button class="mt-2 text-red-500 hover:text-red-700 text-xl">
                      <i class="fas fa-trash cart-trash"></i>
                    </button>

                  <div class=" bg-gray-400 rounded-lg p-1">
                  <!-- Decrease -->
                  <button class="text-red-500 hover:text-red-700 text-xl">
                    <i class="fas fa-minus"></i>
                  </button>

                  <!-- Increase -->
                  <button class="text-blue-600 hover:text-green-700 text-xl">
                    <i class="fas fa-plus"></i>
                  </button>
                </div>

                  </div>
                </div>
          `;
    document.getElementById("cartList").insertAdjacentHTML("beforeend", cartItemMarkup);
};
const deleteCartItem = (id)=>{
    const cartItemId = `cart-item-${id}`;
    const el = document.getElementById(cartItemId);
    if (el) {
        const parentElement = el.parentElement;
        console.log('parentElementlemetn', parentElement);
        /*
     * ISSUE & SOLUTION:
     * The problem was that parentElement was returning the productList div instead of cartList div.
     * This happened because both product items and cart items were using the same ID (item.id).
     * When we tried to delete a cart item, it was finding the product item with the same ID in productList.
     * 
     * SOLUTION:
     * Modified renderCartItem to use unique IDs by prefixing with 'cart-item-'
     * This ensures cart items and product items don't have ID conflicts.
     */ el.parentElement.removeChild(el);
    }
};
const clearCartItems = ()=>{
    document.getElementById("cartList").innerHTML = "";
};
const updateCartQuantity = (id, newQuantity)=>{
    const cartItem = document.getElementById(`cart-item-${id}`);
    console.log(cartItem);
    if (!cartItem) {
        console.error(`Cart item with id ${id} not found in DOM`);
        return;
    }
    const quantityElement = document.getElementById(`itemQuantity-${id}`);
    console.log(quantityElement);
    if (!quantityElement) {
        console.error(`No .quantity element found inside cart item ${id}`);
        return;
    }
    quantityElement.textContent = `Quantity: ${newQuantity}`;
};
const orderSummaryTotals = (subTotal, tax, discount, orderTotal)=>{
    (0, _baseJs.elements).subTotal.textContent = `\u{20A6}${parseInt(subTotal).toLocaleString()}`;
    (0, _baseJs.elements).tax.textContent = `\u{20A6}${parseInt(tax).toLocaleString()}`;
    (0, _baseJs.elements).discount.textContent = `\u{20A6}${parseInt(discount).toLocaleString()}`;
    (0, _baseJs.elements).orderTotal.textContent = `\u{20A6}${parseInt(orderTotal).toLocaleString()}`;
};
const clearOrderSummary = ()=>{
    (0, _baseJs.elements).subTotal.textContent = `\u{20A6}0`;
    (0, _baseJs.elements).tax.textContent = `\u{20A6}0`;
    (0, _baseJs.elements).discount.textContent = `\u{20A6}0`;
    (0, _baseJs.elements).orderTotal.textContent = `\u{20A6}0`;
};

},{"./base.js":"4ZOTV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l0sIG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _makeSaleViewJs = require("../view/makeSaleView.js");
class MakeSale {
    constructor(){
        this.cart = [];
    }
    addToCart(name, price, quantity, productImage, productId) {
        const id = Date.now(); // Unique ID for the cart item
        this.readCart();
        const existingItem = this.cart.find((i)=>i.productId === productId);
        if (existingItem) existingItem.quantity += quantity;
        else {
            const item = {
                name,
                price,
                quantity,
                productImage,
                id,
                productId
            };
            this.cart.push(item);
        }
        this.persistCart();
        this.updateSummary();
        return this.cart.find((i)=>i.productId === productId);
    }
    updateSummary() {
        const { subTotal, tax, discount, orderTotal } = this.calculateTotals();
        _makeSaleViewJs.orderSummaryTotals(subTotal, tax, discount, orderTotal);
    }
    getCart() {
        return this.cart;
    }
    clearCart() {
        this.readCart();
        this.cart = [];
        this.persistCart();
    }
    updateCartQuantity(id, newQuantity) {
        this.readCart();
        const item = this.cart.find((item)=>item.id === id);
        if (item) {
            item.quantity = newQuantity;
            this.persistCart();
        }
        _makeSaleViewJs.updateCartQuantity(id, newQuantity);
        this.updateSummary();
    }
    calculateTotals() {
        this.readCart();
        const subTotal = this.cart.reduce((sum, item)=>sum + item.price * item.quantity, 0);
        const tax = subTotal * 0.07;
        const discount = subTotal * 0.05;
        const orderTotal = subTotal + tax - discount;
        return {
            subTotal,
            tax,
            discount,
            orderTotal
        };
    }
    deleteCart(id) {
        this.readCart();
        const index = this.cart.findIndex((item)=>item.id === id);
        if (index !== -1) {
            this.cart.splice(index, 1);
            this.persistCart();
        }
    }
    persistCart() {
        localStorage.setItem("cart", JSON.stringify(this.cart));
    }
    readCart() {
        const cart = JSON.parse(localStorage.getItem("cart"));
        if (cart) this.cart = cart;
    }
}
exports.default = MakeSale;

},{"../view/makeSaleView.js":"eZc3t","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aBom8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "paymentModel", ()=>paymentModel);
parcelHelpers.export(exports, "rendertransaction", ()=>rendertransaction);
var _baseJs = require("./base.js");
const paymentModel = ()=>{
    (0, _baseJs.elements).paymentContainer.classList.toggle('hidden');
};
const rendertransaction = (tr)=>{
    const transactionMakeUp = `
  
  
  `;
};

},{"./base.js":"4ZOTV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["4CwNn","ebWYT"], "ebWYT", "parcelRequire94c2", {})

//# sourceMappingURL=index.js.map
