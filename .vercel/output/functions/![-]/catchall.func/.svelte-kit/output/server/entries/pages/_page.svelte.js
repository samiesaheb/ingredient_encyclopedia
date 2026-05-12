import { a0 as attr, a1 as stringify, e as escape_html, a2 as head, a3 as ensure_array_like, a4 as attr_class, $ as derived } from "../../chunks/index.js";
import { F as FunctionBadge, S as SafetyBadge } from "../../chunks/SafetyBadge.js";
import { F as FUNCTION_META, S as SAFETY_META } from "../../chunks/ingredients.js";
function IngredientCard($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { ingredient } = $$props;
    $$renderer2.push(`<a${attr("href", `/ingredient/${stringify(ingredient.slug)}`)} class="group flex flex-col gap-2 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-indigo-300 hover:shadow-md"><div><p class="text-xs font-medium uppercase tracking-wide text-slate-400">${escape_html(ingredient.inci)}</p> `);
    if (ingredient.common_name) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<h3 class="mt-0.5 text-base font-semibold text-slate-800 group-hover:text-indigo-700">${escape_html(ingredient.common_name)}</h3>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<h3 class="mt-0.5 text-base font-semibold italic text-slate-500">No common name</h3>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="flex flex-wrap gap-1.5">`);
    FunctionBadge($$renderer2, { value: ingredient.function });
    $$renderer2.push(`<!----> `);
    SafetyBadge($$renderer2, { value: ingredient.safety_rating });
    $$renderer2.push(`<!----></div> <div class="mt-auto flex items-center justify-between pt-1 text-xs text-slate-500"><span>${escape_html(ingredient.formulation_count.toLocaleString())}
			${escape_html(ingredient.formulation_count === 1 ? "formulation" : "formulations")}</span> `);
    if (ingredient.typical_concentration) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<span class="font-mono">${escape_html(ingredient.typical_concentration)}</span>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div></a>`);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    let query = "";
    let activeFunction = "all";
    let activeSafety = "all";
    let sortBy = "frequency";
    const FUNCTIONS = Object.keys(FUNCTION_META);
    const SAFETIES = Object.keys(SAFETY_META);
    const filtered = derived(() => {
      const q = query.trim().toLowerCase();
      let list = data.ingredients.filter((i) => {
        if (q) {
          return i.inci.toLowerCase().includes(q) || (i.common_name?.toLowerCase().includes(q) ?? false);
        }
        return true;
      });
      return list;
    });
    head("1uha8ag", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Ingredient Encyclopedia — Sky High International</title>`);
      });
    });
    $$renderer2.push(`<div class="mb-8"><h1 class="mb-1 text-3xl font-bold text-slate-800">Ingredient Encyclopedia</h1> <p class="text-slate-500">${escape_html(data.total.toLocaleString())} unique INCI ingredients sourced from 1,800+ formulations.</p> <div class="mt-4 flex flex-col gap-3 sm:flex-row"><input type="search"${attr("value", query)} placeholder="Search by INCI or common name…" class="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm shadow-sm placeholder:text-slate-400 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 sm:max-w-sm"/> `);
    $$renderer2.select(
      {
        value: sortBy,
        class: "rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm shadow-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200"
      },
      ($$renderer3) => {
        $$renderer3.option({ value: "frequency" }, ($$renderer4) => {
          $$renderer4.push(`Sort: Most used`);
        });
        $$renderer3.option({ value: "alpha" }, ($$renderer4) => {
          $$renderer4.push(`Sort: A → Z`);
        });
      }
    );
    $$renderer2.push(`</div></div> <div class="mb-3 flex flex-wrap gap-2"><!--[-->`);
    const each_array = ensure_array_like(FUNCTIONS);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let fn = each_array[$$index];
      $$renderer2.push(`<button${attr_class(`badge cursor-pointer transition ${stringify(activeFunction === fn ? FUNCTION_META[fn].classes + " ring-2 ring-offset-1 ring-current" : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50")}`)}>${escape_html(FUNCTION_META[fn].label)}</button>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="mb-6 flex flex-wrap gap-2"><!--[-->`);
    const each_array_1 = ensure_array_like(SAFETIES);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let s = each_array_1[$$index_1];
      $$renderer2.push(`<button${attr_class(`badge cursor-pointer transition ${stringify(activeSafety === s ? SAFETY_META[s].classes + " ring-2 ring-offset-1 ring-current" : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50")}`)}>${escape_html(SAFETY_META[s].label)}</button>`);
    }
    $$renderer2.push(`<!--]--></div> <p class="mb-4 text-sm text-slate-500">${escape_html(filtered().length.toLocaleString())} ingredient${escape_html(filtered().length === 1 ? "" : "s")} `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></p> `);
    if (filtered().length === 0) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="py-16 text-center text-slate-400"><p class="text-lg">No ingredients match your search.</p> <button class="mt-3 text-sm text-indigo-600 hover:underline">Clear filters</button></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"><!--[-->`);
      const each_array_2 = ensure_array_like(filtered());
      for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
        let ingredient = each_array_2[$$index_2];
        IngredientCard($$renderer2, { ingredient });
      }
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
export {
  _page as default
};
