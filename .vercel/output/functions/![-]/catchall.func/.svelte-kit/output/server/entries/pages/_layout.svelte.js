import "clsx";
function _layout($$renderer, $$props) {
  let { children } = $$props;
  $$renderer.push(`<div class="min-h-screen bg-slate-50"><header class="border-b border-slate-200 bg-white shadow-sm"><div class="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6"><a href="/" class="flex items-center gap-2"><span class="text-xl">🧪</span> <span class="text-lg font-bold text-slate-800">Ingredient Encyclopedia</span></a> <nav class="ml-auto flex gap-4 text-sm text-slate-500"><a href="/" class="hover:text-slate-800">Browse</a> <a href="/api/ingredients" class="hover:text-slate-800">API</a></nav></div></header> <main class="mx-auto max-w-7xl px-4 py-8 sm:px-6">`);
  children($$renderer);
  $$renderer.push(`<!----></main> <footer class="mt-16 border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-400">Sky High International · Ingredient Encyclopedia</footer></div>`);
}
export {
  _layout as default
};
