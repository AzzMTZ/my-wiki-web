import React from "react";
import { Topic } from "../../schemas/topics";
import { TopicCard } from "../topic.card";
import "./topics.list.scss";

const TopicsListView: React.FC<{ topics: { [key: string]: Topic } }> = ({ topics }) => (
	<ul>
		{Object.keys(topics).map(topicId => (
			<li key={topicId}>
				<TopicCard topicData={topics[topicId]}></TopicCard>
			</li>
		))}
	</ul>
);

export default TopicsListView;
