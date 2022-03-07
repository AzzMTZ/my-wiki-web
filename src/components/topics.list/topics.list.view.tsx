import React, { Dispatch, SetStateAction } from "react";
import { Topic } from "../../schemas/topics";
import { TopicCard } from "../topic.card";
import "./topics.list.scss";
import _ from "lodash";
import loadingImage from "../../assets/images/loader.gif";
import { GenericModal } from "../generic.modal";

type TopicsListProps = {
	topics: { [key: string]: Topic };
	retrieved: boolean;
	selectTopic: Dispatch<SetStateAction<Topic | null>>;
	selectedTopic: Topic | null;
};

const TopicsListView: React.FC<TopicsListProps> = ({ topics, retrieved, selectTopic, selectedTopic }) => (
	<div className="topics-container">
		{selectedTopic && (
			<GenericModal title={selectedTopic.name} onClose={() => selectTopic(null)}>
				{selectedTopic.description}
			</GenericModal>
		)}

		{_.isEmpty(topics) ? (
			retrieved ? (
				<h1>Oops, either there are no topics or there was a problem retrieving them...</h1>
			) : (
				<img className='loading-topics' src={loadingImage} alt="loading" />
			)
		) : (
			<ul>
				{Object.keys(topics).map(topicId => (
					<li key={topicId} onClick={() => selectTopic(topics[topicId])}>
						<TopicCard topicData={topics[topicId]}></TopicCard>
					</li>
				))}
			</ul>
		)}
	</div>
);

export default TopicsListView;
