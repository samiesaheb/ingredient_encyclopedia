export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {start:"_app/immutable/entry/start.D-sKXaCo.js",app:"_app/immutable/entry/app.CfoJQJC5.js",imports:["_app/immutable/entry/start.D-sKXaCo.js","_app/immutable/chunks/D3_Bh_47.js","_app/immutable/chunks/CBDZVWJp.js","_app/immutable/chunks/BlcYMZjh.js","_app/immutable/entry/app.CfoJQJC5.js","_app/immutable/chunks/CBDZVWJp.js","_app/immutable/chunks/kT5exAyy.js","_app/immutable/chunks/CeMBEs9B.js","_app/immutable/chunks/BlcYMZjh.js","_app/immutable/chunks/DswILPle.js","_app/immutable/chunks/HQluyrYA.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/ingredients",
				pattern: /^\/api\/ingredients\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/ingredients/_server.ts.js'))
			},
			{
				id: "/ingredient/[slug]",
				pattern: /^\/ingredient\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
