import { json } from "@sveltejs/kit";
import { f as filterIngredients, t as toSlug } from "../../../../chunks/ingredients.js";
const GET = ({ url }) => {
  const q = url.searchParams.get("q");
  const fn = url.searchParams.get("function");
  const safety = url.searchParams.get("safety");
  const limit = Math.min(parseInt(url.searchParams.get("limit") ?? "200", 10), 1e3);
  const offset = parseInt(url.searchParams.get("offset") ?? "0", 10);
  const results = filterIngredients(q, fn, safety);
  const page = results.slice(offset, offset + limit);
  return json(
    {
      total: results.length,
      limit,
      offset,
      data: page.map((i) => ({ ...i, slug: toSlug(i.inci) }))
    },
    {
      headers: {
        "Cache-Control": "public, max-age=3600",
        "Access-Control-Allow-Origin": "*"
      }
    }
  );
};
export {
  GET
};
