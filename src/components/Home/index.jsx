import React from "react";
import Post from "../Post/index.jsx";
import Welcome from "../Welcome/index.jsx";

const post = {
	title: "Eff Off Zuck",
	author: "Miss London",
	body: "I secretly recruited a group of superheroes to save the Internet",
};

function Home(props) {
	return (
		<div>
			<Welcome name={"Jihye"} location={"San Francisco"} />
			<Post title={post.title} author={post.author} body={post.body} />
		</div>
	);
}

export default Home;