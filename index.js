'use strict';
require('babel-register')({
  presets: [ 'es2015' ]
});
const got = require('got');


got('emoji.getdango.com/api/emoji', {
	json: true,
	query: {
		q: 'i am hungry'
	}
}).then(function (res) {console.log('result', res.body.result)});