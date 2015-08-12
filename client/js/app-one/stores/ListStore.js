console.log('#### List Store');

var McFly = require('app-one/libraries/McFly');
var Flux = new McFly();

_list = [
	{
		"name": "1234"
	}
];

function addToList(item) {
	console.log('#### Adding new item');
	_list.push(item);
}

var ListStore = Flux.createStore({
	getList: function() {
		return _list;
	}
}, function(payload) {
	console.log('#### Recieved Payload');

	console.log(payload);
	if(payload.actionType === 'ADD_TO_LIST') {
		console.log('#### In here');
		addToList(payload.item);
		ListStore.emitChange();
	}
});

module.exports = ListStore;