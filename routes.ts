import { initPageA } from "./src/pages/pageA";
import { initPageB } from "./src/pages/pageB";
import { initPageC } from "./src/pages/pageC";
import { initPageD } from "./src/pages/pageD";
import { initPageE } from "./src/pages/pageE";
import { state } from "./state";
const routes = [
  {
    path: /pageA/,
    component: initPageA,
  },
  {
    path: /pageB/,
    component: initPageB,
  },
  {
    path: /pageC/,
    component: initPageC,
  },
  {
    path: /pageD/,
    component: initPageD,
  },
  {
    path: /pageE/,
    component: initPageE,
  },
];
const BASE_PATH = "/desafio-m5";

function isGithubPages() {
  return location.host.includes("github.io");
}

export function initRoute(rootEl: Element) {
  function goTo(path) {
    const completePath = isGithubPages() ? BASE_PATH + path : path;
    history.pushState({}, "", completePath);
    handleRoute(completePath);
  }

  function handleRoute(route) {
    console.log("El handleRoute recibió una nueva ruta", route);
    const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;
    for (const r of routes) {
      if (r.path.test(newRoute)) {
        const el = r.component({ goTo: goTo });
        if (rootEl.firstChild) {
          rootEl.firstChild.remove();
        }
        rootEl.appendChild(el);
      }
    }
  }
  if (location.pathname == "/desafio-m5/" || location.pathname == "/") {
    goTo("/pageA");
  } else {
    handleRoute(location.pathname);
  }
}
