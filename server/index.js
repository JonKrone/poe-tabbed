const fetch = require('isomorphic-fetch');
const R = require('ramda');

const expectedShape = require('../api-response-spec');

const log = R.curry((descr, data) => { console.warn(descr, '\n'); console.warn(data) });
const json = (data) => data.json();

const baseURL = 'http://www.pathofexile.com/api/public-stash-tabs';

/* console exploring
let result = null;
tabs = fetch('http://www.pathofexile.com/api/public-stash-tabs')
	.then(d => d.json())
	.then(d => result = d.stashes)
*/

function fetchTabs(_nextChangeId) {
	const url = _nextChangeId ? `?id=${baseURL}` : baseURL;
	const errorDescr = `error fetching tabs${_nextChangeId ? ` with next_change_id: ${_nextChangeId}` : '.'}`

	return fetch(url)
		.then(json)
		.then(checkShape)
		.catch(log(errorDescr));
}

function fetchFromNextChangeId(nextChangeId) {
	return fetch(`http://www.pathofexile.com/api/public-stash-tabs?id=${nextChangeId}`)
		.then(json)
		.catch(log(`error fetching tabs w/ change id: ${nextChangeId}`))
}

function getNextChangeId(resp) {
	return ('next_change_id') in resp ? resp.next_change_id : throw Error('No valid change id');
}

// we'll use this during development to make sure we aren't
// unaware of any properties of the API response
function checkShape(data) {
	// R.differenceWith(comparator, expectedShape, data);
	// Recursively R.omit(Object.keys(expectedShape), data);
}

let nextChangeId = fetchInitialTabs().then(getNextChangeId)

setInterval(() => {
	fetchFromNextChangeId(nextChangeid)
		.then(getNextChangeId)

}, 3000);
