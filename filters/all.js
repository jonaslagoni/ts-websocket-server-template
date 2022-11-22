const URL = require('url');
const path = require('path');
const _ = require('lodash');
const filter = module.exports;

filter.kebabCase = string => {
	return _.kebabCase(string);
};

function pascalCase(string) {
	string = _.camelCase(string);
	return string.charAt(0).toUpperCase() + string.slice(1);
}

filter.pascalCase = string => {
	return pascalCase(string);
}
filter.camelCase = string => {
	return _.camelCase(string);
};

filter.firstLowerCase = string => {
	return _.lowerFirst(string);
};

filter.fileName = string => {
	return _.camelCase(string);
};
function toTsType(jsonSchemaType) {
	switch (jsonSchemaType.toLowerCase()) {
		case 'string':
			return 'string';
		case 'integer':
		case 'number':
			return 'Number';
		case 'boolean':
			return 'Boolean';
		case 'array':
			return 'any[]';
		case 'object':
			return 'any'
		default: return 'any';
	}
}
filter.toTsType = toTsType
filter.oneLine = string => {
	if (!string) return string;
	return string.replace(/\n/g, ' ');
};

filter.containsTag = (array, tag) => {
	if (!array || !tag) {
		return false;
	}
	return array.find(value => {
		return tag === value.name();
	});
};


filter.port = (url, defaultPort) => {
	const parsed = URL.parse(url);
	return parsed.port || defaultPort || 80;
};

filter.pathResolve = (pathName, basePath = '/') => {
	return path.resolve(basePath, pathName);
};

filter.throw = message => {
	throw new Error(message);
};