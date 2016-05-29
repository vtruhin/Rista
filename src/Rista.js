let { EventEmitter, map, list, cellx } = require('cellx');
let Attributes = require('./Attributes');
let Properties = require('./Properties');
let Component = require('./Component');
let XContent = require('./components/x-content');
let camelize = require('./utils/camelize');
let hyphenize = require('./utils/hyphenize');
let escapeHTML = require('./utils/escapeHTML');
let unescapeHTML = require('./utils/unescapeHTML');

let Rista = module.exports = {
	EventEmitter,
	map,
	list,
	cellx,
	Attributes,
	Properties,
	Component,

	components: {
		XContent
	},

	utils: {
		camelize,
		hyphenize,
		escapeHTML,
		unescapeHTML
	}
};
Rista.Rista = Rista; // for destructuring
