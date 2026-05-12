import * as server from '../entries/pages/ingredient/_slug_/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/ingredient/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/ingredient/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.BsJ5_Tpq.js","_app/immutable/chunks/CeMBEs9B.js","_app/immutable/chunks/CBDZVWJp.js","_app/immutable/chunks/kT5exAyy.js","_app/immutable/chunks/DswILPle.js","_app/immutable/chunks/HQluyrYA.js","_app/immutable/chunks/DiuvtZUf.js"];
export const stylesheets = [];
export const fonts = [];
