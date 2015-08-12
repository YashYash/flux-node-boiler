console.log('#### List Actions');

var McFly = require('app-one/libraries/McFly');
var Flux = new McFly();


var ListActions = Flux.createActions({
	addToList: function(item) {
		return {
			actionType: "ADD_TO_LIST",
			item: item
		}
	}
});

module.exports = ListActions;