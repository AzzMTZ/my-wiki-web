import { useContext, useEffect, useState } from "react";
import { Topic } from "../../schemas/topics";
import TopicCardView from "./topic.card.view";
import * as myWikiService from "../../services/my.wiki";
import noImage from "../../assets/images/no_image.jpg";
import loadingImage from "../../assets/images/loader.gif";
import { CurrentWikiContext } from "../../contexts/currentWiki";

const TopicCardContainer: React.FC<{ topicData: Topic }> = ({ topicData }) => {
	const [topicImage, setTopicImage] = useState(loadingImage);
	const { wiki } = useContext(CurrentWikiContext);

	useEffect(() => {
		let isCancelled = false;

		myWikiService
			.getImage(wiki.value, topicData.name)
			.then(image => {
				if (!isCancelled) setTopicImage(image);
			})
			.catch(() => {
				if (!isCancelled) setTopicImage(noImage);
			});

		return () => {
			isCancelled = true;
		};
	}, [topicData, wiki]);

	return <TopicCardView topicData={topicData} topicImage={topicImage} />;
};

export default TopicCardContainer;
