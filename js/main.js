import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';

var ReactBox = React.createClass({
	render: function() {
		return (
			<div className="reactBox">
				<h1>A React Boilerplate</h1>
			</div>
		)
	}
});



ReactDOM.render(
<ReactBox/>,
	document.getElementById('content')
);
