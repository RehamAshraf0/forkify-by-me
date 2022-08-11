// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
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

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
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
        this
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
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

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

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fA0o9":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
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
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
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
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
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
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
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
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _recipeViewJs = require("./views/recipeView.js");
var _recipeViewJsDefault = parcelHelpers.interopDefault(_recipeViewJs);
var _searchViewJs = require("./views/searchView.js");
var _searchViewJsDefault = parcelHelpers.interopDefault(_searchViewJs);
var _resultsViewJs = require("./views/resultsView.js");
var _resultsViewJsDefault = parcelHelpers.interopDefault(_resultsViewJs);
var _modelJs = require("./model.js");
var _paginationViewJs = require("./views/paginationView.js");
var _paginationViewJsDefault = parcelHelpers.interopDefault(_paginationViewJs);
var _bookmarksViewJs = require("./views/bookmarksView.js");
var _bookmarksViewJsDefault = parcelHelpers.interopDefault(_bookmarksViewJs);
var _addRecipeViewJs = require("./views/addRecipeView.js");
var _addRecipeViewJsDefault = parcelHelpers.interopDefault(_addRecipeViewJs);
var _configJs = require("./config.js");
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
// https://forkify-api.herokuapp.com/v2
///////////////////////////////////////
const handleRecipe = async function() {
    try {
        const id = window.location.hash.slice(1);
        if (!id) return;
        (0, _resultsViewJsDefault.default).update(_modelJs.getSearchResultsForPage());
        (0, _recipeViewJsDefault.default).renderSpinner();
        await _modelJs.loadRecipe(id);
        console.log(_modelJs.state.recipe);
        (0, _recipeViewJsDefault.default).render(_modelJs.state.recipe);
    } catch (err) {
        console.log(err);
    }
};
const handleSearch = async function() {
    try {
        // render spinner
        (0, _resultsViewJsDefault.default).renderSpinner();
        // get the search query from the searchView object
        const query = (0, _searchViewJsDefault.default).getQuery();
        if (!query) return (0, _resultsViewJsDefault.default).renderError(`Please type a search query!`);
        // load the corresponding search results and inject it into the state object in the model
        await _modelJs.loadSearchResults(query);
        // render the search results
        (0, _resultsViewJsDefault.default).render(_modelJs.getSearchResultsForPage());
        // render pagination buttons
        (0, _paginationViewJsDefault.default).render(_modelJs.state.search);
    } catch (err) {
        console.log(err);
    }
};
const handlePagination = function(goToPage) {
    // Render the corresponding search results to the given page
    (0, _resultsViewJsDefault.default).render(_modelJs.getSearchResultsForPage(goToPage));
    // Render Pagination Buttons
    (0, _paginationViewJsDefault.default).render(_modelJs.state.search);
};
const handleServings = function(newServings) {
    _modelJs.updateServings(newServings);
    // recipeView.render(model.state.recipe);
    (0, _recipeViewJsDefault.default).update(_modelJs.state.recipe);
};
const handleBookmarks = function() {
    if (!_modelJs.state.recipe.bookmarked) _modelJs.makeCurrentRecipeBookmarked();
    else _modelJs.unbookmarkCurrentRecipe();
    (0, _recipeViewJsDefault.default).update(_modelJs.state.recipe);
    (0, _bookmarksViewJsDefault.default).render(_modelJs.state.bookmarks);
};
const handleBookmarksFromLocalStorage = function() {
    (0, _bookmarksViewJsDefault.default).render(_modelJs.state.bookmarks);
};
const handleBookmarksList = function() {
    (0, _bookmarksViewJsDefault.default).update(_modelJs.state.bookmarks);
};
const handleUploadingRecipe = async function(formData) {
    (0, _addRecipeViewJsDefault.default).renderSpinner();
    await _modelJs.uploadRecipe(formData);
    (0, _addRecipeViewJsDefault.default).renderMessage();
    setTimeout(function() {
        (0, _addRecipeViewJsDefault.default).toggleForm();
    }, (0, _configJs.CLOSE_MODAL_SEC) * 1000);
    (0, _recipeViewJsDefault.default).render(_modelJs.state.recipe);
};
const init = function() {
    (0, _bookmarksViewJsDefault.default).addHandlerAddBookmarksOnLoad(handleBookmarksFromLocalStorage);
    (0, _bookmarksViewJsDefault.default).addHandlerUpdateBookmarksView(handleBookmarksList);
    (0, _recipeViewJsDefault.default).addHandlerRender(handleRecipe);
    (0, _recipeViewJsDefault.default).addHandlerServings(handleServings);
    (0, _recipeViewJsDefault.default).addHandlerBookmark(handleBookmarks);
    (0, _searchViewJsDefault.default).addHandlerSearch(handleSearch);
    (0, _paginationViewJsDefault.default).addHandlerPagination(handlePagination);
    (0, _addRecipeViewJsDefault.default).addHandlerUploadRecipe(handleUploadingRecipe);
};
init();

},{"./views/recipeView.js":"l60JC","./views/searchView.js":"9OQAM","./views/resultsView.js":"cSbZE","./model.js":"Y4A21","./views/paginationView.js":"6z7bi","./views/bookmarksView.js":"4Lqzq","./views/addRecipeView.js":"i6DNj","./config.js":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l60JC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class RecipeView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".recipe");
    addHandlerRender(handleRecipes) {
        [
            "hashchange",
            "load"
        ].forEach((ev)=>window.addEventListener(ev, handleRecipes));
    }
    addHandlerServings(handleServings) {
        this._parentElement.addEventListener("click", function(e) {
            const btn = e.target.closest(".btn--update-servings");
            if (!btn) return;
            const newServings = +btn.dataset.updateTo;
            if (newServings < 1) return;
            handleServings(newServings);
        });
    }
    addHandlerBookmark(handleBookmarks) {
        this._parentElement.addEventListener("click", function(e) {
            const btn = e.target.closest(".btn--bookmark");
            if (!btn) return;
            handleBookmarks();
        });
    }
    _generateMarkup() {
        console.log(this._data);
        const markup = `
    <figure class="recipe__fig">
    <img src="${this._data.imageURL}" alt="${this._data.title}" class="recipe__img" />
    <h1 class="recipe__title">
      <span>${this._data.title}</span>
    </h1>
  </figure>

  <div class="recipe__details">
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${(0, _iconsSvgDefault.default)}#icon-clock"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
      <span class="recipe__info-text">minutes</span>
    </div>
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${(0, _iconsSvgDefault.default)}#icon-users"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
      <span class="recipe__info-text">servings</span>

      <div class="recipe__info-buttons">
        <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings - 1}">
          <svg>
            <use href="${(0, _iconsSvgDefault.default)}#icon-minus-circle"></use>
          </svg>
        </button>
        <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings + 1}">
          <svg>
            <use href="${(0, _iconsSvgDefault.default)}#icon-plus-circle"></use>
          </svg>
        </button>
      </div>
    </div>
    <div class="recipe__user-generated">
   ${this._data.key ? ` <svg>
   <use href="${0, _iconsSvgDefault.default}#icon-user"></use>
 </svg>` : ""}
    </div>
    <button class="btn--round btn--bookmark">
      <svg class="">
        <use href="${(0, _iconsSvgDefault.default)}#icon-bookmark${this._data.bookmarked ? "-fill" : ""}"></use>
      </svg>
    </button>
  </div>

  <div class="recipe__ingredients">
    <h2 class="heading--2">Recipe ingredients</h2>
    <ul class="recipe__ingredient-list">
    ${this._data.ingredients.map((ing)=>{
            return `
      <li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${0, _iconsSvgDefault.default}#icon-check"></use>
        </svg>
        ${ing.quantity ? ` <div class="recipe__quantity">${ing.quantity}</div>` : ""}
        <div class="recipe__description">
          <span class="recipe__unit">${ing.unit ? ing.unit : ""}</span>
          ${ing.description}
        </div>
    </li>
      `;
        }).join("")}
    </ul>
  </div>

  <div class="recipe__directions">
    <h2 class="heading--2">How to cook it</h2>
    <p class="recipe__directions-text">
      This recipe was carefully designed and tested by
      <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
      directions at their website.
    </p>
    <a
      class="btn--small recipe__btn"
      href="${this._data.sourceURL}"
      target="_blank"
    >
      <span>Directions</span>
      <svg class="search__icon">
        <use href="${(0, _iconsSvgDefault.default)}#icon-arrow-right"></use>
      </svg>
    </a>
  </div>
`;
        return markup;
    }
}
exports.default = new RecipeView();

},{"./View.js":"5cUXS","url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5cUXS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class View {
    _clear() {
        this._parentElement.innerHTML = "";
    }
    _insertMarkup(markup) {
        this._parentElement.insertAdjacentHTML("beforeend", markup);
    }
    renderSpinner() {
        this._clear();
        const markup = `
            <div class="spinner">
              <svg>
                <use href="${(0, _iconsSvgDefault.default)}#icon-loader"></use>
              </svg>
            </div>
      `;
        this._insertMarkup(markup);
    }
    renderMessage(message = this._message) {
        this._clear();
        const markup = `
    <div class="message">
    <div>
      <svg>
        <use href="${(0, _iconsSvgDefault.default)}#icon-smile"></use>
      </svg>
    </div>
    <p>${message}</p>
    `;
        this._insertMarkup(markup);
    }
    renderError(message) {
        this._clear();
        const markup = `
    <div class="error">
            <div>
              <svg>
                <use href="${(0, _iconsSvgDefault.default)}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>
    `;
        this._insertMarkup(markup);
    }
    render(data) {
        if (Array.isArray(data) && data.length === 0) return this.renderError(this._errorMessage);
        this._data = data;
        this._clear();
        const markup = this._generateMarkup();
        this._insertMarkup(markup);
    }
    update(data) {
        this._data = data;
        const markupString = this._generateMarkup();
        const newMarkup = document.createRange().createContextualFragment(markupString);
        const newDOMEls = Array.from(newMarkup.querySelectorAll("*"));
        const curDOMEls = Array.from(this._parentElement.querySelectorAll("*"));
        newDOMEls.forEach((newEl, i)=>{
            const curEl = curDOMEls[i];
            if (!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim()) curEl.textContent = newEl.textContent;
            if (!newEl.isEqualNode(curEl)) Array.from(newEl.attributes).forEach((att)=>curEl.setAttribute(att.name, att.value));
        });
    }
}
exports.default = View;

},{"url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"loVOp":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("hWUTQ") + "icons.dfd7a6db.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
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

},{}],"9OQAM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class SearchView {
    _parentElement = document.querySelector(".search");
    _inputField = this._parentElement.querySelector(".search__field");
    _clearInput() {
        this._inputField.value = "";
    }
    getQuery() {
        const query = this._inputField.value;
        this._clearInput();
        return query;
    }
    addHandlerSearch(handler) {
        this._parentElement.addEventListener("submit", function(e) {
            e.preventDefault();
            handler();
        });
    }
}
exports.default = new SearchView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cSbZE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class ResultsView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".results");
    _errorMessage = `Sorry, there's no results for this query. Try another one!`;
    _generateMarkup() {
        const id = window.location.hash.slice(1);
        console.log(this._data);
        return this._data.map((res)=>`
            <li class="preview">
              <a class="preview__link ${res.id == id ? "preview__link--active" : ""}" href="#${res.id}">
                <figure class="preview__fig">
                  <img src="${res.imageURL}" alt="${res.title}" />
                </figure>
                <div class="preview__data">
                  <h4 class="preview__title">${res.title}</h4>
                  <p class="preview__publisher">${res.publisher}</p>
                  <div class="preview__user-generated">
                  ${res.key ? ` <svg>
                  <use href="${0, _iconsSvgDefault.default}#icon-user"></use>
                </svg>` : ""}
                  </div>
                </div>
              </a>
            </li>
            `).join("");
    }
}
exports.default = new ResultsView();

},{"./View.js":"5cUXS","url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "loadRecipe", ()=>loadRecipe);
parcelHelpers.export(exports, "loadSearchResults", ()=>loadSearchResults);
parcelHelpers.export(exports, "getSearchResultsForPage", ()=>getSearchResultsForPage);
parcelHelpers.export(exports, "updateServings", ()=>updateServings);
parcelHelpers.export(exports, "makeCurrentRecipeBookmarked", ()=>makeCurrentRecipeBookmarked);
parcelHelpers.export(exports, "unbookmarkCurrentRecipe", ()=>unbookmarkCurrentRecipe);
parcelHelpers.export(exports, "uploadRecipe", ()=>uploadRecipe);
var _config = require("./config");
var _helpers = require("./helpers");
const state = {
    recipe: {},
    search: {
        numOfResults: 0,
        results: [],
        resultsPerPage: (0, _config.RES_PER_PAGE),
        page: 1,
        numOfPages: 1
    },
    bookmarks: []
};
const formatRecipeObject = function(recipeObj) {
    recipe = {
        cookingTime: recipeObj.cooking_time,
        id: recipeObj.id,
        imageURL: recipeObj.image_url,
        ingredients: recipeObj.ingredients,
        publisher: recipeObj.publisher,
        servings: recipeObj.servings,
        sourceURL: recipeObj.source_url,
        title: recipeObj.title,
        ...recipeObj.key && {
            key: recipeObj.key
        }
    };
    return recipe;
};
const loadRecipe = async function(id) {
    const data = await (0, _helpers.AJAX)(`${(0, _config.API_URL)}/${id}?key=${(0, _config.KEY)}`);
    const { recipe  } = data.data;
    state.recipe = formatRecipeObject(recipe);
    console.log(state.bookmarks);
    state.recipe.bookmarked = state.bookmarks.some((bookmark)=>bookmark.id === state.recipe.id);
};
const loadSearchResults = async function(query) {
    const data = await (0, _helpers.AJAX)(`${(0, _config.API_URL)}?search=${query}&key=${(0, _config.KEY)}`);
    console.log();
    state.search.results = data.data.recipes.map((rec)=>{
        return {
            id: rec.id,
            imageURL: rec.image_url,
            publisher: rec.publisher,
            title: rec.title,
            ...rec.key && {
                key: rec.key
            }
        };
    });
    state.search.numOfResults = data.results;
    state.search.numOfPages = Math.ceil(state.search.numOfResults / state.search.resultsPerPage);
    state.search.page = 1;
};
const getSearchResultsForPage = function(page = state.search.page) {
    state.search.page = page;
    const startIndex = (page - 1) * state.search.resultsPerPage;
    const endIndex = page * state.search.resultsPerPage;
    return state.search.results.slice(startIndex, endIndex);
};
const updateServings = function(newServings) {
    state.recipe.ingredients.forEach((ing)=>ing.quantity = ing.quantity * (newServings / state.recipe.servings));
    state.recipe.servings = newServings;
};
const makeCurrentRecipeBookmarked = function() {
    state.bookmarks.push(state.recipe);
    state.recipe.bookmarked = true;
    updateLocalStorage();
};
const unbookmarkCurrentRecipe = function() {
    const index = state.bookmarks.findIndex((bookmark)=>bookmark.id === state.recipe.id);
    state.bookmarks.splice(index, 1);
    state.recipe.bookmarked = false;
    updateLocalStorage();
};
const updateLocalStorage = function() {
    localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
};
const getLocalStorage = function() {
    const storage = JSON.parse(localStorage.getItem("bookmarks"));
    if (storage) state.bookmarks = storage;
};
getLocalStorage();
const uploadRecipe = async function(formData) {
    console.log(state.recipe);
    const recievedRecipeObject = Object.fromEntries(formData);
    console.log(recievedRecipeObject);
    // extracting & formatting ingredients
    const ingredients = formData.filter((el)=>el[0].startsWith("ingredient-") && el[1]).map((el)=>{
        const [quantity, unit, description] = el[1].split(",");
        return {
            quantity: quantity ? +quantity : null,
            unit,
            description
        };
    });
    // Formatting recipe object that will be send to the API
    const recipe = {
        title: recievedRecipeObject.title,
        image_url: recievedRecipeObject.image,
        publisher: recievedRecipeObject.publisher,
        servings: recievedRecipeObject.servings,
        source_url: recievedRecipeObject.sourceUrl,
        cooking_time: recievedRecipeObject.cookingTime,
        ingredients
    };
    // upload the recipe to the API
    const data = await (0, _helpers.AJAX)(`${(0, _config.API_URL)}?key=${(0, _config.KEY)}`, recipe);
    console.log(`💥💥`, data);
    // make the current recipe the uploaded recipe
    state.recipe = formatRecipeObject(data);
    console.log(state.recipe);
};

},{"./config":"k5Hzs","./helpers":"hGI1E","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5Hzs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_URL", ()=>API_URL);
parcelHelpers.export(exports, "RES_PER_PAGE", ()=>RES_PER_PAGE);
parcelHelpers.export(exports, "KEY", ()=>KEY);
parcelHelpers.export(exports, "CLOSE_MODAL_SEC", ()=>CLOSE_MODAL_SEC);
const API_URL = `https://forkify-api.herokuapp.com/api/v2/recipes`;
const RES_PER_PAGE = 10;
const KEY = `7989608b-e4ef-401f-add1-0580e4ddfe51`;
const CLOSE_MODAL_SEC = 2.5;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hGI1E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getJSON", ()=>getJSON);
parcelHelpers.export(exports, "AJAX", ()=>AJAX);
const getJSON = async function(url) {
    const res = await fetch(url);
    const data = res.json();
    return data;
};
const AJAX = async function(url, uploadData) {
    const fetchPromise = uploadData ? fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(uploadData)
    }) : fetch(url);
    const response = await fetchPromise;
    const data = await response.json();
    return data;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6z7bi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class PaginationView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".pagination");
    _generateMarkup() {
        const curPage = this._data.page;
        const numPages = this._data.numOfPages;
        // if some middle page and there're other pages before and after
        if (curPage > 1 && curPage < numPages) return `
      <button class="btn--inline pagination__btn--prev" data-goto="${curPage - 1}">
      <svg class="search__icon">
        <use href="${0, _iconsSvgDefault.default}#icon-arrow-left"></use>
      </svg>
      <span>Page ${curPage - 1}</span>
    </button>
     <button class="btn--inline pagination__btn--next" data-goto="${curPage + 1}">
      <span>Page ${curPage + 1}</span>
      <svg class="search__icon">
        <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
      </svg>
    </button>`;
        // if the last page and there're previous pages
        if (curPage === numPages && numPages > 1) return `
      <button class="btn--inline pagination__btn--prev" data-goto="${curPage - 1}">
      <svg class="search__icon">
        <use href="${0, _iconsSvgDefault.default}#icon-arrow-left"></use>
      </svg>
      <span>Page ${curPage - 1}</span>
    </button>`;
        // if page 1 and there's more pages
        if (curPage === 1 && numPages > 1) return `
    <button class="btn--inline pagination__btn--next" data-goto="${curPage + 1}">
    <span>Page ${curPage + 1}</span>
      <svg class="search__icon">
      <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
      </svg>
      </button>`;
        // if page 1 and there's no other pages
        return "";
    }
    addHandlerPagination(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const btn = e.target.closest(".btn--inline");
            if (!btn) return;
            const goToPage = +btn.dataset.goto;
            handler(goToPage);
        });
    }
}
exports.default = new PaginationView();

},{"./View.js":"5cUXS","url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Lqzq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class BookmarksView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".bookmarks__list");
    _errorMessage = `  No bookmarks yet. Find a nice recipe and bookmark it :)`;
    addHandlerUpdateBookmarksView(handler) {
        window.addEventListener("hashchange", handler);
    }
    addHandlerAddBookmarksOnLoad(handler) {
        window.addEventListener("load", handler);
    }
    _generateMarkup() {
        const id = window.location.hash.slice(1);
        const markup = this._data.map((bookmark)=>{
            return `
                    <li class="preview">
                        <a class="preview__link ${bookmark.id === id ? "preview__link--active" : ""}" href="#${bookmark.id}">
                          <figure class="preview__fig">
                            <img src="${bookmark.imageURL}" alt="${bookmark.title}" />
                          </figure>
                          <div class="preview__data">
                            <h4 class="preview__title">
                              ${bookmark.title} ...
                            </h4>
                            <p class="preview__publisher">${bookmark.publisher}</p>
                            <div class="preview__user-generated">
                            ${bookmark.key ? ` <svg>
                            <use href="${0, _iconsSvgDefault.default}#icon-user"></use>
                          </svg>` : ""}
                            </div>
                          </div>
                        </a>
                    </li>
        `;
        }).join("");
        return markup;
    }
}
exports.default = new BookmarksView();

},{"./View.js":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","url:../../img/icons.svg":"loVOp"}],"i6DNj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class AddRecipeView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".upload");
    _message = `The recipe has been successfully uploaded! :)`;
    _window = document.querySelector(".add-recipe-window");
    _overlay = document.querySelector(".overlay");
    _openBtn = document.querySelector(".nav__btn--add-recipe");
    _closeBtn = document.querySelector(".btn--close-modal");
    constructor(){
        super();
        this._addHandlerShowForm(this.toggleForm.bind(this));
        this.addHandlerHideForm(this.toggleForm.bind(this));
    }
    toggleForm() {
        console.log(this._window);
        this._window.classList.toggle("hidden");
        this._overlay.classList.toggle("hidden");
    }
    _addHandlerShowForm(handler) {
        this._openBtn.addEventListener("click", handler);
    }
    addHandlerHideForm(handler = this.toggleForm.bind(this)) {
        this._closeBtn.addEventListener("click", handler);
    }
    addHandlerUploadRecipe(handler) {
        this._parentElement.addEventListener("submit", function(e) {
            e.preventDefault();
            const formData = [
                ...new FormData(this)
            ];
            handler(formData);
        });
    }
}
exports.default = new AddRecipeView();

},{"./View.js":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["fA0o9","aenu9"], "aenu9", "parcelRequire3a11")

//# sourceMappingURL=index.e37f48ea.js.map
