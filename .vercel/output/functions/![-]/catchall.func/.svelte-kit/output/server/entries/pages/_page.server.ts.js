import { a as toSummary, g as getIngredients } from "../../chunks/ingredients.js";
const load = () => {
  const all = getIngredients();
  const ingredients = all.map(toSummary);
  const slugCount = /* @__PURE__ */ new Map();
  for (const item of ingredients) slugCount.set(item.slug, (slugCount.get(item.slug) ?? 0) + 1);
  const slugUsed = /* @__PURE__ */ new Map();
  for (const item of ingredients) {
    if ((slugCount.get(item.slug) ?? 0) > 1) {
      const n = (slugUsed.get(item.slug) ?? 0) + 1;
      slugUsed.set(item.slug, n);
      if (n > 1) item.slug = `${item.slug}-${n}`;
    }
  }
  return { ingredients, total: all.length };
};
export {
  load
};
