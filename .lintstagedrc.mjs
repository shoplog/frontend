const Configuration = {
	// Type check TypeScript files
	'**/*.(ts|svelte)': () => 'pnpm tsc --noEmit',

	// Lint & Prettify TS and JS files
	'**/*.(js|ts|svelte)': (filenames) => [
		`yarn eslint ${filenames.join(' ')}`,
		`yarn prettier --write ${filenames.join(' ')} --plugin-search-dir=.`
	],

	// Prettify only Markdown and JSON files
	'**/*.(html|md|json|css)': (filenames) =>
		`yarn prettier --write ${filenames.join(' ')} --plugin-search-dir=.`
};

export default Configuration;
