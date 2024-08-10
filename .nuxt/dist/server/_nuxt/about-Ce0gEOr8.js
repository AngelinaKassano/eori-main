import { defineComponent, ref, mergeProps, unref, useSSRContext } from "vue";
import { u as useSeoMeta } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass } from "vue/server-renderer";
import { _ as _imports_0 } from "./logot-DbSU27ES.js";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "destr";
import "klona";
import "devalue";
import "vue3-smooth-scroll";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    const showMenu = ref(false);
    useSeoMeta({
      title: "Eori Аниме светильники 3D",
      ogTitle: "Eori Аниме светильники 3D",
      description: "Купите уникальные ночные светильники 3D и аниме, включая светильники в стиле Геншин, тян, тяночка, неко тян и GTA5.",
      ogDescription: "Купите уникальные ночные светильники 3D и аниме, включая светильники в стиле Геншин, тян, тяночка, неко тян и GTA5."
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "banner-1" }, _attrs))}><nav class="container px-6 mx-auto md:flex md:justify-between md:items-center"><div class="flex items-center justify-between"><div class="relative w-16 h-16"><img class="rounded-full border border-gray-100 shadow-sm"${ssrRenderAttr("src", _imports_0)} alt="user image"></div><div class="flex md:hidden"><button type="button" class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"><svg viewBox="0 0 24 24" class="w-6 h-6 fill-current"><path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path></svg></button></div></div><ul class="${ssrRenderClass([unref(showMenu) ? "flex" : "hidden", "flex-col items-end mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"])}"><li class="menu-button"><a href="/">Главная</a></li><li class="menu-button"><a href="/catalog">Каталог</a></li><li class="menu-button"><a href="/about">О нас </a></li></ul></nav><svg class="w-4 h-4 md:w-10 md:h-10 lg:w-10 lg:h-10 xl:h-10 xl:w-10 fill-current" role="img" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><g><path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path></g></svg></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=about-Ce0gEOr8.js.map
