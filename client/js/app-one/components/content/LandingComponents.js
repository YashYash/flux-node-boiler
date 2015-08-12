console.log('#### Landing Component');

// CSS - css/app-one/states/landing.css
// PARENT ROUTE COMPONENT

var React = require('React');

module.exports = {
	parentComponent: function() {
		var parentComponent = React.createClass({
			render: function() {
				return (
					<div className="landing-content">
						<p>Landing Page</p>
					</div>
				)
			}
		});
		return parentComponent;
	}
}