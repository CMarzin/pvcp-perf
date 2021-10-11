module.exports = {
	name: "PVCP", // optional, falls back to object key
	description: "Liste des sites PVCP",
	options: {
		frequency: 60 * 23, // 23 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site"
	},
	urls: [
		"https://www.centerparcs.fr/",
		"https://www.centerparcs.be/be-wl",
		"https://www.centerparcs.be/be-vl",
		"https://www.centerparcs.ch/ch-cf",
		"https://www.centerparcs.ch/ch-cd",
		"https://www.centerparcs.de/",
		"https://www.centerparcs.nl/",
		"https://www.pierreetvacances.com/"
	]
};