import { a2 as head, e as escape_html, a3 as ensure_array_like, $ as derived, a0 as attr } from "../../../../chunks/index.js";
import { F as FunctionBadge, S as SafetyBadge } from "../../../../chunks/SafetyBadge.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    const i = derived(() => data.ingredient);
    head("1fok70e", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(i().common_name ?? i().inci)} — Ingredient Encyclopedia</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", i().description ?? `${i().inci} cosmetic ingredient.`)}/>`);
    });
    $$renderer2.push(`<nav class="mb-6 text-sm text-slate-500"><a href="/" class="hover:text-indigo-600">← Back to all ingredients</a></nav> <div class="grid gap-8 lg:grid-cols-3"><div class="lg:col-span-2 space-y-6"><div><p class="text-xs font-semibold uppercase tracking-widest text-slate-400">INCI Name</p> <h1 class="mt-1 text-3xl font-bold text-slate-800">${escape_html(i().inci)}</h1> `);
    if (i().common_name && i().common_name !== i().inci) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<p class="mt-1 text-xl text-slate-500">${escape_html(i().common_name)}</p>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> <div class="mt-3 flex flex-wrap gap-2">`);
    FunctionBadge($$renderer2, { value: i().function ?? null });
    $$renderer2.push(`<!----> `);
    SafetyBadge($$renderer2, { value: i().safety_rating ?? null });
    $$renderer2.push(`<!----></div></div> `);
    if (i().description) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<section><h2 class="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-400">About</h2> <p class="text-base leading-relaxed text-slate-700">${escape_html(i().description)}</p></section>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (i().trade_names.length > 0) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<section><h2 class="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-400">Trade Names (${escape_html(i().trade_names.length)})</h2> <div class="flex flex-wrap gap-2"><!--[-->`);
      const each_array = ensure_array_like(i().trade_names);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let name = each_array[$$index];
        $$renderer2.push(`<span class="rounded-md bg-slate-100 px-2.5 py-1 text-xs text-slate-700">${escape_html(name)}</span>`);
      }
      $$renderer2.push(`<!--]--></div></section>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (i().product_names.length > 0) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<section><h2 class="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-400">Appears In (${escape_html(i().product_names.length)} products)</h2> <ul class="space-y-1 text-sm text-slate-600"><!--[-->`);
      const each_array_1 = ensure_array_like(i().product_names.slice(0, 15));
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let name = each_array_1[$$index_1];
        $$renderer2.push(`<li class="flex items-start gap-1.5"><span class="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-slate-400"></span> ${escape_html(name)}</li>`);
      }
      $$renderer2.push(`<!--]--> `);
      if (i().product_names.length > 15) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<li class="text-slate-400 italic">+ ${escape_html(i().product_names.length - 15)} more…</li>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></ul></section>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> <aside class="space-y-4"><div class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"><h2 class="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-400">At a Glance</h2> <dl class="space-y-3 text-sm">`);
    if (i().function) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="flex justify-between"><dt class="text-slate-500">Function</dt> <dd class="font-medium text-slate-700 capitalize">${escape_html(i().function)}</dd></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (i().safety_rating) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="flex justify-between"><dt class="text-slate-500">Safety</dt> <dd class="font-medium text-slate-700 capitalize">${escape_html(i().safety_rating)}</dd></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (i().typical_concentration) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="flex justify-between"><dt class="text-slate-500">Typical use</dt> <dd class="font-mono text-slate-700">${escape_html(i().typical_concentration)}</dd></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> <div class="flex justify-between border-t border-slate-100 pt-3"><dt class="text-slate-500">Formulations</dt> <dd class="font-semibold text-slate-800">${escape_html(i().formulation_count.toLocaleString())}</dd></div> <div class="flex justify-between"><dt class="text-slate-500">Occurrences</dt> <dd class="font-semibold text-slate-800">${escape_html(i().total_occurrences.toLocaleString())}</dd></div> <div class="flex justify-between"><dt class="text-slate-500">Trade names</dt> <dd class="font-semibold text-slate-800">${escape_html(i().trade_names.length)}</dd></div></dl></div></aside></div>`);
  });
}
export {
  _page as default
};
