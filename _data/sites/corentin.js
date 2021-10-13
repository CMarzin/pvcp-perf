module.exports = {
	name: "Site Corentin", // optional, falls back to object key
	description: "Liste des sites perso",
	options: {
		frequency: 60 * 23, // 23 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
    chromeFlags: ['--headless', '--no-sandbox', '--disable-setuid-sandbox'],
		freshChrome: "site"
	},
	urls: [
		"https://cocoweb.fr",
	]
};