import { useEffect, useState } from "react";
import { EXAMPLE_WIKI_ID } from "../../global.consts";
import { Topic } from "../../schemas/topics";
import * as myWikiService from "../../services/my.wiki";
import TopicsListView from "./topics.list.view";

const TopicsListContainer = () => {
	const [topics, setTopics] = useState<{ [key: string]: Topic }>({});

	useEffect(() => {
		myWikiService.getTopicsOfWiki(EXAMPLE_WIKI_ID).then(topics => setTopics(topics));
	});

	return <TopicsListView topics={topics} />;
};

export default TopicsListContainer;
