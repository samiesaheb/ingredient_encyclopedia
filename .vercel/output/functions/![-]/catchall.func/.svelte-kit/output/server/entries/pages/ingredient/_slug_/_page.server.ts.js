import { error } from "@sveltejs/kit";
import { b as findBySlug } from "../../../../chunks/ingredients.js";
const load = ({ params }) => {
  const ingredient = findBySlug(params.slug);
  if (!ingredient) {
    error(404, `No ingredient found for "${params.slug}"`);
  }
  return { ingredient };
};
export {
  load
};
