// bring in React from React
import React from 'react'

// define our Welcome functional component
function Welcome(props) {
	// what should the component return
	return (
		// Make sure to return some UI
		<div className="header">
			<h1>Welcome to MyFlexSpace, {props.name}!</h1>
			<p>You are located in <strong>{props.location}</strong></p>
		</div>
			
	);
}

export default Welcome;
