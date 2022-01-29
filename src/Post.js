// bring in React from React
import React from 'react'

// define our Welcome functional component
function Post(props) {

	// what should the component return
	return (
		// Make sure to return some UI
        <div className="card">
			<h2>Title: {props.title}</h2>
			<p>By: {props.author}</p>
            <div>
            <p>Body: {props.body}</p>
            </div>
        </div>		
	);
}

export default Post;
