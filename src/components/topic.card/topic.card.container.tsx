import { useEffect, useState } from "react";
import { Topic } from "../../schemas/topics";
import TopicCardView from "./topic.card.view";
import * as myWikiService from "../../services/my.wiki";
import { EXAMPLE_WIKI_ID } from "../../global.consts";
import noImage from "../../assets/images/no_image.jpg";

const TopicCardContainer: React.FC<{ topicData: Topic }> = ({ topicData }) => {
	const [topicImage, setTopicImage] = useState(noImage);

	useEffect(() => {
		myWikiService.getImage(EXAMPLE_WIKI_ID, topicData.name).then(setTopicImage);
	}, [topicData]);

	return <TopicCardView topicData={topicData} topicImage={topicImage} />;
};

export default TopicCardContainer;
