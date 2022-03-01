import React from "react";
import { Topic } from "../../schemas/topics";
import { TopicCard } from "../topic.card";
import "./topics.list.scss";
import _ from "lodash";
import loadingImage from "../../assets/images/loader.gif";

const TopicsListView: React.FC<{ topics: { [key: string]: Topic }; retrieved: boolean }> = ({ topics, retrieved }) => (
	<div className="list-container">
		{_.isEmpty(topics) ? (
			retrieved ? (
				<h1>Oops, either there are no topics or there was a problem retrieving them...</h1>
			) : (
				<img src={loadingImage} alt="loading" />
			)
		) : (
			<ul>
				{Object.keys(topics).map(topicId => (
					<li key={topicId}>
						<TopicCard topicData={topics[topicId]}></TopicCard>
					</li>
				))}
			</ul>
		)}
	</div>
);

export default TopicsListView;
