console.log('#### App Component');

var React = require('react');

var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

module.exports = {
	AppComponent: function() {
		var AppComponent = React.createClass({
			render: function() {
				return (
					<div>
						<h1>App Component</h1>
						<h1>Nav Component will go here</h1>
						<h1>This is the content belooow</h1>
						<RouteHandler {...this}/>
					</div>
				)
			}
		});
		return AppComponent;
	}
}