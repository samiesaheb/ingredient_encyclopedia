import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.TdoKBd9W.js","_app/immutable/chunks/CeMBEs9B.js","_app/immutable/chunks/CBDZVWJp.js","_app/immutable/chunks/kT5exAyy.js","_app/immutable/chunks/DswILPle.js","_app/immutable/chunks/HQluyrYA.js","_app/immutable/chunks/DiuvtZUf.js"];
export const stylesheets = [];
export const fonts = [];
