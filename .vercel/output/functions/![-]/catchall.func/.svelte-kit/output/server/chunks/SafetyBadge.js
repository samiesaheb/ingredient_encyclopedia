import { a4 as attr_class, a1 as stringify, e as escape_html, $ as derived } from "./index.js";
import { F as FUNCTION_META, S as SAFETY_META } from "./ingredients.js";
function FunctionBadge($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { value } = $$props;
    const meta = derived(() => value ? FUNCTION_META[value] : null);
    if (meta()) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<span${attr_class(`badge ${stringify(meta().classes)}`)}>${escape_html(meta().label)}</span>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function SafetyBadge($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { value } = $$props;
    const meta = derived(() => value ? SAFETY_META[value] : null);
    if (meta()) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<span${attr_class(`badge ${stringify(meta().classes)}`)}>${escape_html(meta().label)}</span>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
export {
  FunctionBadge as F,
  SafetyBadge as S
};
