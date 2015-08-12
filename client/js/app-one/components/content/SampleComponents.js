console.log('#### Sample Components');
var React = require('react');
var ListStore = require('app-one/stores/ListStore');
var ListActions = require('app-one/actions/ListActions');

function getList() {
	return {
		list: ListStore.getList()
	}
}

var exports = module.exports = {
	parentComponent: function() {
		var ListController = exports.listController();
		var Parent = React.createClass({
			getInitialState: function() {
				return getList();
			},			
			render: function() {
				return (
					<div>
						<p>This is the sample page</p>
						<p>Update model and view using Flux</p>
						<ListController/>
					</div>
				)
			}
		});
		return Parent;
	},
	listController: function() {
		var List = exports.list();
		var ListController = React.createClass({
			mixins: [ListStore.mixin],
			getInitialState: function() {
				return getList();
			},
			storeDidChange: function() {
				console.log('#### Store changed');
				this.setState(getList());
			},
			addItemToList: function(e) {
				console.log("#### Adding an item to the list");
				var item = {
					"name": Math.floor(Math.random() * 1000)
				}
				ListActions.addToList(item);
			},						
			render: function() {
				return (
					<div> 
						<h1>This is the list controller</h1>
						<button onClick={this.addItemToList}>Add random number to list </button>
						<List list={this.state.list}/>
					</div>
				)
			}
		});
		return ListController;
	},
	list: function() {
		var ListItem = exports.item();
		var List = React.createClass({
			getInitialState: function() {
				return getList();
			},			
			render: function() {
				var listRepeat = this.props.list.map(function(item, index) {
					return (
						<ListItem
							key={index}
							item={item}/>
					)
				})
				return (
					<div>
						<h1>This is the list component</h1>
						{listRepeat}
					</div>
				)
			}
		});
		return List;
	},
	item: function() {
		var ListItem = React.createClass({
			getInitialState: function() {
				console.log(this.props);
				return null;
			},			
			render: function() {
				return (
					<div> {this.props.item.name} </div>
				)
			}
		})
		return ListItem;
	}
}
