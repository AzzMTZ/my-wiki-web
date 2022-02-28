import React from "react";
import { Topic } from "../../schemas/topics";
import "./topics.list.scss";
import noImage from "../../assets/images/no_image.jpg";

const TopicsListView: React.FC<{ topics: { [key: string]: Topic } }> = ({ topics }) => (
	<ul>
		{Object.keys(topics).map(id => (
			<li>
				<img src={noImage} alt="empty"></img>
				<div>
					<h3>{topics[id].name}</h3>
					<p>{topics[id].birth}</p>
					<p>{topics[id].type}</p>
				</div>
			</li>
		))}
	</ul>
);

export default TopicsListView;
